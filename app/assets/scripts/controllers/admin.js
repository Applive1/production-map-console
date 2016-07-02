'use strict';

/**
 * @ngdoc function
 * @name productionMapConsoleApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the productionMapConsoleApp
 */
angular.module('productionMapConsoleApp').controller('AdminCtrl', ['$scope', '$uibModalInstance', 'projects', 'JobsService', 'BaseAgentService', 'blockFactory', '$localStorage', 'Popups', 'Triggers',
  function ($scope, $uibModalInstance, projects, JobsService, BaseAgentService, blockFactory, $localStorage, Popups, Triggers) {
    var jobToEvent = function (job) {
      return {
        title: job.Map.name,
        type: 'important',
        startsAt: job.startAt,
        //endsAt: moment().startOf('week').add(1, 'week').add(9, 'hours').toDate(),
        draggable: false,
        resizable: false,
        job: job
      };
    }

    $scope.projects = projects;
    $scope.view = 1;
    $scope.dateOptions = {
      formatMonth: 'MM',
      minDate: new Date()
    }
    $scope.job = {
      startAt: new Date(),
      isCron: false
    }
    $scope.event = {};
    $scope.calendar = {
      calendarDay: new Date(),
      isCellOpen: true,
      calendarView: 'month',
      events: []
    };
    $scope.eventSources = [];
    $scope.cronJobs = [];

    $scope.changeCalendarView = function (movement) {
      if (movement !== 0)
        $scope.calendar.calendarDay = moment($scope.calendar.calendarDay).add(movement, $scope.calendar.calendarView).toDate();
      else
        $scope.calendar.calendarDay = new Date();
    }

    /*-------------------------------------------- Jobs Functions ----------------------------------*/

    $scope.createJob = function () {
      $scope.job.version = $scope.job.Map.versions.length - 1;
      JobsService.addJob($scope.job).then(function (result) {
        if (!$scope.job.isCron) {
          var job = result.data;
          var event = {
            title: $scope.job.Map.name,
            type: 'important',
            startsAt: job.startAt,
            draggable: false,
            resizable: false,
            job: result.data
          }

          $scope.calendar.events.push(event);
        }else{
          $scope.cronJobs.push(result.data);
        }
        $scope.job = {
          startAt: new Date(),
          isCron: false
        };
      });
    }

    JobsService.getFutureJobs().then(function (result) {
      result.data.forEach(function (job) {
        if(!job.isCron) $scope.calendar.events.push(jobToEvent(job));
        else $scope.cronJobs.push(job);
      })
    })

    $scope.editJob = function (event) {
      $scope.event = event;
      $scope.job = event.job;
    }

    $scope.deleteJob = function (event) {
      var index = $scope.calendar.events.indexOf(event);
      if (index == -1) return;

      JobsService.deleteJob(event.job.id).then(function (result) {
        $scope.calendar.events.splice(index, 1);
      })
    }

    $scope.updateJob = function () {
      JobsService.updateJob($scope.job).then(function (result) {
        var job = result.data;
        var event = {
          title: $scope.job.Map.name,
          type: 'important',
          startsAt: job.startAt,
          draggable: false,
          resizable: false,
          job: angular.copy($scope.job)
        }

        $scope.calendar.events.splice($scope.calendar.events.indexOf($scope.event), 1);

        $scope.calendar.events.push(event);

        $scope.job = {
          startAt: new Date()
        };
      })
    }

    /*-------------------------------------------- Base Agents Functions ----------------------------------*/

    $scope.currentAgent = {
      dedicatedAgents : blockFactory.all(true)
    };
    $scope.currentAgentIndex = null;
    $scope.baseAgents = [];

    BaseAgentService.getAgents().then(function (res) {
      $scope.baseAgents = res.data;
    });
    $scope.addBaseAgent = function () {
      BaseAgentService.addAgent($scope.currentAgent).then(function (res) {
        $scope.baseAgents.push(res.data);
        $scope.currentAgent = $scope.baseAgents[$scope.baseAgents.length - 1];
      });
    };

    $scope.setCurrentAgent = function (agent, index) {
      var dedicatedAgents = blockFactory.all(true);
      $scope.currentAgentIndex = index;
      if (!agent.dedicatedAgents) agent.dedicatedAgents=[];
      if(dedicatedAgents.length !== agent.dedicatedAgents.length){
        for (var i = dedicatedAgents.length - 1; i >= 0; i--) {
          var dedicated = dedicatedAgents[i];
          for (var j = agent.dedicatedAgents.length - 1; j >= 0; j--) {
            var cAgent = agent.dedicatedAgents[j];
            if(cAgent.type === dedicated.type){
              break;
            }
          }
          if(j === -1){
            agent.dedicatedAgents.push(dedicated);
          }
        }
      }
      $scope.currentAgent = agent;
    }

    $scope.updateBaseAgent = function () {
      BaseAgentService.updateAgent($scope.currentAgent).then(function (res) {
      });
    }

    $scope.deleteBaseAgent= function (index) {
      BaseAgentService.deleteAgent($scope.currentAgent.id).then(function (res) {
        $scope.baseAgents.splice($scope.currentAgentIndex,1);
        $scope.currentAgentIndex = null;
        $scope.currentAgent = {
          dedicatedAgents : blockFactory.all(true)
        };
      },function(err){
        $scope.ErrorMeesage =  err.data;
      });
    }

    /*-------------------------------------------- Base Agents Functions ----------------------------------*/

    $scope.setCurrentCron = function(job, index){
      $scope.currentCronJob = job;
      $scope.currentCronJobIndex= index;
    }

    $scope.updateCronJob = function(){
      JobsService.updateJob($scope.currentCronJob).then(function (result) {})
    }

    $scope.deleteCronJob = function(){
      JobsService.deleteJob($scope.currentCronJob.id).then(function (result) {
        $scope.cronJobs.splice($scope.currentCronJobIndex, 1);
        $scope.currentCronJob={};
      })
    };

    $scope.AddAttribute = function(){
      if (!$scope.currentAgent.attributes)
        $scope.currentAgent.attributes = [];

      $scope.inserted = {
        name: '',
        value: ''
      };
      $scope.currentAgent.attributes.push($scope.inserted);
    };

    $scope.removeAttribute = function (index) {
      $scope.currentAgent.attributes.splice(index, 1);
    };


    $scope.$storage = $localStorage;

    /*-------------------------------------------- Dedicated Agents Functions ----------------------------------*/

    $scope.dedicatedAgents = blockFactory.all("blocks");

    /* Actions operations */
    $scope.addAgent = function () {
        Popups.open({
          templateUrl: 'views/Popups/installAgent.html',
          controller: 'installAgentCtrl'
        }, function (block) {
          blockFactory.all();
        });
      };

      $scope.showAgent = function (dAgent) {
        Popups.open({
          templateUrl: 'views/Popups/showAgent.html',
          controller: 'showAgentCtrl',
          resolve: { agent: dAgent }
        }, function (block) {
          console.log("got block");
        });
      };

      $scope.selectedIndex = -1;
    $scope.removeAgent = function(){
      blockFactory.remove($scope.selectedAgent);
      $scope.selectedIndex = -1;
      $scope.selectedAgent = {};
    };

    $scope.selectAgent = function(agent, index){
      if(index == $scope.selectedIndex) {
        $scope.selectedIndex = -1;
        $scope.selectedAgent = {};
      }
      else {
        $scope.selectedAgent = agent;
        $scope.selectedIndex = index;
      }
    };


    /*-------------------------------------------- Triggers Functions ----------------------------------*/

    $scope.triggers = Triggers.all().then(function (msg){
      if(msg.status != 200){
        console.log("Error!!!");
        console.log(msg);
        return;
      }
      $scope.triggers = msg.data;
    });

    /* Actions operations */
    $scope.addTrigger = function () {
        Popups.open({
          templateUrl: 'views/Popups/trigger.html',
          controller: 'addTriggerCtrl'
        }, function (trigger) {
          $scope.triggers.push(trigger);
        });
      };

    $scope.showTrigger = function (trigger) {
        Popups.open({
          templateUrl: 'views/Popups/trigger.html',
          controller: 'showTriggerCtrl',
          resolve: { trigger: trigger }
        }, function (trigger) {
        });
      };

    $scope.selectedIndex = -1;
    $scope.removeTrigger = function(){
      Triggers.delete($scope.selectedTrigger);
      $scope.triggers.splice($scope.selectedIndex, $scope.selectedIndex + 1);
      $scope.selectedIndex = -1;
      $scope.selectedTrigger = {};
    };

    $scope.selectTrigger = function(trigger, index){
      if(index == $scope.selectedIndex) {
        $scope.selectedIndex = -1;
        $scope.selectedTrigger = {};
      }
      else {
        $scope.selectedTrigger = trigger;
        $scope.selectedIndex = index;
      }
    };

  }]);
