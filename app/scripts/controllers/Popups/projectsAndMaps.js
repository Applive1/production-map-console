'use strict';

angular.module('productionMapConsoleApp').controller('ProjectsAndMapsCtrl', ['$scope', '$modalInstance', 'ProjectsService', 'MapsService', 'data',function ($scope, $modalInstance, ProjectsService, MapsService, data) {

    $scope.data = data;
    $scope.model = {};

    $scope.cancel = function () {
        $modalInstance.dismiss();
    };

    $scope.saveNew = function () {
        if (data.isMap)
            MapsService.createMap($scope.model.name, data.project.id).then(function (result) {
                $modalInstance.close(result.data);
            });
        else
            ProjectsService.createProject($scope.model.name).then(function (result) {
                $modalInstance.close(result.data);
            });

    };
}]);
