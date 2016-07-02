'use strict';

angular.module('productionMapConsoleApp').controller('ActionsExecutionCtrl', ['$scope', '$window', '$uibModalInstance', 'BaseAgentService', 'Popups', 'process',function ($scope, $window, $uibModalInstance, BaseAgentService, Popups, process) {

  $scope.process = process;
  $scope.baseAgent = "";
  $scope.baseAgents = [];
  $scope.successActions = 0;
  $scope.actions = {};

  var colors = {
    "success": "green",
    "failed": "red",
    "partial": "orange"
  };
  var MAX_STRING_VIEW = 15;

  $scope.showAction = function(index) {
      Popups.open({
          templateUrl: 'views/Popups/ActionExecution.html',
          controller: 'ActionExecutionCtrl',
          resolve: { action: $scope.actions[index] }
        }, function () {
          console.log("done action execution log");
        });
    }

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
      $scope.actions = {};
      $scope.agents = [];
      var runningAgents = [];
      for(var proc in process["success"]) {
        proc = process["success"][proc];
        $scope.agents.push(proc);
      }
      for(proc in process["failed"]) {
        proc = process["failed"][proc];
        $scope.agents.push(proc);
      }
      for(proc in $scope.agents) {
        proc = $scope.agents[proc];
        for(var act in proc.proc.actions) {
          act = proc.proc.actions[act];
          if(!$scope.actions.hasOwnProperty(act.name)){
            $scope.actions[act.name] = {
              "success": [],
              "failed": []
            };
          }
          if(act.status < 0) {
            status.failed.push({agent: proc.agent, proc: act});
            $scope.actions[act.name].failed.push({agent: proc.agent, proc: act});
          }
          else {
            status.success.push({agent: proc.agent, proc: act});
            $scope.actions[act.name].success.push({agent: proc.agent, proc: act});
          }
        }
      }

      return status;
  }


	$scope.toYAML = function(jsonObj) {
		var yamlString = JSON.stringify(jsonObj, null, 2);
		return yamlString;
	};
    $scope.setContent = function(content){
        $scope.json_viewer = content;
    };
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
    $scope.isAgent = function(agent) {
      try{
        return $scope.agentsNames.hasOwnProperty(agent);
      }
      catch(execption){
        return false;
      }
    };

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

    function updateAgentGraph(){
        if($scope.baseAgent === ""){
            return;
        }
        $scope.agentData[0].values[0].value = 0;
        for(var key in $scope.execution.resObj[$scope.baseAgent].processes){
            var proc = $scope.execution.resObj[$scope.baseAgent].processes[key];
            if(proc.status < 0){
                $scope.agentData[0].values.push({
                    label: proc.result,
                    value: 1
                });
            }
            else{
                $scope.agentData[0].values[0].value = $scope.agentData[0].values[0].value + 1;
            }
        }
    }

    $scope.agentData =  [
            {
                key: "Cumulative Return",
                values: [
                    {
                        label: "Success",
                        value: 0
                    }
                ]
            }
        ];

    $scope.agentOptions = {
        chart: {
            type: 'discreteBarChart',
            height: 450,
            margin : {
                top: 20,
                right: 20,
                bottom: 50,
                left: 55
            },
            x: function(d){return d.label;},
            y: function(d){return d.value + (1e-10);},
            showValues: true,
            valueFormat: function(d){
                return d3.format(',.4f')(d);
            },
            duration: 500,
            xAxis: {
                axisLabel: 'X Axis'
            },
            yAxis: {
                axisLabel: 'Y Axis',
                axisLabelDistance: -10
            }
        }
    };

}]);
