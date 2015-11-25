'use strict';

/**
 * @ngdoc directive
 * @name productionMapConsoleApp.directive:dropFiles
 * @description
 * # dropFiles
 */
angular.module('productionMapConsoleApp')
.directive("dropFiles", [ function () {
  var linkFn = function ($scope, $element, $attrs, accept) {
    var extractFiles = function (e) {
      var files = e.originalEvent.dataTransfer.files;
      var filesArray = [];
      
      for (var i = 0, len = files.length; i < len; i++) {
        filesArray.push(files[i]);
      }
      
      return filesArray;
    };

    var handleDragOver = function (e) {
      e.preventDefault();
    };
    
    var handleDrop = function (e) {
      e.preventDefault();
      
      var files = extractFiles(e);
      
      accept.dropFiles({$files: files});
    };
  
    $element.on("dragover", handleDragOver);
    $element.on("drop", handleDrop);
    
    $scope.$on("$destroy", function () {
      $element.off("dragover", handleDragOver);
      $element.off("drop", handleDrop);
    });
  };
  
  return {
    restrict: "A",
    controller: "DropFilesController",
    controllerAs: "drop",
    bindToController: true,
    require: "dropFiles",
    scope: {
      accepts: "&",
      dropFiles: "&",
    },
    link: linkFn,
  };
}])

.controller("DropFilesController", [ function () {
  var drop = this;
}])