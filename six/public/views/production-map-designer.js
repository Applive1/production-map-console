import Six from '@grexie/six';

export default Six.View.extend({
    createdCallback: function() {
        this._super();
        this.set('visualEditorActive', true);
    },
    activateVisualEditor: function() {
        this.set('visualEditorActive', true);
        this.set('markupEditorActive', false);
        this.set('codeEditorActive', false);
        setTimeout(function() {
            this.shadowRoot.querySelector('production-map-visual-editor').layout();
        }.bind(this), 100);
    },
    activateMarkupEditor: function() {
        this.set('visualEditorActive', false);
        this.set('markupEditorActive', true);
        this.set('codeEditorActive', false);
        setTimeout(function() {
            this.shadowRoot.querySelector('production-map-markup-editor').editor.refresh();
            this.shadowRoot.querySelector('production-map-markup-editor').editor.focus();
            this.shadowRoot.querySelector('production-map-markup-editor').editor.setValue('<?xml version="1.0" ?>\n<map>\n  <!-- Insert your Map objects here -->\n</map>');
        }.bind(this), 100);
    },
    activateCodeEditor: function() {
        this.set('visualEditorActive', false);
        this.set('markupEditorActive', false);
        this.set('codeEditorActive', true);
        setTimeout(function() {
            this.shadowRoot.querySelector('production-map-code-editor').editor.refresh();
            this.shadowRoot.querySelector('production-map-code-editor').editor.focus();
            this.shadowRoot.querySelector('production-map-code-editor').editor.setValue('\nimport PM from \'@production-map/core\';\n\nexport default PM.Map.extend({\n    init: function() {\n        \n    },\n\n    execute: function() {\n        \n    },\n\n    suspend: function() {\n        \n    },\n\n    resume: function() {\n        \n    },\n\n    complete: function() {\n        \n    }\n    \n});\n');
        }.bind(this), 100);
    }
});