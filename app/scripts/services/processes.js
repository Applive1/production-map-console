'use strict';

/**
 * @ngdoc service
 * @name productionMapConsoleApp.processes
 * @description
 * # processes
 * Factory in the productionMapConsoleApp.
*/
angular.module('productionMapConsoleApp')
    .factory('ProcessesService',['$http', '$q', 'consts', function ($http, consts) {

      var TEST_PROCESS_URL = consts.serverUrl + "sysfile/testprocess";
        var TEST_ACTION_URL = consts.serverUrl + "sysfile/testaction";

        // Public API here
        return {
            testProcess: function(process){
                return $http.post(TEST_PROCESS_URL, process);
            },
            testAction: function(action){
                return $http.post(TEST_ACTION_URL, action);
            }
        };
    }]);

