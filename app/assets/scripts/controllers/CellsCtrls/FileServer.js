'use strict';

angular.module('productionMapConsoleApp').controller('FileServerCtrl', ['$scope', '$uibModalInstance', 'node',function ($scope, $uibModalInstance, node) {
    $scope.node = node;
    if (!$scope.node.data)
        $scope.node.data={};

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
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
}]);
