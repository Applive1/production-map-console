'use strict';

/**
 * @ngdoc directive
 * @name productionMapConsoleApp.directive:pmCodeEditor
 * @description
 * # pmCodeEditor
 */
angular.module('productionMapConsoleApp')
  .directive('pmCodeEditor', function () {
	var controller = ['$scope', function ($scope) {

		function init() {
			$scope.code = $scope.map.code;
			var orig = CodeMirror.hint.javascript;
			function getURL(url, c) {
			    var xhr = new XMLHttpRequest();
			    xhr.open("get", url, true);
			    xhr.send();
			    xhr.onreadystatechange = function() {
			      if (xhr.readyState != 4) return;
			      if (xhr.status < 400) return c(null, xhr.responseText);
			      var e = new Error(xhr.responseText || "No response");
			      e.status = xhr.status;
			      c(e);
			    };
			  }


			  var server;
			  getURL("http://ternjs.net/defs/ecma5.json", function(err, code) {
			    if (err) throw new Error("Request for ecma5.json: " + err);
			    server = new CodeMirror.TernServer({defs: [JSON.parse(code)]});
			    server.setScope($scope.markup.cm);
			    editor.setOption("extraKeys", {
			      "Ctrl-Space": function(cm) {
			      	server.complete(cm);
			      },
			      "Ctrl-I": function(cm) { server.showType(cm); },
			      "Ctrl-O": function(cm) { server.showDocs(cm); },
			      "Alt-.": function(cm) { server.jumpToDef(cm); },
			      "Alt-,": function(cm) { server.jumpBack(cm); },
			      "Ctrl-Q": function(cm) { server.rename(cm); },
			      "Ctrl-.": function(cm) { server.selectName(cm); }
			    })
			    editor.on("cursorActivity", function(cm) { server.updateArgHints(cm); });
			  });
			  var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
			    lineNumbers: true,
			    lineWrapping : true,
			    mode: 'javascript',
				keyMap: 'sublime',
				autoCloseBrackets: true,
				matchBrackets: true,
				showCursorWhenSelecting: true,
				theme: 'monokai',
				tabSize: 2,
				gutters: ['CodeMirror-lint-markers'],
				lint: true
			  });

			  $scope.editorChanged = false;
			  $scope.codeChanged = false;
			  editor.on('change', function(instance) {
			      if($scope.codeChanged){
			        $scope.codeChanged = false;
			        return;
			      }
			      $scope.editorChanged = true;
			      var newValue = instance.getValue();
			      if (newValue !== $scope.code) {
			          $scope.code = newValue;
			          $scope.map.code = newValue;
			      }
			    });
			  $scope.$watch('code', function(newVal, oldVal){
				  	if($scope.editorChanged){
				        $scope.editorChanged = false;
				        return;
				      }
				      $scope.codeChanged = true;
			    	editor.setValue($scope.code);
			   });
			// CodeMirror.hint.javascript = function(cm) {
			// 	var inner = orig(cm) || {from: cm.getCursor(), to: cm.getCursor(), list: []};
			//  	console.log(inner);
			//  	angular.forEach($scope.map.nodes, function(node) {
			// 		inner.list.push(node.name);
			// 	});
			// 	console.log(inner);
			//   	return inner;
			// };
		}

		init();

    }];
    return {
      scope: {
      	map: '=',
      	markup: '='
      },
      templateUrl: 'scripts/directives/templates/pm-code-editor.html',
      restrict: 'E',
      controller: controller
    };
  });
