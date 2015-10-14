'use strict';

/**
 * @ngdoc service
 * @name productionMapConsoleApp.Messages
 * @description
 * # Messages
 * Factory in the productionMapConsoleApp.
 */
angular.module('productionMapConsoleApp')
  .factory('Messages', function () {
    var messages = [];

    return {
      add: function (msg) {
        var now = new Date().toDateString();
        messages.push({id:messages.length, date: now, content: msg});
      },
      clear: function(){
        messages.splice(0,messages.length);
      },
      get: function(id){
        for(var i = 0; i<messages.length;i++){
          var msg = messages[i];
          if(id === msg.id){
            return msg;
          }
        }
        return -1;//error no message found
      },
      all: function(){
        return messages;
      }
    };
  });
