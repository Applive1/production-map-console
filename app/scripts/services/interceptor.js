'use strict';
angular.module('productionMapConsoleApp')
    .factory('authInterceptorService', ['$q','$location', function ($q, $location) {

   return {
       responseError: function (rejection) {
           /*if (rejection.status === 401) {
               if ($location.$$path != '/login/')
                   $location.path('/login/');
           }
           return $q.reject(rejection);*/
       }
   }
}]);