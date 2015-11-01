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
        saveMap: function (map) {
            return $http.post(consts.serverUel + 'map/addMapVersion',map);
        },
        createMap: function (mapName, projectId) {
            return $http.post(consts.serverUel + 'map/createMap', {name : mapName, Project:projectId, versions:[], structure:{
                content: '',
                nodes: {},
                links: [],
                code: ''}});
        },
        executeMap: function (map) {
            return $http.post(consts.serverUel + 'sysfile/execute', map);
        }
    };
}]);