'use strict';

angular.module('productionMapConsoleApp').filter("filterAgentName", function(){
    return function(input, searchText){
         var returnArray = [];
         var searchTextSplit = searchText.toLowerCase().split(' ');
        for(var x = 0; x < input.length; x++){
             var count = 0;
            for(var y = 0; y < searchTextSplit.length; y++){
                if(input[x].agent.toLowerCase().indexOf(searchTextSplit[y]) !== -1){
                    count++;
                }
            }
            if(count == searchTextSplit.length){
                 returnArray.push(input[x]);   
            }
        }
        return returnArray;
    }
});

angular.module('productionMapConsoleApp').filter("filterByResult", function(){
    return function(input, searchText){
         var returnArray = [];
         var searchTextSplit = searchText.toLowerCase().split(' ');
        for(var x = 0; x < input.length; x++){
             var count = 0;
            for(var y = 0; y < searchTextSplit.length; y++){
                if(input[x].proc.result.toLowerCase().indexOf(searchTextSplit[y]) !== -1){
                    count++;
                }
            }
            if(count == searchTextSplit.length){
                 returnArray.push(input[x]);   
            }
        }
        return returnArray;
    }
});

angular.module('productionMapConsoleApp').filter("filterStatus", function(){
    return function(input, value){
        var returnArray = [];
        for(var x = 0; x < input.length; x++){
             var count = 0;
            if(input[x].proc.status < 0 && value === 0){
              returnArray.push(input[x]);
            }
            else if(input[x].proc.status >= 0 && value == 1){
              returnArray.push(input[x]);
            }
            else if(value == 2) {
              returnArray.push(input[x]);
            }
        }
        return returnArray;
    };
});

angular.module('productionMapConsoleApp').controller('ProcessExecutionCtrl', ['$scope', '$window', '$uibModalInstance', 'BaseAgentService', 'process',function ($scope, $window, $uibModalInstance, BaseAgentService, process) {

  $scope.baseAgent = "";
  $scope.baseAgents = [];
  $scope.successProcesses = 0;
  $scope.processes = {};
  $scope.agents = [];
  $scope.showSuccess = 2; //all
  $scope.agentsFiltered = [];

  $scope.agentNameFilter = "";
  $scope.resultFilter = "";
  $scope.showSuccess = 2;

  var colors = {
    "success": "green",
    "failed": "red",
    "partial": "orange"
  };

  $scope.chooseRadio = function(val) {
    $scope.showSuccess = val;
  };

  function isEmpty(obj) {
      for(var prop in obj) {
          if(obj.hasOwnProperty(prop))
              return false;
      }

      return true && JSON.stringify(obj) === JSON.stringify({});
  }

  function getAgentsStatuses(){
      var status = {
          success: [],
          failed: []
      };
      var runningAgents = [];
      for(var proc in process["success"]) {
        proc = process["success"][proc];
        $scope.agents.push(proc);
        status.success.push(proc.agent);
      }
      for(proc in process["failed"]) {
        proc = process["failed"][proc];
        $scope.agents.push(proc);
        status.failed.push(proc.agent);
      }
      $scope.agentsFiltered = $scope.agents;
      return status;
  }


    BaseAgentService.getAgents().then(function (res) {
      $scope.baseAgents = res.data;
      $scope.agentsNames = {};
      for (var i = $scope.baseAgents.length - 1; i >= 0; i--) {
        $scope.agentsNames[$scope.baseAgents[i].name] = 1;
      }
      var agentsStatuses = getAgentsStatuses();
      var myData = [];
      for(var prop in agentsStatuses){
          myData.push({
              key: prop,
              y: agentsStatuses[prop].length,
              agents: agentsStatuses[prop]
          });
      }
      $scope.data = myData;
    });


    $scope.cancel = function () {
        console.log(JSON.stringify($scope.execution));
        $uibModalInstance.dismiss();
    };

    $scope.options = {
            chart: {
                type: 'pieChart',
                height: 500,
                x: function(d){return d.key;},
                y: function(d){return d.y;},
                color: function(d,i){
                  if(d.key) {
                    return colors[d.key];
                  }
                },
                showLabels: true,
                duration: 500,
                labelThreshold: 0.01,
                labelSunbeamLayout: true,
                legend: {
                    margin: {
                        top: 5,
                        right: 35,
                        bottom: 5,
                        left: 0
                    }
                },
                useInteractiveGuideline: false,
              tooltip: {
                contentGenerator: function (e) {
                  var series = e.series[0];
                  if (series.value === null) return;

                  var rows =
                    "<tr>" +
                      "<td class='key'>" + 'Number of servers: ' + "</td>" +
                      "<td class='x-value'>" + e.data.y + "</td>" +
                    "</tr>";
                    var row = "<tr><td class='key'> Agents </td> <td class='x-value'><strong>";
                    for(var i in e.data.agents){
                        var agentName = e.data.agents[i];
                        row += agentName;
                        if(i < e.data.agents.length - 1){
                            row += "<br/>";
                        }
                    }
                    row += "</strong></td></tr>";
                    rows += row;

                  var header = 
                    "<thead>" + 
                      "<tr>" +
                        "<td class='legend-color-guide'><div style='background-color: " + series.color + ";'></div></td>" +
                        "<td class='key'><strong>" + series.key + "</strong></td>" +
                      "</tr>" + 
                    "</thead>";
                    
                  return "<table>" +
                      header +
                      "<tbody>" + 
                        rows + 
                      "</tbody>" +
                    "</table>";
                } 
              }
            }
        };


}]);
