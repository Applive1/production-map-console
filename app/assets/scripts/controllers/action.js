'use strict';

/**
 * @ngdoc function
 * @name productionMapConsoleApp.controller:ActionCtrl
 * @description
 * # ActionCtrl
 * Controller of the productionMapConsoleApp
 */
angular.module('productionMapConsoleApp')
  .controller('ActionCtrl', ['$scope', '$uibModalInstance', 'blockFactory', 'link', 'Messages', 'map', 'source', 'target', 'action','ProcessesService',
    function ($scope, $uibModalInstance, blockFactory, link, Messages, map, source, target, action,ProcessesService) {
      function init() {

        $scope.action = action || {
            server: '',
            method: '',
            params: {},
            name: '',
            timeout: 0,
            timeunit: '1',
            retries: 0,
            mandatory: false,
            suspend: false,
            result: ''
          };

        $scope.action.server = {
            type: target.type,
            name: target.name,
            id: target.id,
            url: target.serverUrl
          };

        if ($scope.action.server) {
          $scope.getMethods($scope.action.server.type);
        }

      }

      $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
      };

      $scope.addAction = function () {
        $scope.action.lastUpdate = new Date().toString();
        $uibModalInstance.close($scope.action);
      }

      $scope.testAction = function () {
        ProcessesService.testAction(
          {
            action: $scope.action,
            map: map
          }).success(function (result) {
            console.log(result);
            Messages.add(result);
            $uibModalInstance.close({message: result});
          })
          .error(function (err) {
            console.log('****** FAILD *******');
            console.log(err);
            console.log('********************');
          });
      }

      $scope.getMethods = function (type) {
        blockFactory.getMethods(type).then(function (methods) {
          $scope.methods = methods;
        });
      }

      $scope.showCollection = function (param) {
        try {
          return param.type === 'collection' && ((!action.params[param.name].code) || (action.params[param.name].code === false));
        } catch (e) {
          console.log(e);
          return true;
        }
      }
      init();//
    }]);
