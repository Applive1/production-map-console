'use strict';

/**
 * @ngdoc function
 * @name productionMapConsoleApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the productionMapConsoleApp
 */
angular.module('productionMapConsoleApp').controller('AdminCtrl', ['$scope', '$modalInstance', 'projects', 'JobsService', 'BaseAgentService',
    function ($scope, $modalInstance, projects, JobsService, BaseAgentService) {
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
            startAt: new Date()
        }
        $scope.event = {};
        $scope.calendar = {
            calendarDay: new Date(),
            isCellOpen: true,
            calendarView: 'month',
            events: []
        };
        $scope.eventSources = [];

        /*-------------------------------------------- Jobs Functions ----------------------------------*/

        $scope.createJob = function () {
            $scope.job.version = $scope.job.Map.versions.length - 1;
            JobsService.addJob($scope.job).then(function (result) {
                var job = result.data;
                var event = {
                    title: $scope.job.Map.name,
                    type: 'important',
                    startsAt: job.startAt,
                    //endsAt: moment().startOf('week').add(1, 'week').add(9, 'hours').toDate(),
                    draggable: false,
                    resizable: false,
                    job: angular.copy($scope.job)
                }

                $scope.calendar.events.push(event);

                $scope.job = {
                    startAt: new Date()
                };
            });
        }

        JobsService.getFutureJobs().then(function (result) {
            result.data.forEach(function (job) {
                $scope.calendar.events.push(jobToEvent(job));
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

        $scope.currentAgent = {};
        $scope.baseAgents = [];
        BaseAgentService.getAgents().then(function (res) {
            $scope.baseAgents = res.data;
        })
        $scope.addBaseAgent = function () {
            BaseAgentService.addAgent($scope.currentAgent).then(function (res) {
                $scope.baseAgents.push(res.data);
                $scope.currentAgent = $scope.baseAgents[$scope.baseAgents.length-1];
            })
        };

        $scope.updateBaseAgent = function () {
            BaseAgentService.updateAgent($scope.currentAgent).then(function (res) {})
        }

    }]);


