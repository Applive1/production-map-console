
import './acorn';
import { parse_dammit as parse } from './acorn_loose';
import { recursive as recursiveWalk } from './walk';

var sources = {
    '@production-map/core': {
        default: require('../api/core')
    }
};

var index = new WeakMap();

export default function getIndex(editor, offset) {

    if(index.get(editor.file) && index.get(editor.file).content === editor.file.content) {
        return index.get(editor.file);
    }

    var tokens = [], comments = [], ast = parse(editor.file.content || '', {
        ecmaVersion: 6,
        sourceType: 'module',
        locations: true,
        onToken: tokens,
        onComment: comments
    });

    var globalState = { content: editor.file.content, globals: {}, locals: {}, thisObject: null, exports: {} };
    recursiveWalk(ast, globalState, {
        Program: function(node, state, c) {
            console.info(node);
            node.body.forEach(function(node) {
                c(node, state);
            });
        },
        ImportDeclaration: function(node, state, c) {
            var source;

            if(node.source.value[0] !== '.') {
                if(node.source.value in sources) {
                    source = sources[node.source.value];
                } else {
                    var path = node.source.value.split('/');

                    var project = editor.projects[editor.file.project];
                    var reference;

                    for(var i = 0; i < project.references.length; i++) {
                        if(editor.projects[project.references[i]].name !== path[0]) continue;

                        path.shift();
                        reference = editor.projects[project.references[i]];
                    }

                    if(!reference) return;

                    var current = null;
                    for(var i = 0; i < path.length - 1; i++) {
                        if(path[i] === '.') {

                        } else if(path[i] === '..') {
                            if(current.parent) {
                                current = editor.folders[current.parent];
                            } else {
                                return;
                            }
                        } else {
                            var currentFolderId = Object.keys(editor.folders).filter(function(folderId) {
                                var folder = editor.folders[folderId];
                                return folder.project === reference.id && folder.name === path[i] && folder.parent === (current && current.id || null);
                            })[0];
                            if(!currentFolderId) return;
                            current = editor.folders[currentFolderId];
                        }
                    }

                    var currentFileId = Object.keys(editor.files).filter(function(fileId) {
                        var file = editor.files[fileId];
                        return file.project === reference.id && (file.name === path[i] || file.name === path[i] + '.xml.js')  && file.parent === (current && current.id || null);
                    })[0];
                    if(!currentFileId) return;
                    current = editor.files[currentFileId];

                    debugger;
                    source = getIndex({ file: current, folders: editor.folders, files: editor.files, projects: editor.projects, references: editor.references }).exports;
                }
            } else {
                var path = node.source.value.split('/');
                var current = editor.file;

                if (current.parent) {
                    current = editor.folders[current.parent];
                } else {
                    current = null;
                }

                for(var i = 0; i < path.length - 1; i++) {
                    if(path[i] === '.') {

                    } else if(path[i] === '..') {
                        if(current.parent) {
                            current = editor.folders[current.parent];
                        } else {
                            return;
                        }
                    } else {
                        var currentFolderId = Object.keys(editor.folders).filter(function(folderId) {
                            var folder = editor.folders[folderId];
                            return folder.project === editor.file.project && folder.name === path[i] && folder.parent === (current && current.id || null);
                        })[0];
                        if(!currentFolderId) return;
                        current = editor.folders[currentFolderId];
                    }
                }

                var currentFileId = Object.keys(editor.files).filter(function(fileId) {
                    var file = editor.files[fileId];
                    return file.project === editor.file.project && (file.name === path[i] || file.name === path[i] + '.xml.js')  && file.parent === (current && current.id || null);
                })[0];
                if(!currentFileId) return;
                current = editor.files[currentFileId];

                source = getIndex({ file: current, folders: editor.folders, files: editor.files, projects: editor.projects, references: editor.references }).exports;
            }

            node.specifiers.forEach(function(specifier) {
                if(specifier.type === 'ImportDefaultSpecifier') {
                    state.globals[specifier.local.name] = source['default'];
                } else if(specifier.type === 'ImportSpecifier') {
                    console.info(source);
                    state.globals[specifier.local.name] = source[specifier.imported.name];
                }
            });
        },
        ExportNamedDeclaration: function(node, state, c) {
            var exports = {};
            c(node.declaration, exports);
            for(var v in exports) {
                globalState.globals[v] = exports[v];
                state.exports[v] = exports[v];
            }
        },
        FunctionDeclaration: function(node, state, c) {
            if(node.id) {
                state[node.id.name] = function() { };
            }
        },
        ExportDefaultDeclaration: function(node, state, c) {
            var exports = {};
            c(node.declaration, exports);
            state.exports.default = exports.expression;
        },
        CallExpression: function(node, state, c) {
            var x = node.callee;
            var path = [];
            while(x.type === 'MemberExpression' && x.property.type === 'Identifier') {
                path.unshift(x.property.name);
                x = x.object;
            }
            if(x.type !== 'Identifier') return;
            path.unshift(x.name);

            if(path[path.length - 1] === 'extend' || path[path.length - 1] === 'reopen') {
                var method = path.pop();

                var constructor = globalState.globals, x;
                while((x = path.shift()) && constructor) {
                    constructor = constructor[x];
                }

                if(!(typeof constructor === 'function')) return;
                var prototype = Object.create(constructor.prototype);

                node.arguments.forEach(function(p) {
                    if(p.type === 'ObjectExpression') {
                        p.properties.forEach(function(property) {
                            var key;
                            if(property.key.type === 'Identifier') {
                                key = property.key.name;
                            } else {
                                key = property.key.value;
                            }

                            var value;
                            if(property.value.type === 'FunctionExpression') {
                                value = function() {};
                            } else if(property.value.type === 'Literal') {
                                value = property.value.value;
                            } else {
                                console.info(property.value);
                            }

                            if(property.kind === 'init') {
                                prototype[key] = value;
                            } else {
                                console.info(property);
                            }
                        });
                    } else if(p.type === 'MemberExpression') {
                        var x = p;
                        var path = [];
                        while(x.type === 'MemberExpression' && x.property.type === 'Identifier') {
                            path.unshift(x.property.name);
                            x = x.object;
                        }
                        if(x.type !== 'Identifier') return;
                        path.unshift(x.name);

                        var constructor = globalState.globals;
                        while((x = path.shift()) && constructor) {
                            constructor = constructor[x];
                        }

                        if(!constructor) return;

                        if(typeof constructor === 'function') {
                            p = constructor.prototype;
                        } else {
                            p = constructor;
                        }

                        for(var v in p) {
                            prototype[v] = p[v];
                        }
                    }
                });

                state.expression = function() {};
                state.expression.prototype = prototype;

                if(node.start <= offset && node.end >= offset) {
                    globalState.thisObject = Object.create(state.expression.prototype);
                    globalState.thisObject._super = function() {};
                }
            }
        }
    });

    index.set(editor.file, globalState);

    return globalState;
};
