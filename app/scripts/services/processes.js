'use strict';

/**
 * @ngdoc service
 * @name productionMapConsoleApp.processes
 * @description
 * # processes
 * Factory in the productionMapConsoleApp.

angular.module('productionMapConsoleApp')
    .factory('Processes',['$http', '$q', 'consts', function ($http, $q, consts) {
        // Service Logic

        var processes = {};
        var TEST_PROCESS_URL = consts.serverUrl + "sysfile/testprocess";
        var TEST_ACTION_URL = consts.serverUrl + "sysfile/testaction";
        function getProcess (link_id, process_id) {
            if(!processes.hasOwnProperty(link_id)){
                return -1;
            }
            var p_list = processes[link_id].p_list;
            var selected_process = -1;
            console.log(p_list);
            for(var i = 0;i<p_list.length;i++){
                var process = p_list[i];
                if(process.id === process_id){
                    selected_process = process;
                    return process;
                }
            }
            console.log(process_id);
            console.log(selected_process);
            return selected_process;
        }
        function getAction (link_id, process_id, action_id) {
            if(!processes.hasOwnProperty(link_id)){
                return;
            }
            var process = getProcess(link_id, process_id);
            if(process === -1){
                return;
            }
            for(var i=0;i<process.actions.length;i++){
                var action = processes.actions[i];
                if(action.id === action_id){
                    return action;
                }
            }
            return {};
        }

        // Public API here
        return {
            get: getProcess,
            set: function(map){
                processes = {};
                for(var i=0; i < map.links.length; i++){
                    var link = map.links[i];
                    console.log(link);
                    processes[link.id] = {
                        p_list: link.processes,
                        size: link.processes.length
                    };
                }
            },
            all: function(link_id) {
                if(!processes.hasOwnProperty(link_id)){
                    processes[link_id] = {
                        p_list: [],
                        size: 0
                    };
                }
                return processes[link_id].p_list;
            },
            add: function(link_id, process){
                if(!processes.hasOwnProperty(link_id)){
                    process.id = 0;
                    processes[link_id] = {
                        p_list: [process],
                        size: 1
                    };
                }
                else{
                    var link_id_processes = processes[link_id];
                    process.id = link_id_processes.size;
                    link_id_processes.size++;
                    link_id_processes.p_list.push(process);
                }
                return process;
            },
            remove: function(link_id, process){
                if(!processes.hasOwnProperty(link_id)){
                    processes[link_id] = {
                        p_list: [],
                        size: 0
                    };
                }
                var p_list = processes[link_id].p_list;
                var index = p_list.indexOf(process);
                p_list.splice(index, 1);
            },
            addAction: function(link_id, process_id, action){
                if(!processes.hasOwnProperty(link_id)){
                    return;
                }
                var process = getProcess(link_id, process_id);
                if(process === -1){
                    return;
                }
                action.id = process.actions.length;
                action.order = process.actions.length;
                action.lastUpdate = new Date().toString();
                process.actions.push(action);
                return angular.copy(action);
            },
            removeAction: function(link_id, process_id, action){
                if(!processes.hasOwnProperty(link_id)){
                    return;
                }
                var process = getProcess(link_id, process_id);
                if(process === -1){
                    return;
                }
                var index = process.actions.indexOf(action);
                process.actions.splice(index, 1);
            },
            testProcess: function(process){
                return $http.post(TEST_PROCESS_URL, process);
            },
            testAction: function(action){
                return $http.post(TEST_ACTION_URL, action);
            }
        };
    }]);
 */
