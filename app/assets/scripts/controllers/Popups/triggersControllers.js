'use strict';

/**
 * @ngdoc function
 * @name productionMapConsoleApp.controller:pmInstallAgentController
 * @description
 * # pmInstallAgentController
 * Controller of the productionMapConsoleApp
 */
angular.module('productionMapConsoleApp')
  .controller('addTriggerCtrl',['$scope', '$uibModalInstance', 'Triggers', 'AuthService', 'ProjectsService', function ($scope, $uibModalInstance, Triggers, AuthService, ProjectsService) {
    $scope.trigger = {
    	type: ''
    };

    $scope.types = Triggers.getTypes();

    $scope.projects = [];

    ProjectsService.getJstreeProjectsByUser(AuthService.currentUser.id).then(function (result) {
          result.data.forEach(function (project) {
            project.maps = project.maps.filter(function (map, index) {
              if (!map.isActive) project.children.splice(index, 1);
              return map.isActive;
            });
          });
          $scope.projects = result.data;
        });

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.add = function(trigger) {
    	Triggers.add(trigger);
    	$uibModalInstance.close(trigger);
    };
  }]);

angular.module('productionMapConsoleApp')
  .controller('showTriggerCtrl',['$scope', '$uibModalInstance', 'Triggers', 'AuthService', 'ProjectsService', 'trigger' , function ($scope, $uibModalInstance, Triggers, AuthService, ProjectsService, trigger) {
    $scope.trigger = trigger;

    $scope.types = Triggers.getTypes();

    $scope.projects = [];

    ProjectsService.getJstreeProjectsByUser(AuthService.currentUser.id).then(function (result) {
          result.data.forEach(function (project) {
            project.maps = project.maps.filter(function (map, index) {
              if (!map.isActive) project.children.splice(index, 1);
              return map.isActive;
            });
          });
          $scope.projects = result.data;
        });

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.add = function(trigger) {
      Triggers.update(trigger);
      $uibModalInstance.close(trigger);
    };
  }]);


