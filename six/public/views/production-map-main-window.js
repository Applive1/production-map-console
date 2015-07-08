
import Six from '@grexie/six';
import $ from 'jquery';

var projectNodes = new WeakMap();
var referencesNodes = new WeakMap();
var referenceNodes = new WeakMap();
var folderNodes = new WeakMap();
var fileNodes = new WeakMap();

export default Six.View.extend({
    createdCallback: function() {
        this._super();

        this.set('references', {});
        this.set('projects', {});
        this.set('files', {});
        this.set('folders', {});

        this.projectTree = this.shadowRoot.querySelector('.project-tree');
        this.designer = this.shadowRoot.querySelector('production-map-designer');

        this.designer.style.setProperty('display', 'none');

        this.currentFile = null;
        this.currentFileInterval = null;
        this.bind('currentFile').observe(function(oldValue, newValue) {
            if(this.currentFileInterval) clearInterval(this.currentFileInterval);
            if(oldValue) {
                fileNodes.get(oldValue).save();
            }

            if(newValue) {
                this.designer.set('file', newValue);
                this.designer.style.removeProperty('display');
                this.currentFileInterval = setInterval(function() {
                    fileNodes.get(newValue).save();
                }, 60000);
            } else {
                this.designer.set('file', null);
                this.designer.style.setProperty('display', 'none');
            }
        }.bind(this));

        this.bind('user.currentWorkspace').observe(function(oldValue, newValue) {
            while(this.projectTree.firstChild) this.projectTree.removeChild(this.projectTree.firstChild);
            this.designer.set('file', null);

            if(newValue) {
                $.get(Six.Config.public.PM_API_ROOT + '/workspace/' + newValue).then(function(response) {
                    this.set('workspace', response.workspace);

                    this.set('workspaceNode', document.createElement('production-map-tree-node'));
                    this.workspaceNode.set('name', this.workspace.name);
                    this.workspaceNode.set('icon', '/assets/folder.svg');
                    this.workspaceNode.onActivate = function() {
                        this.set('currentFile', null);
                    }.bind(this);
                    this.projectTree.appendChild(this.workspaceNode);

                    return $.when.apply($, response.workspace.projects.map(function(project) {
                        return $.get(Six.Config.public.PM_API_ROOT + '/project/' + project).then(function(response) {
                            return response.project;
                        });
                    }));
                }.bind(this)).then(function() {
                    var projects = Array.prototype.slice.call(arguments);
                    this.set('projects', projects);

                    return $.when.apply($, this.projects.map(this.onAddProject.bind(this)));
                }.bind(this)).then(function() {
                    this.workspaceNode.set('expanded', true);
                }.bind(this)).fail(function(err) {
                    alert(err);
                });
            }
        }.bind(this));
    },

    save: function() {
        if(this.currentFile) {
            fileNodes.get(this.currentFile).save();
        }
    },

    buildFolderMenu: function(project, folder) {
        var folderNode = projectNodes.get(project);
        if(folder !== null) {
            folderNode = folderNodes.get(folder);
        }

        var contextMenu = document.createElement('production-map-popup');
        document.body.appendChild(contextMenu);
        var contextMenuHost = document.createElement('production-map-menu');
        contextMenu.appendChild(contextMenuHost);

        var addFolderButton = document.createElement('six-button');
        addFolderButton.textContent = 'Create Folder';
        addFolderButton.onclick = function(evt) {
            contextMenu.closePopup();
            var newFolderNode = this.addFolder(project, folder);
            folderNode.set('expanded', true);
            newFolderNode.beginEditing();
        }.bind(this);
        contextMenuHost.appendChild(addFolderButton);

        var addMapButton = document.createElement('six-button');
        addMapButton.textContent = 'Create Map';
        addMapButton.onclick = function(evt) {
            contextMenu.closePopup();
            var newFileNode = this.addMap(project, folder);
            folderNode.set('expanded', true);
            newFileNode.beginEditing();
        }.bind(this);
        contextMenuHost.appendChild(addMapButton);

        folderNode.shadowRoot.querySelector('.tree-leaf').addEventListener('contextmenu', function(evt) {
            evt.preventDefault();
            contextMenu.showPopup(evt, 'right', 'left', 'bottom', 'top');
        }.bind(this));

        return contextMenuHost;
    },

    buildFileMenu: function(file) {
        var fileNode = fileNodes.get(file);

        var contextMenu = document.createElement('production-map-popup');
        document.body.appendChild(contextMenu);
        var contextMenuHost = document.createElement('production-map-menu');
        contextMenu.appendChild(contextMenuHost);

        var deleteFileButton = document.createElement('six-button');
        deleteFileButton.textContent = 'Delete File';
        deleteFileButton.onclick = function(evt) {
            contextMenu.closePopup();
            this.deleteFile(file);
        }.bind(this);
        contextMenuHost.appendChild(deleteFileButton);

        fileNode.shadowRoot.querySelector('.tree-leaf').addEventListener('contextmenu', function(evt) {
            evt.preventDefault();
            contextMenu.showPopup(evt, 'right', 'left', 'bottom', 'top');
        }.bind(this));

        return contextMenuHost;
    },

    onAddProject: function(project) {
        this.workspaceNode.set('empty', false);

        this.set('projects.' + project.id, project);

        var projectNode = document.createElement('production-map-tree-node');
        projectNode.set('name', project.name);
        projectNode.set('icon', '/assets/folder.svg');
        projectNode.set('empty', false);
        projectNodes.set(project, projectNode);

        projectNode.onActivate = function() {
            this.set('currentFile', null);
        }.bind(this);

        this.buildFolderMenu(project, null);

        this.onAddReferencesFolder(project);

        var d1 = $.when.apply($, project.references.map(function(reference) {
            if(reference in this.references) return this.references[reference];
            return this.references[reference] = $.get(Six.Config.public.PM_API_ROOT + '/project/' + reference).then(function(response) {
                return response.project;
            });
        }.bind(this))).then(function() {
            var references = Array.prototype.slice.call(arguments);

            references.forEach(this.onAddReference.bind(this, project));

            var x = this.workspaceNode.firstChild;
            while(x && x.get('name').toLowerCase() < project.name.toLowerCase()) x = x.nextSibling;
            if(x) {
                this.workspaceNode.insertBefore(projectNode, x);
            } else {
                this.workspaceNode.appendChild(projectNode);
            }
        }.bind(this));

        var d2 = $.get(Six.Config.public.PM_API_ROOT + '/project/' + project.id + '/tree').then(function(response) {
            response.files.forEach(function(file) {
                this.set('files.' + file.id, file);
            }.bind(this));

            (function next(parent) {
                var filter = function(x) {
                    if(parent) {
                        return x.parent === parent.id;
                    } else {
                        return typeof x.parent === 'undefined' || x.parent === null;
                    }
                };
                var folders = response.folders.filter(filter);
                var files = response.files.filter(filter);

                folders.forEach(function(folder) {
                    this.addFolder(project, parent, folder);
                    next.call(this, folder);
                }.bind(this));

                files.sort(function(a, b) {
                    if(a.codeBehind) return 1;
                    if(b.codeBehind) return -1;
                    return 0;
                });

                files.forEach(function(file) {
                    this.addFile(project, parent, file);
                }.bind(this));
            }.bind(this))(null);
        }.bind(this)).fail(function(err) {
            alert(err);
        });

        return $.when(d1, d2).then(function() {
            projectNode.set('expanded', true);
        });
    },

    addFolder: function(project, parent, folder) {

        if(!folder) {
            folder = {
                name: 'New Folder',
                parent: parent && parent.id,
                project: project.id
            };
        }

        var projectNode = projectNodes.get(project);

        var parentNode = projectNode;
        if(parent !== null) {
            parentNode = folderNodes.get(parent);
        }
        parentNode.set('empty', false);

        var folderNode = document.createElement('production-map-tree-node');
        folderNode.set('name', folder.name);
        folderNode.set('icon', '/assets/folder.svg');

        folderNode.onActivate = function() {
            this.set('currentFile', null);
        }.bind(this);

        parentNode.appendChild(folderNode);
        folderNode.onEndEditing = function() {
            var saveFolder = true;

            for(var i = 0; i < parentNode.childNodes.length; i++) {
                if(parentNode.childNodes[i] === folderNode) continue;

                if(parentNode.childNodes[i].get('name') === folderNode.get('name')) {
                    alert(folderNode.get('name') + ' cannot be used.');
                    folderNode.beginEditing();
                    saveFolder = false;
                }
            }

            if(saveFolder) {
                folder.name = folderNode.get('name');
                var promise;
                if(folder.id) {
                    promise = $.post(Six.Config.public.PM_API_ROOT + '/project/' + project.id + '/folder/' + folder.id, { folder: folder });
                } else {
                    promise = $.post(Six.Config.public.PM_API_ROOT + '/project/' + project.id + '/folder', { folder: folder });
                }

                promise.then(function(response) {
                    folder.id = response.folder.id;
                    this.folders[folder.id] = folder;
                }.bind(this));
            }
        }.bind(this);
        folderNode.onBeginEditing = folderNode.beginEditing.bind(folderNode);
        if(folder.id) this.folders[folder.id] = folder;

        folderNodes.set(folder, folderNode);

        this.buildFolderMenu(project, folder);

        return folderNode;
    },

    detectFileType: function(fileNode) {
        var extension = fileNode.get('name').match(/\.([^\.]+)$/);
        if(!extension) return;
        extension = extension[1];
        switch(extension) {
            case 'js':
                fileNode.set('icon', '/assets/js-file.svg');
                break;
            case 'xml':
                fileNode.set('icon', '/assets/markup-file.svg');
                break;
        }
    },

    addFile: function(project, parent, file) {
        var projectNode = projectNodes.get(project);

        if(!file) {
            file = {
                name: 'New File.md'
            };
        }
        file.content = file.content || '';
        file.parent = parent && parent.id;
        file.project = project.id;

        var parentNode = projectNode;
        if(parent) {
            parentNode = folderNodes.get(parent);
        }
        if(file.codeBehind) {
            if(typeof file.codeBehind === 'string') {
                parentNode = fileNodes.get(this.files[file.codeBehind]);
            } else {
                parentNode = fileNodes.get(file.codeBehind);
            }
        }

        parentNode.set('empty', false);

        var fileNode = document.createElement('production-map-tree-node');
        fileNode.bind('name').observe(function() {
            this.detectFileType(fileNode);

            // keep codebehind files in sync
            var x = fileNode.firstChild;
            do {
                if(!x || x.nodeType !== Node.ELEMENT_NODE) continue;

                var extension = x.get('name').match(/\.([^\.]+)$/);
                if(extension) {
                    extension = extension[1];
                    x.set('name', fileNode.get('name') + '.' + extension);
                }
            } while(x && (x = x.nextSibling));
        }.bind(this));
        fileNode.set('name', file.name);


        parentNode.appendChild(fileNode);
        fileNode.onEndEditing = function() {
            var saveFile = true;

            for(var i = 0; i < parentNode.childNodes.length; i++) {
                if(parentNode.childNodes[i] === fileNode) continue;

                if(parentNode.childNodes[i].get('name') === fileNode.get('name')) {
                    alert(fileNode.get('name') + ' cannot be used.');
                    fileNode.beginEditing();
                    saveFile = false;
                    break;
                }
            }

            if(saveFile) fileNode.save().fail(function(err) {
                console.error(err);
            });
        };
        if(!file.codeBehind) {
            fileNode.onBeginEditing = fileNode.beginEditing.bind(fileNode);
        }

        fileNode.save = function() {
            file.name = fileNode.get('name');
            if(file.codeBehind) {
                file.codeBehind = file.codeBehind.id || file.codeBehind;
            }

            var promise;
            if(file.id) {
                promise = $.post(Six.Config.public.PM_API_ROOT + '/project/' + project.id + '/file/' + file.id, { file: file });
            } else {
                promise = $.post(Six.Config.public.PM_API_ROOT + '/project/' + project.id + '/file', { file: file });
            }

            return promise.then(function(response) {
                file.id = response.file.id;
                this.set('files.' + file.id, file);

                // save codebehind files at the same time, as their name or contents
                // might be dependent on the codefront file
                var x = fileNode.firstChild, promises = [];
                do {
                    if(!x || x.nodeType !== Node.ELEMENT_NODE) continue;

                    promises.push(x.save());
                } while(x && (x = x.nextSibling));

                return $.when.apply($, promises);
            }.bind(this));
        }.bind(this);

        fileNode.onActivate = function() {
            this.set('currentFile', file);
        }.bind(this);

        fileNodes.set(file, fileNode);
        if(file.id) this.set('files.' + file.id, file);

        this.buildFileMenu(file);

        return fileNode;
    },

    addMap: function(project, parent) {
        var rootFile = { name: 'new-map.xml' };
        var childFile = { name: rootFile.name + '.js', codeBehind: rootFile };

        var rootNode = this.addFile(project, parent, rootFile);
        var childNode = this.addFile(project, parent, childFile);

        return rootNode;
    },

    onAddReferencesFolder: function(project) {
        var projectNode = projectNodes.get(project);

        var referencesNode = document.createElement('production-map-tree-node');
        referencesNode.set('name', 'References');
        referencesNode.set('icon', '/assets/references-folder.svg');
        referencesNodes.set(project, referencesNode);
        projectNode.appendChild(referencesNode);

        referencesNode.onActivate = function() {
            this.set('currentFile', null);
        }.bind(this);

        var contextMenu = document.createElement('production-map-popup');
        document.body.appendChild(contextMenu);
        var contextMenuHost = document.createElement('production-map-menu');
        contextMenu.appendChild(contextMenuHost);

        var addReferenceButton = document.createElement('six-button');
        addReferenceButton.textContent = 'Add Reference';
        addReferenceButton.onclick = function(evt) {
            contextMenu.closePopup();
            this.showAddReferenceDialog(project);
        }.bind(this);
        contextMenuHost.appendChild(addReferenceButton);

        referencesNode.shadowRoot.querySelector('.tree-leaf').addEventListener('contextmenu', function(evt) {
            evt.preventDefault();
            contextMenu.showPopup(evt, 'right', 'left', 'bottom', 'top');
        }.bind(this));
    },

    showAddReferenceDialog: function(project) {
        var popup = document.createElement('production-map-popup');
        popup.setAttribute('background', '');
        popup.set('background', true);
        document.body.appendChild(popup);
        popup.onClose = function() {
            popup.parentNode.removeChild(popup);
        };


        var dialog = document.createElement('production-map-add-reference-dialog');
        dialog.set('workspace', this.get('workspace'));
        dialog.set('project', project);
        dialog.onAddReference = function(reference) {
            popup.closePopup();
            popup.parentNode.removeChild(popup);

            project.references.push(reference.id);

            $.post(Six.Config.public.PM_API_ROOT + '/project/' + project.id, { project: project }).then(function(response) {
                this.onAddReference(project, reference);
            }.bind(this)).fail(function(err) {
                alert(err);
            });
        }.bind(this);
        popup.appendChild(dialog);

        setTimeout(function() {
            popup.showPopup();
        }, 0);
    },

    onAddReference: function(project, reference) {
        var referencesNode = referencesNodes.get(project);

        var referenceNode = document.createElement('production-map-tree-node');
        referenceNode.set('name', reference.name);
        referenceNode.set('icon', '/assets/reference.svg');
        referencesNode.set('empty', false);
        referenceNodes.set(project, referenceNodes.get(project) || {});
        referenceNodes.get(project)[reference.id] = referenceNode;

        referenceNode.onActivate = function() {
            this.set('currentFile', null);
        }.bind(this);

        var contextMenu = document.createElement('production-map-popup');
        document.body.appendChild(contextMenu);
        var contextMenuHost = document.createElement('production-map-menu');
        contextMenu.appendChild(contextMenuHost);

        var removeReferenceButton = document.createElement('six-button');
        removeReferenceButton.textContent = 'Remove Reference';
        removeReferenceButton.onclick = function(evt) {
            contextMenu.closePopup();
            this.onRemoveReference(project, reference);
        }.bind(this);
        contextMenuHost.appendChild(removeReferenceButton);

        referenceNode.shadowRoot.querySelector('.tree-leaf').addEventListener('contextmenu', function(evt) {
            evt.preventDefault();
            contextMenu.showPopup(evt, 'right', 'left', 'bottom', 'top');
        }.bind(this));

        var x = referencesNode.firstChild;
        while(x && x.get('name').toLowerCase() < reference.name.toLowerCase()) x = x.nextSibling;
        if(x) {
            referencesNode.insertBefore(referenceNode, x);
        } else {
            referencesNode.appendChild(referenceNode);
        }
    },

    onRemoveReference: function(project, reference) {
        project.references.splice(project.references.indexOf(reference.id), 1);

        $.post(Six.Config.public.PM_API_ROOT + '/project/' + project.id, { project: project }).then(function() {
            var referenceNode = referenceNodes.get(project)[reference.id];
            var referencesNode = referencesNodes.get(project);

            referencesNode.removeChild(referenceNode);
            if(!referencesNode.firstChild) referencesNode.set('empty', true);
        }.bind(this)).fail(function(err) {
            alert(err);
        });
    }


});