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
            return $http.get(consts.serverUrl + 'map/deleteMap/'+mapId);
        },
        getMapById: function (mapId) {
            return $http.get(consts.serverUrl + 'map/getMapById/'+mapId);
        },
        saveMap: function (map) {
            return $http.post(consts.serverUrl + 'map/addMapVersion',map);
        },
        createMap: function (mapName, projectId) {
            return $http.post(consts.serverUrl + 'map/createMap', {name : mapName, Project:projectId, versions:[], structure:{
                content: '',
                nodes: {},
                links: [],
                code: ''}});
        },
        executeMap: function (map) {
            return $http.post(consts.serverUrl + 'sysfile/execute', map);
        },
        resumeMap : function(map){
            return $http.post(consts.serverUrl + 'sysfile/resumeMap', map);
        },
        ChangeMapRunStatus : function(map, status){
            return $http.post(consts.serverUrl + 'map/updateVersionStatus', {map:map, status: status});
        },
        updateMapProject : function (MapId, ProjectId){
          return $http.get(consts.serverUrl + 'map/updateMapProject/'+MapId+'/'+ProjectId);
        }
    };
}]);
