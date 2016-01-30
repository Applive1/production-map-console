'use strict';

angular.module('productionMapConsoleApp').controller('MapVersionsCtrl', ['$scope', '$uibModalInstance','map',function ($scope, $uibModalInstance,map) {

    $scope.map = map;

    $scope.cancel = function () {
        $uibModalInstance.dismiss();
    };

    $scope.setVersion = function(index){
        $uibModalInstance.close(index);
    }

}]);
