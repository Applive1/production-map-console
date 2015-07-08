
import Six from '@grexie/six';
import CodeMirror from 'codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/hint/show-hint';
import getIndex from '../parser/indexer';

(function(CodeMirror) {
    var Pos = CodeMirror.Pos;

    function forEach(arr, f) {
        for (var i = 0, e = arr.length; i < e; ++i) f(arr[i]);
    }

    function arrayContains(arr, item) {
        if (!Array.prototype.indexOf) {
            var i = arr.length;
            while (i--) {
                if (arr[i] === item) {
                    return true;
                }
            }
            return false;
        }
        return arr.indexOf(item) != -1;
    }

    function scriptHint(editor, keywords, getToken, options) {
        // Find the token at the cursor
        var cur = editor.getCursor(), token = getToken(editor, cur);
        if (/\b(?:string|comment)\b/.test(token.type)) return;
        token.state = CodeMirror.innerMode(editor.getMode(), token.state).state;

        // If it's not a 'word-style' token, ignore the token.
        if (!/^[\w$_]*$/.test(token.string)) {
            token = {start: cur.ch, end: cur.ch, string: "", state: token.state,
                type: token.string == "." ? "property" : null};
        } else if (token.end > cur.ch) {
            token.end = cur.ch;
            token.string = token.string.slice(0, cur.ch - token.start);
        }

        var tprop = token;
        // If it is a property, find out what it is a property of.
        while (tprop.type == "property") {
            tprop = getToken(editor, Pos(cur.line, tprop.start));
            if (tprop.string != ".") return;
            tprop = getToken(editor, Pos(cur.line, tprop.start));
            if (!context) var context = [];
            context.push(tprop);
        }

        return {list: getCompletions(editor.getTextArea().parentNode.host, token, context, keywords, options),
            from: Pos(cur.line, token.start),
            to: Pos(cur.line, token.end)};
    }

    function javascriptHint(editor, options) {
        return scriptHint(editor, javascriptKeywords,
            function (e, cur) {return e.getTokenAt(cur);},
            options);
    };
    CodeMirror.registerHelper("hint", "javascript", javascriptHint);

    var stringProps = ("charAt charCodeAt indexOf lastIndexOf substring substr slice trim trimLeft trimRight " +
    "toUpperCase toLowerCase split concat match replace search").split(" ");
    var arrayProps = ("length concat join splice push pop shift unshift slice reverse sort indexOf " +
    "lastIndexOf every some filter forEach map reduce reduceRight ").split(" ");
    var funcProps = "prototype apply call bind".split(" ");
    var javascriptKeywords = ("").split(" ");

    function getCompletions(editor, token, context, keywords, options) {
        var index = getIndex(editor, editor.editor.indexFromPos(editor.editor.getCursor()));

        var found = [], start = token.string, global = index.globals;
        function maybeAdd(str) {
            if (str.lastIndexOf(start, 0) == 0 && !arrayContains(found, str)) found.push(str);
        }
        function gatherCompletions(obj) {
            if (typeof obj == "string") forEach(stringProps, maybeAdd);
            else if (obj instanceof Array) forEach(arrayProps, maybeAdd);
            else if (obj instanceof Function) forEach(funcProps, maybeAdd);
            for (var name in obj) maybeAdd(name);
        }

        if (context && context.length) {
            // If this is a property, see if it belongs to some object we can
            // find in the current environment.

            var obj = context.pop(), base;
            if(index.thisObject && obj.type === 'keyword' && obj.string === 'this') {
                base = index.thisObject;
            } else if (obj.type && obj.type.indexOf("variable") === 0) {
                if (options && options.additionalContext)
                    base = options.additionalContext[obj.string];
                if (!options || options.useGlobalScope !== false)
                    base = base || global[obj.string];
            } else if (obj.type == "string") {
                base = "";
            } else if (obj.type == "atom") {
                base = 1;
            } else if (obj.type == "function") {
                if (global.jQuery != null && (obj.string == '$' || obj.string == 'jQuery') &&
                    (typeof global.jQuery == 'function'))
                    base = global.jQuery();
                else if (global._ != null && (obj.string == '_') && (typeof global._ == 'function'))
                    base = global._();
            }
            while (base != null && context.length)
                base = base[context.pop().string];
            if (base != null) gatherCompletions(base);
        } else {
            // If not, just look in the global object and any local scope
            // (reading into JS mode internals to get at the local and global variables)
            for (var v = token.state.localVars; v; v = v.next) maybeAdd(v.name);
            for (var v = token.state.globalVars; v; v = v.next) maybeAdd(v.name);
            if (!options || options.useGlobalScope !== false)
                gatherCompletions(global);
            forEach(keywords, maybeAdd);
        }
        return found;
    }
})(CodeMirror);


export default Six.View.extend({
    createdCallback: function() {
        this._super();

        function completeMemberExpression(cm, pred) {
            var cur = cm.getCursor();
            if (!pred || pred()) setTimeout(function() {
                if (!cm.state.completionActive)
                    cm.showHint({completeSingle: false});
            }, 100);
            return CodeMirror.Pass;
        }

        this.editor = CodeMirror.fromTextArea(this.shadowRoot.querySelector('textarea'), {
            lineNumbers: true,
            mode: 'javascript',
            extraKeys: {
                ".": completeMemberExpression,
                "Ctrl-Space": "autocomplete"
            },
            indentUnit: 4,

        });

        this.editor.on('change', this.onChange.bind(this));

        window.addEventListener('resize', function(evt) {
            this.editor.refresh();
        }.bind(this), false);

        this.bind('file').observe(function(oldValue, newValue) {
            if(newValue) {
                this.editor.setValue(newValue.content || '');
            }
        }.bind(this));
    },

    onChange: function(cm, change) {
        this.set('file.content', cm.getValue());
    }
});