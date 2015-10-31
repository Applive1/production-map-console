'use strict';

/**
 * @ngdoc service
 * @name productionMapConsoleApp.popups
 * @description
 * # popups
 * Factory in the productionMapConsoleApp.
 */
angular.module('productionMapConsoleApp')
    .factory('Popups', ['$modal',function ($modal) {
        // Service Logic
        return {
            open: function(options, success){
                options.animation= true;
                var modalInstance = $modal.open(options);

                if(!angular.isFunction(success)){
                    return; // no need to link async function
                };

                modalInstance.result.then(success);
            }
        };
    }]);