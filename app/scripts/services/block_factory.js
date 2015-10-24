'use strict';

/**
 * @ngdoc service
 * @name productionMapConsoleApp.blockFactory
 * @description
 * # blockFactory
 * Factory in the productionMapConsoleApp.
 */
angular.module('productionMapConsoleApp')
  .factory('blockFactory', function () {
    var blocks = {
      'CommandLine':{
        methods:
          [
            {
              name: "execute",
              params:
                [
                  {
                    name: 'COMMANDS',
                    type: 'String'
                  }
                ],
              actionString: "COMMANDS"
            },
            {
              name: "execute file",
              params:
                [
                  {
                    name: 'PATH',
                    type: 'String'
                  }
                ],
              actionString: "PATH"
            }
          ]
      },
      'FileServer':{
        methods: [
            {
                name: "cp",
                params:
                    [
                        {
                            name: 'SOURCE_PATH',
                            type: 'String'
                        },
                        {
                            name: 'DEST_PATH',
                            type: 'String'
                        },
                        {
                            name: 'FLAGS',
                            type: 'String'
                        }
                    ],
                actionString: "cp FLAGS SOURCE_PATH DEST_PATH"
            },
            {
                name: "mkdir",
                params:
                    [
                        {
                            name: 'PATH',
                            type: 'String'
                        },
                        {
                            name: 'FLAGS',
                            type: 'String'
                        }
                    ],
                actionString: "mkdir FLAGS PATH"
            },
            {
                name: "mv",
                params:
                    [
                        {
                            name: 'SOURCE_PATH',
                            type: 'String'
                        },
                        {
                            name: 'DEST_PATH',
                            type: 'String'
                        },
                        {
                            name: 'FLAGS',
                            type: 'String'
                        }
                    ],
                actionString: "mv FLAGS SOURCE_PATH DEST_PATH"
            },
            {
                name: "rm",
                params:
                    [
                        {
                            name: 'PATH',
                            type: 'String'
                        },
                        {
                            name: 'FLAGS',
                            type: 'String'
                        }
                    ],
                actionString: "rm FLAGS PATH"
            }
        ]
      }
    };
    // Public API here

    var blocks_names = {};
    return {
      getMethods: function (type) {
        return blocks[type].methods;
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
