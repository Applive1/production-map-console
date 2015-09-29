'use strict';

/**
 * @ngdoc service
 * @name productionMapConsoleApp.processes
 * @description
 * # processes
 * Factory in the productionMapConsoleApp.
 */
angular.module('productionMapConsoleApp')
  .factory('Processes', function () {
    // Service Logic

    var processes = {
      '1': {
        p_list: [{
          name: 'p1',
          order: 1,
          description: "bla bla",
          id: 1
        },
        {
          name: 'p2',
          order: 2,
          description: "bla bla",
          id: 2
        },
        {
          name: 'p3',
          order: 3,
          description: "bla bla",
          id: 3
        }],
        size: 3
      }
    };
    // Public API here
    return {
      get: function (link_id, process_id) {
        var p_list = processes[link_id];
        var selected_process = {};
        angular.forEach(function(process){
          if(process.id === process_id){
            selected_process = process;
            return;
          }
        });
        return selected_process;
      },
      all: function(link_id) {
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
      },
      remove: function(link_id, process){
        var p_list = processes[link_id].p_list;
        var index = p_list.indexOf(process);
        p_list.splice(index, 1);
      }
    };
  });
