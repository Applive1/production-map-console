'use strict';

angular.module('productionMapConsoleApp').controller('ProjectsCtrl', function ($scope, $modalInstance,ProjectsService) {

    $scope.model = {};

    $scope.cancel = function () {
        $modalInstance.close(result);
    };

    $scope.saveNew = function () {
        ProjectsService.createProject($scope.model.name).then(function(result){
            alert('saved');
            $modalInstance.close(result.data);
        });

    };
});