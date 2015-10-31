'use strict';

/**
 * @ngdoc service
 * @name productionMapConsoleApp.MapService
 * @description
 * # popups
 * Factory in the productionMapConsoleApp.
 */
angular.module('productionMapConsoleApp').factory('MapsService', ['$http', 'consts' , function ($http, consts) {
    // Service Logic
    return {
        deleteMap: function (mapId) {
            return $http.get(consts.serverUel + 'map/deleteMap/'+mapId);
        },
        getMapById: function (mapId) {
            return $http.get(consts.serverUel + 'map/getMapById/'+mapId);
        },
        createMap: function (mapName, projectId) {
            return $http.post(consts.serverUel + 'map/createMap', {name : mapName, project:projectId, versions:[]});
        }
    };
}]);