import Six from '@grexie/six';
import $ from 'jquery';

var fileState = new WeakMap();

export default Six.View.extend({
    createdCallback: function() {
        this._super();
        this.set('visualEditorActive', true);
        this.shadowRoot.querySelector('production-map-visual-editor').style.removeProperty('display');
        this.shadowRoot.querySelector('production-map-markup-editor').style.setProperty('display', 'none');
        this.shadowRoot.querySelector('production-map-code-editor').style.setProperty('display', 'none');

        this.set('hideStopButton', true);
        this.set('hideResumeButton', true);
        this.set('hideSuspendButton', true);

        this.bind('file').observe(function(oldValue, newValue) {
            if(oldValue) {
                fileState.set(oldValue, this.get('state'));
            }

            if(newValue) {
                var state = fileState.get(newValue);

                if(newValue.codeBehind) {
                    this.set('markupFile', this.files[newValue.codeBehind]);
                    this.set('codeFile', newValue);
                } else {
                    this.set('markupFile', newValue);
                    this.set('codeFile', this.files[Object.keys(this.files).filter(function(x) { return this.files[x].codeBehind === newValue.id; }.bind(this))[0]]);
                }

                if(state) {
                    this.set('state', state);

                    switch(this.get('state.currentEditor')) {
                        case 'visual': this.activateVisualEditor(); break;
                        case 'markup': this.activateMarkupEditor(); break;
                        case 'code': this.activateCodeEditor(); break;
                    }
                } else if(newValue.codeBehind) {
                    this.set('state', {
                        visualEditor: {},
                        markupEditor: {},
                        codeEditor: {}
                    });
                    this.activateCodeEditor();
                } else {
                    this.set('state', {
                        visualEditor: {},
                        markupEditor: {},
                        codeEditor: {}
                    });
                    this.activateVisualEditor();
                }
            }
        }.bind(this));

        this.bind('codeFile.status').observe(function(oldValue, newValue) {
            switch(newValue) {
                case 'stopped':
                    this.set('hideStopButton', true);
                    this.set('hideSuspendButton', true);
                    this.set('hideResumeButton', true);
                    this.set('hideRunButton', false);
                    break;
                case 'running':
                    this.set('hideStopButton', false);
                    this.set('hideSuspendButton', false);
                    this.set('hideResumeButton', true);
                    this.set('hideRunButton', true);
                    break;
                case 'suspended':
                    this.set('hideStopButton', false);
                    this.set('hideSuspendButton', true);
                    this.set('hideResumeButton', false);
                    this.set('hideRunButton', true);
                    break;
            }
        }.bind(this));
    },
    activateVisualEditor: function() {
        this.set('visualEditorActive', true);
        this.set('markupEditorActive', false);
        this.set('codeEditorActive', false);
        this.shadowRoot.querySelector('production-map-visual-editor').style.removeProperty('display');
        this.shadowRoot.querySelector('production-map-markup-editor').style.setProperty('display', 'none');
        this.shadowRoot.querySelector('production-map-code-editor').style.setProperty('display', 'none');
        setTimeout(function() {
            this.shadowRoot.querySelector('production-map-visual-editor').layout();
        }.bind(this), 100);
        this.set('state.currentEditor', 'visual');
    },
    activateMarkupEditor: function() {
        this.set('visualEditorActive', false);
        this.set('markupEditorActive', true);
        this.set('codeEditorActive', false);
        this.shadowRoot.querySelector('production-map-visual-editor').style.setProperty('display', 'none');
        this.shadowRoot.querySelector('production-map-markup-editor').style.removeProperty('display');
        this.shadowRoot.querySelector('production-map-code-editor').style.setProperty('display', 'none');
        setTimeout(function() {
            this.shadowRoot.querySelector('production-map-markup-editor').editor.refresh();
            this.shadowRoot.querySelector('production-map-markup-editor').editor.focus();
        }.bind(this), 100);
        this.set('state.currentEditor', 'markup');
    },
    activateCodeEditor: function() {
        this.set('visualEditorActive', false);
        this.set('markupEditorActive', false);
        this.set('codeEditorActive', true);
        this.shadowRoot.querySelector('production-map-visual-editor').style.setProperty('display', 'none');
        this.shadowRoot.querySelector('production-map-markup-editor').style.setProperty('display', 'none');
        this.shadowRoot.querySelector('production-map-code-editor').style.removeProperty('display');
        setTimeout(function() {
            this.shadowRoot.querySelector('production-map-code-editor').editor.refresh();
            this.shadowRoot.querySelector('production-map-code-editor').editor.focus();
        }.bind(this), 100);
        this.set('state.currentEditor', 'code');
    },

    stopMap: function() {
        $.post(Six.Config.public.PM_API_ROOT + '/project/' + this.get('codeFile.project') + '/file/' + this.get('codeFile.id') + '/stop').then(function(response) {
            this.set('codeFile.status', response.file.status);
        }.bind(this)).fail(function(err) {
            alert(err);
        });
    },

    suspendMap: function() {
        $.post(Six.Config.public.PM_API_ROOT + '/project/' + this.get('codeFile.project') + '/file/' + this.get('codeFile.id') + '/suspend').then(function(response) {
            this.set('codeFile.status', response.file.status);
        }.bind(this)).fail(function(err) {
            alert(err);
        });
    },

    resumeMap: function() {
        $.post(Six.Config.public.PM_API_ROOT + '/project/' + this.get('codeFile.project') + '/file/' + this.get('codeFile.id') + '/resume').then(function(response) {
            this.set('codeFile.status', response.file.status);
        }.bind(this)).fail(function(err) {
            alert(err);
        });
    },

    runMap: function() {
        $.post(Six.Config.public.PM_API_ROOT + '/project/' + this.get('codeFile.project') + '/file/' + this.get('codeFile.id') + '/execute').then(function(response) {
            this.set('codeFile.status', response.file.status);
        }.bind(this)).fail(function(err) {
            alert(err);
        });
    }
});