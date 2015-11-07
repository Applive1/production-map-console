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
            return $http.get(consts.serverUrl + 'project/deleteProject/'+projectId);
        },
        getProjectById: function (projectId) {
            return $http.get(consts.serverUrl + 'project/getProjectById/'+projectId);
        },
        getProjectsByUser: function (userId) {
            return $http.get(consts.serverUrl + 'project/getProjectByUser/'+userId);
        },
        getJstreeProjectsByUser: function (userId) {
            return $http.get(consts.serverUrl + 'project/getJstreeProjectsByUser/'+userId);
        },
        createProject: function (projectName) {
            return $http.post(consts.serverUrl + 'project/createProject', {name : projectName});
        }
    };
}]);