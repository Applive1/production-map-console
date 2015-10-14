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
            open: function(templateUrl, controller, resolve, success, fail, size){
                var modalInstance = $modal.open({
                    animation: true,
                    templateUrl: templateUrl,
                    controller: controller,
                    size: size,
                    resolve: resolve
                });
                if(typeof success === 'undefined'){
                    return; // no need to link async function
                };

                modalInstance.result.then(success, function () {
                  console.log('Modal dismissed at: ' + new Date());
                });
            }
        };
    }]);