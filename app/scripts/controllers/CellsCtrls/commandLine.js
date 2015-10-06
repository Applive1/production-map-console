'use strict';

angular.module('productionMapConsoleApp').controller('CommandLineCtrl', function ($scope, $modalInstance, node) {
    $scope.node = node;
    if (!$scope.node.data)
        $scope.node.data={};

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };

    $scope.fileChanged = function(element){

        var file = element.files[0];
        if (file) {
            var r = new FileReader();
            r.onload = function(e) {
                $scope.node.data.input = e.target.result;
                $scope.$digest();
            }
            r.readAsText(file);
        }

    }
});