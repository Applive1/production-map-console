
import Six from '@grexie/six';
import $ from 'jquery';

export default Six.View.extend({
    createdCallback: function() {
        this._super();

        this.bind('project').observe(this.onProjectFilter.bind(this));
        this.onProjectFilter(null, this.get('project'));

        this.workspaceReferencesNode = this.shadowRoot.querySelector('.workspace-references');
        this.referencesNode = this.shadowRoot.querySelector('.references');
    },

    onProjectFilter: function(oldValue, newValue) {
        if(!newValue || !this.workspace) return;

        $.get(Six.Config.public.PM_API_ROOT + '/project').then(function(response) {
            var allProjects = response.projects;

            var workspaceProjects = this.workspace.projects.map(function(projectId) {
                return allProjects.filter(function(project) {
                    return projectId === project.id;
                })[0];
            });

            allProjects = allProjects.filter(function(project) {
                return workspaceProjects.indexOf(project) === -1;
            });

            workspaceProjects.filter(function(x) {
                return x.id !== newValue.id && newValue.references.indexOf(x.id) === -1;
            }).forEach(this.addProject.bind(this, this.workspaceReferencesNode));
            allProjects.forEach(this.addProject.bind(this, this.referencesNode));
        }.bind(this));
    },

    addProject: function(panel, project) {
        var button = document.createElement('six-button');
        button.set('vertical', true);
        button.set('align', 'center');

        var img = document.createElement('img');
        img.src = '/assets/reference.svg';

        var span = document.createElement('span');
        span.textContent = project.name;

        button.appendChild(img);
        button.appendChild(span);

        button.onclick = function(evt) {
            if(this.onAddReference) this.onAddReference(project);
        }.bind(this);

        panel.appendChild(button);
    }
});