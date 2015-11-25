'use strict';

/**
 * @ngdoc service
 * @name productionMapConsoleApp.blockFactory
 * @description
 * # blockFactory
 * Factory in the productionMapConsoleApp.
 */
angular.module('productionMapConsoleApp')
  .factory('blockFactory', function ($http, $q, consts, Socket) {
    var blocks = [];
    var drag_blocks = [];
    // var blocks = {
    //   'CommandLine':{
    //     methods:
    //       [
    //         {
    //           name: "execute",
    //           params:
    //             [
    //               {
    //                 name: 'COMMANDS',
    //                 type: 'String'
    //               }
    //             ],
    //           actionString: "COMMANDS"
    //         },
    //         {
    //           name: "execute file",
    //           params:
    //             [
    //               {
    //                 name: 'PATH',
    //                 type: 'String'
    //               }
    //             ],
    //           actionString: "PATH"
    //         }
    //       ]
    //   },
    //   'FileServer':{
    //     methods: [
    //         {
    //             name: "cp",
    //             params:
    //                 [
    //                     {
    //                         name: 'SOURCE_PATH',
    //                         type: 'String'
    //                     },
    //                     {
    //                         name: 'DEST_PATH',
    //                         type: 'String'
    //                     },
    //                     {
    //                         name: 'FLAGS',
    //                         type: 'String'
    //                     }
    //                 ],
    //             actionString: "cp FLAGS SOURCE_PATH DEST_PATH"
    //         },
    //         {
    //             name: "mkdir",
    //             params:
    //                 [
    //                     {
    //                         name: 'PATH',
    //                         type: 'String'
    //                     },
    //                     {
    //                         name: 'FLAGS',
    //                         type: 'String'
    //                     }
    //                 ],
    //             actionString: "mkdir FLAGS PATH"
    //         },
    //         {
    //             name: "mv",
    //             params:
    //                 [
    //                     {
    //                         name: 'SOURCE_PATH',
    //                         type: 'String'
    //                     },
    //                     {
    //                         name: 'DEST_PATH',
    //                         type: 'String'
    //                     },
    //                     {
    //                         name: 'FLAGS',
    //                         type: 'String'
    //                     }
    //                 ],
    //             actionString: "mv FLAGS SOURCE_PATH DEST_PATH"
    //         },
    //         {
    //             name: "rm",
    //             params:
    //                 [
    //                     {
    //                         name: 'PATH',
    //                         type: 'String'
    //                     },
    //                     {
    //                         name: 'FLAGS',
    //                         type: 'String'
    //                     }
    //                 ],
    //             actionString: "rm FLAGS PATH"
    //         }
    //     ]
    //   }
    // };
    // Public API here

    var blocks_names = {};
    return {
      all: function(cb){
        var deferred = $q.defer();
        $http.get(consts.serverUrl + "dedicatedAgent").then(
            function(msg){
                blocks = msg.data;
                for(var blockId in blocks){
                    var block = blocks[blockId];
                    drag_blocks.push({
                        img_url: block.imgUrl,
                        text: block.type
                    });
                }
                deferred.resolve({
                    servers: blocks,
                    blocks: drag_blocks
                });
            });
        return deferred.promise;
      },
      get: function (type) {
        for(var block in blocks){
            if(blocks[block].type === type){
                return blocks[block];
            }
        }
        return {};
      },
      getMethod: function(id){
        return $http.get(consts.serverUrl + "method/"+id);
      },
      getMethods: function(type){
        var server = {};
        var deferred = $q.defer();
        for(var block in blocks){
            if(blocks[block].type === type){
                server = blocks[block];
            }
        }
        var methods = [];
        async.each(server.methods, function(method, callback) {
            $http.get(consts.serverUrl + "method/"+method.id).then(function(msg){
                console.log(msg.data);
                methods.push(msg.data);
                callback();
            });
        }, function(err){
            if( err ) {
              deferred.reject('A method failed to process');
            } else {
                deferred.resolve(methods);
            }
        });
        return deferred.promise;
      },
      add: function(type, methods, imgUrl){
        var deferred = $q.defer();
        var server = {
            type:type,
            methods: methods,
            imgUrl: imgUrl
        }
        $http.post(consts.serverUrl + "dedicatedAgent", server).then(function(resData){
            blocks.push(server);
            deferred.resolve(resData);
        });

        return deferred.promise;
      },
      newBlock: function(type){
        if(blocks_names.hasOwnProperty(type)){
            var res = blocks_names[type];
            blocks_names[type] = res + 1;
            return type + '' + res;
        }
        else{
            blocks_names[type] = 1;
            return type;
        }
      }
    };
  });