'use strict';

/**
 * @ngdoc service
 * @name productionMapConsoleApp.ProjectService
 * @description
 * # popups
 * Factory in the productionMapConsoleApp.
 */
angular.module('productionMapConsoleApp').factory('SocketsFactory', ['socketFactory' , function (socketFactory) {
    var myIoSocket = io.connect('/some/path');

    myIoSocket = socketFactory({
        ioSocket: myIoSocket
    });

    myIoSocket.forward('error');
    return myIoSocket;
}]);