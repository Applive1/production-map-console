'use strict';

/**
 * @ngdoc function
 * @name productionMapConsoleApp.controller:pmInstallAgentController
 * @description
 * # pmInstallAgentController
 * Controller of the productionMapConsoleApp
 */
angular.module('productionMapConsoleApp')
  .controller('conditionCtrl',function ($scope, $modalInstance, $timeout, condition) {

  	function init(){
  		var orig = CodeMirror.hint.javascript;

                function getURL(url, c) {
                    var xhr = new XMLHttpRequest();
                    xhr.open("get", url, true);
                    xhr.send();
                    xhr.onreadystatechange = function () {
                        if (xhr.readyState != 4) return;
                        if (xhr.status < 400) return c(null, xhr.responseText);
                        var e = new Error(xhr.responseText || "No response");
                        e.status = xhr.status;
                        c(e);
                    };
                }


                var server;
                getURL("http://ternjs.net/defs/ecma5.json", function (err, code) {
                    if (err) throw new Error("Request for ecma5.json: " + err);
                    server = new CodeMirror.TernServer({defs: [JSON.parse(code)]});
                    server.setScope(code.cm);
                    editor.setOption("extraKeys", {
                        "Ctrl-Space": function (cm) {
                            server.complete(cm);
                        },
                        "Ctrl-I": function (cm) {
                            server.showType(cm);
                        },
                        "Ctrl-O": function (cm) {
                            server.showDocs(cm);
                        },
                        "Alt-.": function (cm) {
                            server.jumpToDef(cm);
                        },
                        "Alt-,": function (cm) {
                            server.jumpBack(cm);
                        },
                        "Ctrl-Q": function (cm) {
                            server.rename(cm);
                        },
                        "Ctrl-.": function (cm) {
                            server.selectName(cm);
                        }
                    })
                    editor.on("cursorActivity", function (cm) {
                        server.updateArgHints(cm);
                        var wordRange = editor.findWordAt(editor.getCursor());
                        var word = editor.getRange(wordRange.anchor, wordRange.head);
                        if(word === "."){
                            server.complete(cm);
                        }
                    });
                });
  		var editor = CodeMirror.fromTextArea(document.getElementById("condition"), {
                    lineNumbers: true,
                    lineWrapping: true,
                    mode: 'javascript',
                    keyMap: 'sublime',
                    autoCloseBrackets: true,
                    matchBrackets: true,
                    showCursorWhenSelecting: true,
                    theme: 'monokai',
                    tabSize: 2,
                    // gutters: ['CodeMirror-lint-markers'],
                    lint: true,
                });
        $scope.cmEditor = editor;
  		if(!condition.conditionCode){
  			console.log("no condition code enter default value");
            condition.conditionCode = "//write condition logic here\n";
  		}
  		$scope.cmEditor.setValue(condition.conditionCode);
  	}

    $scope.cancel = function () {
        $modalInstance.close($scope.cmEditor.getValue());
    };
    $scope.save = function(){
    	$modalInstance.close($scope.cmEditor.getValue());
    };

    $timeout(function() {
        init();
    }, 0);
  });