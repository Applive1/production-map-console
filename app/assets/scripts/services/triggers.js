'use strict';

/**
 * @ngdoc service
 * @name productionMapConsoleApp.triggerService
 * @description
 * # popups
 * Factory in the productionMapConsoleApp.
 */
angular.module('productionMapConsoleApp').factory('Triggers', ['$http', 'consts' , function ($http, consts) {

    var types = [
        {
            id: 0,
            viewName: 'git',
            params: [
                {
                    "name": "operation",
                    "viewName": "execute hooks",
                    "type": "collection",
                    "options": [{ "id": "push",
                                  "name": "push"}
                                ]
                },
                {
                    "name": "serverUrl",
                    "viewName": "server url",
                    "type": "string"
                },
                {
                    "name": "branch",
                    "viewName": "branch",
                    "type": "string"
                }
            ]
        }
    ];
    return {
        delete: function (id) {
            return $http.delete(consts.serverUrl + 'trigger/'+ id);
        },
        get: function (id) {
            return $http.get(consts.serverUrl + 'trigger/' + id);
        },
        all: function () {
            return $http.get(consts.serverUrl + 'trigger');
        },
        add: function (trigger) {
            return $http.post(consts.serverUrl + 'trigger' , trigger);
        },
        update: function (trigger) {
            return $http.post(consts.serverUrl + 'trigger/' + trigger.id, trigger);
        },
        getTypes: function () {
            return types;
        }
    };
}]);