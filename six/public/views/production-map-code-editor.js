
import Six from '@grexie/six';
import CodeMirror from 'codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/javascript-hint';

export default Six.View.extend({
    createdCallback: function() {
        this._super();

        this.editor = CodeMirror.fromTextArea(this.shadowRoot.querySelector('textarea'), {
            lineNumbers: true,
            mode: 'javascript',
            extraKeys: {"Ctrl-Space": "autocomplete"},
            indentUnit: 4
        });

        window.addEventListener('resize', function(evt) {
            this.editor.refresh();
        }.bind(this), false);
    }
});