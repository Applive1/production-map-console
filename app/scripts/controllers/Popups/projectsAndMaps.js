'use strict';

angular.module('productionMapConsoleApp').controller('ProjectsAndMapsCtrl', ['$scope', '$uibModalInstance', 'ProjectsService', 'MapsService', 'data',function ($scope, $uibModalInstance, ProjectsService, MapsService, data) {

    $scope.data = data;
    $scope.model = {};

    $scope.cancel = function () {
        $uibModalInstance.dismiss();
    };

    $scope.saveNew = function () {
        if (data.isMap)
            MapsService.createMap($scope.model.name, data.project.id).then(function (result) {
                $uibModalInstance.close(result.data);
            });
        else
            ProjectsService.createProject($scope.model.name).then(function (result) {
                $uibModalInstance.close(result.data);
            });

    };
}]);