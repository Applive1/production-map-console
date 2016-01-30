'use strict';

/**
 * @ngdoc service
 * @name productionMapConsoleApp.popups
 * @description
 * # popups
 * Factory in the productionMapConsoleApp.
 */
angular.module('productionMapConsoleApp')
    .factory('Popups', ['$uibModal',function ($uibModal) {
        // Service Logic
        return {
            open: function(options, success){
                var modalInstance = $uibModal.open(options);

                if(!angular.isFunction(success)){
                    return; // no need to link async function
                };

                modalInstance.result.then(success);
            }
        };
    }]);
