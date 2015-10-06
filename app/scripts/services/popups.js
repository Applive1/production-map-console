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
            open: function(templateUrl, controller, resolve,size){
                $modal.open({
                    animation: true,
                    templateUrl: templateUrl,
                    controller: controller,
                    size: size,
                    resolve: resolve
                });
            }
        };
    }]);