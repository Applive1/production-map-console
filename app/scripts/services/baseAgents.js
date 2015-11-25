'use strict';

/**
 * @ngdoc service
 * @name productionMapConsoleApp.MapService
 * @description
 * # popups
 * Factory in the productionMapConsoleApp.
 */
angular.module('productionMapConsoleApp').factory('BaseAgentService', ['$http', 'consts' , function ($http, consts) {

    return {
        deleteAgent: function (agentId) {
            return $http.get(consts.serverUrl + 'BaseAgent/deleteAgent/'+agentId);
        },
        getAgents: function (agentId) {
            return $http.get(consts.serverUrl + 'BaseAgent/getAgents');
        },
        addAgent: function (agent) {
            return $http.post(consts.serverUrl + 'BaseAgent/addAgent',agent);
        },
        updateAgent: function (agent) {
            return $http.post(consts.serverUrl + 'BaseAgent/updateAgent', agent);
        }
    };
}]);