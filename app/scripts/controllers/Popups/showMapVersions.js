'use strict';

angular.module('productionMapConsoleApp').controller('MapVersionsCtrl', function ($scope, $modalInstance,map) {

    $scope.map = map;

    $scope.cancel = function () {
        $modalInstance.dismiss();
    };

    $scope.setVersion = function(index){
        $modalInstance.close(index);
    }

});