import Six from '@grexie/six';

var fileState = new WeakMap();

export default Six.View.extend({
    createdCallback: function() {
        this._super();
        this.set('visualEditorActive', true);
        this.shadowRoot.querySelector('production-map-visual-editor').style.removeProperty('display');
        this.shadowRoot.querySelector('production-map-markup-editor').style.setProperty('display', 'none');
        this.shadowRoot.querySelector('production-map-code-editor').style.setProperty('display', 'none');

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
    }
});