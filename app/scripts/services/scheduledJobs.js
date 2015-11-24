'use strict';

/**
 * @ngdoc service
 * @name productionMapConsoleApp.MapService
 * @description
 * # popups
 * Factory in the productionMapConsoleApp.
 */
angular.module('productionMapConsoleApp').factory('JobsService', ['$http', 'consts' , function ($http, consts) {

    return {
        deleteJob: function (jobId) {
            return $http.get(consts.serverUrl + 'ScheduledJob/deleteJob/'+jobId);
        },
        addJob: function (job) {
            return $http.post(consts.serverUrl + 'ScheduledJob/addJob',job);
        },
        getFutureJobs: function (map) {
            return $http.get(consts.serverUrl + 'ScheduledJob/getFutureJobs');
        },
        updateJob: function (job) {
            return $http.post(consts.serverUrl + 'ScheduledJob/updateJob', job);
        }
    };
}]);