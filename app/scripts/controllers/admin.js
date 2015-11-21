'use strict';

/**
 * @ngdoc function
 * @name productionMapConsoleApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the productionMapConsoleApp
 */
angular.module('productionMapConsoleApp').controller('AdminCtrl', ['$scope', function ($scope) {
    $scope.view = 1;
    $scope.calendarView = 'month';
    $scope.calendar = {
        calendarDay: new Date(),
        isCellOpen : true,
        events: [
            {
                title: 'An event',
                type: 'warning',
                startsAt: moment().startOf('week').subtract(2, 'days').add(8, 'hours').toDate(),
                endsAt: moment().startOf('week').add(1, 'week').add(9, 'hours').toDate(),
                draggable: true,
                resizable: true
            },
            {
                title: '<i class="glyphicon glyphicon-asterisk"></i> <span class="text-primary">Another event</span>, with a <i>html</i> title',
                type: 'info',
                startsAt: moment().subtract(1, 'day').toDate(),
                endsAt: moment().add(5, 'days').toDate(),
                draggable: true,
                resizable: true
            },
            {
                title: 'This is a really long event title that occurs on every year',
                type: 'important',
                startsAt: moment().startOf('day').add(7, 'hours').toDate(),
                endsAt: moment().startOf('day').add(19, 'hours').toDate(),
                recursOn: 'year',
                draggable: true,
                resizable: true
            }
        ]
};
$scope.eventSources = [];
}])
;


