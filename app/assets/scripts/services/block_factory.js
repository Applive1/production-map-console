 "use strict";

/**
 * @ngdoc service
 * @name productionMapConsoleApp.blockFactory
 * @description
 * # blockFactory
 * Factory in the productionMapConsoleApp.
 */
angular.module('productionMapConsoleApp')
  .factory('blockFactory', ['$http', '$q', 'consts',function ($http, $q, consts) {
    var blocks = [];
    var drag_blocks = [];
    var blocks_names = {};
    var dedicated_types = [];

    function uploadFile(uploadUrl, file) {
        var fd = new FormData();
        //Take the first selected file
        fd.append("file", file);

        $http.post(uploadUrl + "/registerAgent", fd, {
            headers: {'Content-Type': undefined },
            transformRequest: angular.identity
        }).success( function(err, res){
            console.log(res);
        } ).error(function(err, res){
            console.log("shit " + err);
        });
    }

    function getAllAgents(cb){
        if(cb === true){
            return dedicated_types;
        }
        else if(cb === "blocks") {
            return blocks;
        }
        blocks.splice(0, blocks.length);
        drag_blocks.splice(0, drag_blocks.length);
        dedicated_types.splice(0, dedicated_types.length);
        var deferred = $q.defer();
        $http.get(consts.serverUrl + "dedicatedAgent").then(
            function(msg){
                for(var el in msg.data) {
                    el = msg.data[el];
                    blocks.push(el);
                }
                for(var blockId in blocks){
                    var block = blocks[blockId];
                    drag_blocks.push({
                        img_url: block.imgUrl,
                        text: block.type
                    });
                    dedicated_types.push({
                        type: block.type,
                        url: ''
                    });
                }
                deferred.resolve({
                    servers: blocks,
                    blocks: drag_blocks
                });
            });
        return deferred.promise;
      }

    return {
      remove: function(agent) {
        var block;
        for(block in blocks) {
            if(blocks[block].type === agent.type){
                break;
            }
        }
        if(block !== block.length) {
            blocks.splice(block, 1);
        }
        for(block in dedicated_types) {
            if(dedicated_types[block].type === agent.type){
                break;
            }
        }
        if(block !== block.length) {
            dedicated_types.splice(block, 1);
        }
        for(block in drag_blocks) {
            if(drag_blocks[block].text === agent.type){
                break;
            }
        }
        if(block !== block.length) {
            drag_blocks.splice(block, 1);
        }

        /* remove from server */

        $http.delete(consts.serverUrl + "dedicatedAgent/" + agent.id);

      },
      all: getAllAgents,
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
      add: function(type, methods, imgUrl, file, agents){
        var deferred = $q.defer();
        var server = {
            type:type,
            methods: methods,
            imgUrl: imgUrl
        };
        $http.post(consts.serverUrl + "dedicatedAgent", server).success(function(resData){
            blocks.push(server);
            for (var i = agents.length - 1; i >= 0; i--) {
                var agent = agents[i];
                uploadFile(agent.url, file);
            }
            deferred.resolve(resData);
        }).error(function(err){
            deferred.resolve(err);
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
  }]);
