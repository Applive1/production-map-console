'use strict';

angular.module('productionMapConsoleApp').controller('ProjectsAndMapsCtrl', ['$scope', '$uibModalInstance', 'ProjectsService', 'MapsService', 'data',function ($scope, $uibModalInstance, ProjectsService, MapsService, data) {

    $scope.data = data;
    $scope.model = {};
    $scope.title;

    $scope.cancel = function () {
        $uibModalInstance.dismiss();
    };

    $scope.saveNew = function () {
        if(data.isDuplicate && data.isMap){
            MapsService.duplicateMap($scope.model.name, data.map.original.Project, data.map.id).then(function (result) {
                $uibModalInstance.close(result.data);
            });
        }
        else if (data.isMap && !data.project) {
            data.map.name = $scope.model.name;
            MapsService.updateMap(data.map).then(function (result) {
                $uibModalInstance.close(result.data);
            });
        }
        else if(data.isMap)
            MapsService.createMap($scope.model.name, data.project.id).then(function (result) {
                $uibModalInstance.close(result.data);
            });
        else
            ProjectsService.createProject($scope.model.name).then(function (result) {
                $uibModalInstance.close(result.data);
            });

    };

    function init() {
        if (data.isMap && !data.project) {
            $scope.title = "Rename map";
            $scope.model.name = data.map.name;
        }
        else if(data.isMap)
            $scope.title = "Create map";
        else
            $scope.title = "Create Project";
    }

    init();
}]);
