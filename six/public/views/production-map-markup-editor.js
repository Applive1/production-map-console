
import Six from '@grexie/six';
import CodeMirror from 'codemirror';
import 'codemirror/mode/xml/xml';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/xml-hint';

export default Six.View.extend({
    createdCallback: function() {
        this._super();

        var tags = {
            '!top': ['map', 'agent']
        };

        function completeAfter(cm, pred) {
            var cur = cm.getCursor();
            if (!pred || pred()) setTimeout(function() {
                if (!cm.state.completionActive)
                    cm.showHint({completeSingle: false});
            }, 100);
            return CodeMirror.Pass;
        }

        function completeIfAfterLt(cm) {
            return completeAfter(cm, function() {
                var cur = cm.getCursor();
                return cm.getRange(CodeMirror.Pos(cur.line, cur.ch - 1), cur) == "<";
            });
        }

        function completeIfInTag(cm) {
            return completeAfter(cm, function() {
                var tok = cm.getTokenAt(cm.getCursor());
                if (tok.type == "string" && (!/['"]/.test(tok.string.charAt(tok.string.length - 1)) || tok.string.length == 1)) return false;
                var inner = CodeMirror.innerMode(cm.getMode(), tok.state).state;
                return inner.tagName;
            });
        }

        this.editor = CodeMirror.fromTextArea(this.shadowRoot.querySelector('textarea'), {
            lineNumbers: true,
            mode: 'xml',
            extraKeys: {
                "'<'": completeAfter,
                "'/'": completeIfAfterLt,
                "' '": completeIfInTag,
                "'='": completeIfInTag,
                "Ctrl-Space": "autocomplete"
            },
            hintOptions: {schemaInfo: tags},
            indentUnit: 2
        });

        window.addEventListener('resize', function(evt) {
            this.editor.refresh();
        }.bind(this), false);
    }
});