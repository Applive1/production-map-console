'use strict';

/**
 * @ngdoc service
 * @name productionMapConsoleApp.ProjectService
 * @description
 * # popups
 * Factory in the productionMapConsoleApp.
 */
angular.module('productionMapConsoleApp').factory('ProjectsService', ['$http', 'consts' , function ($http, consts) {
    // Service Logic
    return {
        deleteProject: function (projectId) {
            return $http.get(consts.serverUel + 'project/deleteProject/'+projectId);
        },
        getProjectById: function (projectId) {
            return $http.get(consts.serverUel + 'project/getProjectById/'+projectId);
        },
        getProjectByUser: function (userId) {
            return $http.get(consts.serverUel + 'project/getProjectByUser/'+userId);
        },
        createProject: function (projectName) {
            return $http.post(consts.serverUel + 'project/createProject', {name : projectName});
        }
    };
}]);