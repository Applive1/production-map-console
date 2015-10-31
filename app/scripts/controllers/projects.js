'use strict';

angular.module('productionMapConsoleApp').controller('ProjectsCtrl', function ($scope, $modalInstance,ProjectsService) {

    $scope.model = {};

    $scope.cancel = function () {
        $modalInstance.close(false);
    };

    $scope.saveNew = function () {
        ProjectsService.createProject($scope.model.name).then(function(result){
            $modalInstance.close(result.data);
        });

    };
});