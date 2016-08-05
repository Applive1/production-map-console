import  { Map } from '../models/map';

export MAPS: Map[] = [
    {
        "_id" : "5720f22fa02b766c1cbf8d2c",
        "name" : "simpleCli",
        "Project" : "5720f21ea02b766c1cbf8d2a",
        "structure" : {
            "content" : "",
            "nodes" : {},
            "links" : [],
            "code" : ""
        },
        "versions" : [ 
            {
                "date" : "2016-04-27T17:01:32.226Z",
                "executions" : [],
                "status" : 6
            }, 
            {
                "date" : "2016-04-27T17:09:03.618Z",
                "patches" : [ 
                    {
                        "op" : "add",
                        "path" : "/nodes/Start",
                        "value" : {
                            "id" : "fd1000fc-11cc-4261-9dcd-b2b9a53a3131",
                            "name" : "Start",
                            "type" : "startNode",
                            "serverUrl" : "",
                            "attributes" : {}
                        }
                    }, 
                    {
                        "op" : "replace",
                        "path" : "/content",
                        "value" : "{\"nodes\":[{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":70,\"y\":250},\"angle\":0,\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\",\"embeds\":\"\",\"z\":1,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"Start\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/pmAgent.png\"}}}],\"links\":[]}"
                    }
                ],
                "executions" : []
            }, 
            {
                "date" : "2016-04-27T17:23:07.943Z",
                "patches" : [ 
                    {
                        "op" : "replace",
                        "path" : "/code",
                        "value" : "function filterAgent(){\n  if(currentAgent.attributes.os == \"Linux\"){\n    return true;\n  }\n  else{\n    return false;\n  }\n}"
                    }, 
                    {
                        "op" : "add",
                        "path" : "/links/0",
                        "value" : {
                            "id" : "9f0c041e-6c05-410a-8b7a-e23138a9ffd5",
                            "sourceId" : "fd1000fc-11cc-4261-9dcd-b2b9a53a3131",
                            "targetId" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                            "processes" : [ 
                                {
                                    "name" : "HelloWorld",
                                    "description" : "",
                                    "order" : 0,
                                    "default_execution" : false,
                                    "mandatory" : false,
                                    "actions" : [ 
                                        {
                                            "server" : {
                                                "type" : "CommandLine",
                                                "name" : "CommandLine",
                                                "id" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                                "url" : "localhost:8100"
                                            },
                                            "method" : {
                                                "params" : [ 
                                                    {
                                                        "name" : "COMMANDS",
                                                        "viewName" : "command",
                                                        "type" : "string",
                                                        "method" : "5720f24fa02b766c1cbf8d2e",
                                                        "options" : [],
                                                        "createdAt" : "2016-04-27T17:09:35.909Z",
                                                        "updatedAt" : "2016-04-27T17:09:35.909Z",
                                                        "id" : "5720f24fa02b766c1cbf8d3c"
                                                    }
                                                ],
                                                "agent" : {
                                                    "type" : "CommandLine",
                                                    "imgUrl" : "images/controls/CommandLine.png",
                                                    "createdAt" : "2016-04-27T17:09:35.253Z",
                                                    "updatedAt" : "2016-04-27T17:09:35.560Z",
                                                    "id" : "5720f24fa02b766c1cbf8d2d"
                                                },
                                                "name" : "execute",
                                                "viewName" : "execute command",
                                                "actionString" : "COMMANDS",
                                                "createdAt" : "2016-04-27T17:09:35.564Z",
                                                "updatedAt" : "2016-04-27T17:09:35.745Z",
                                                "id" : "5720f24fa02b766c1cbf8d2e"
                                            },
                                            "params" : {
                                                "COMMANDS" : {
                                                    "text" : "echo \"Hello World\""
                                                }
                                            },
                                            "name" : "echo",
                                            "timeout" : 0,
                                            "timeunit" : "1",
                                            "retries" : 0,
                                            "mandatory" : false,
                                            "suspend" : false,
                                            "result" : "",
                                            "lastUpdate" : "Tue Jun 14 2016 21:08:39 GMT+0300 (שעון קיץ ירושלים)"
                                        }
                                    ],
                                    "result" : "",
                                    "inside" : true
                                }
                            ],
                            "result" : "",
                            "filterAgent" : false,
                            "filterAgentCode" : "filterAgent();"
                        }
                    }, 
                    {
                        "op" : "add",
                        "path" : "/nodes/CommandLine",
                        "value" : {
                            "id" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                            "type" : "CommandLine",
                            "name" : "CommandLine",
                            "serverUrl" : "localhost:8100",
                            "attributes" : {}
                        }
                    }, 
                    {
                        "op" : "replace",
                        "path" : "/content",
                        "value" : "{\"nodes\":[{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":70,\"y\":250},\"angle\":0,\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\",\"embeds\":\"\",\"z\":1,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"Start\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/pmAgent.png\"}}},{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":286.203125,\"y\":319},\"angle\":0,\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\",\"embeds\":\"\",\"z\":2,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"CommandLine\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/CommandLine.png\"}}}],\"links\":[{\"type\":\"link\",\"source\":{\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\"},\"target\":{\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\"},\"router\":{\"name\":\"manhattan\"},\"connector\":{\"name\":\"rounded\"},\"id\":\"9f0c041e-6c05-410a-8b7a-e23138a9ffd5\",\"z\":4,\"attrs\":{\".connection\":{\"stroke\":\"#333333\",\"stroke-width\":3},\".marker-target\":{\"fill\":\"#333333\",\"d\":\"M 10 0 L 0 5 L 10 10 z\"}}}]}"
                    }
                ],
                "executions" : [ 
                    {
                        "log" : "---\n  name: \"simpleCli\"\n  version: 2\n  date: \"Wed Apr 27 2016 20:23:10 GMT+0300 (שעון קיץ ירושלים)\"\n  Windows-Agent3: \n    processes: {}\n    status: 0\n    result: \"\"\n",
                        "resObj" : {
                            "name" : "simpleCli",
                            "version" : 2,
                            "date" : "Wed Apr 27 2016 20:23:10 GMT+0300 (שעון קיץ ירושלים)",
                            "Windows-Agent3" : {
                                "processes" : {},
                                "status" : 0,
                                "result" : ""
                            }
                        },
                        "map" : {
                            "content" : "{\"nodes\":[{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":70,\"y\":250},\"angle\":0,\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\",\"embeds\":\"\",\"z\":1,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"Start\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/pmAgent.png\"}}},{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":286.203125,\"y\":319},\"angle\":0,\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\",\"embeds\":\"\",\"z\":2,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"CommandLine\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/CommandLine.png\"}}}],\"links\":[{\"type\":\"link\",\"source\":{\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\"},\"target\":{\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\"},\"router\":{\"name\":\"manhattan\"},\"connector\":{\"name\":\"rounded\"},\"id\":\"9f0c041e-6c05-410a-8b7a-e23138a9ffd5\",\"z\":4,\"attrs\":{\".connection\":{\"stroke\":\"#333333\",\"stroke-width\":3},\".marker-target\":{\"fill\":\"#333333\",\"d\":\"M 10 0 L 0 5 L 10 10 z\"}}}]}",
                            "nodes" : {
                                "Start" : {
                                    "id" : "fd1000fc-11cc-4261-9dcd-b2b9a53a3131",
                                    "name" : "Start",
                                    "type" : "startNode",
                                    "serverUrl" : "",
                                    "attributes" : {}
                                },
                                "CommandLine" : {
                                    "id" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                    "type" : "CommandLine",
                                    "name" : "CommandLine",
                                    "serverUrl" : "localhost:8100",
                                    "attributes" : {}
                                }
                            },
                            "links" : [ 
                                {
                                    "id" : "9f0c041e-6c05-410a-8b7a-e23138a9ffd5",
                                    "sourceId" : "fd1000fc-11cc-4261-9dcd-b2b9a53a3131",
                                    "targetId" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                    "processes" : [ 
                                        {
                                            "name" : "HelloWorld",
                                            "description" : "",
                                            "order" : 0,
                                            "default_execution" : false,
                                            "mandatory" : false,
                                            "actions" : [ 
                                                {
                                                    "server" : {
                                                        "type" : "CommandLine",
                                                        "name" : "CommandLine",
                                                        "id" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                                        "url" : "localhost:8100"
                                                    },
                                                    "method" : {
                                                        "params" : [ 
                                                            {
                                                                "name" : "COMMANDS",
                                                                "viewName" : "command",
                                                                "type" : "string",
                                                                "method" : "5720f24fa02b766c1cbf8d2e",
                                                                "options" : [],
                                                                "createdAt" : "2016-04-27T17:09:35.909Z",
                                                                "updatedAt" : "2016-04-27T17:09:35.909Z",
                                                                "id" : "5720f24fa02b766c1cbf8d3c"
                                                            }
                                                        ],
                                                        "agent" : {
                                                            "type" : "CommandLine",
                                                            "imgUrl" : "images/controls/CommandLine.png",
                                                            "createdAt" : "2016-04-27T17:09:35.253Z",
                                                            "updatedAt" : "2016-04-27T17:09:35.560Z",
                                                            "id" : "5720f24fa02b766c1cbf8d2d"
                                                        },
                                                        "name" : "execute",
                                                        "viewName" : "execute command",
                                                        "actionString" : "COMMANDS",
                                                        "createdAt" : "2016-04-27T17:09:35.564Z",
                                                        "updatedAt" : "2016-04-27T17:09:35.745Z",
                                                        "id" : "5720f24fa02b766c1cbf8d2e"
                                                    },
                                                    "params" : {
                                                        "COMMANDS" : {
                                                            "text" : "echo \"Hello World\""
                                                        }
                                                    },
                                                    "name" : "echo",
                                                    "timeout" : 0,
                                                    "timeunit" : "1",
                                                    "retries" : 0,
                                                    "mandatory" : false,
                                                    "suspend" : false,
                                                    "result" : "",
                                                    "lastUpdate" : "Wed Apr 27 2016 20:22:05 GMT+0300 (שעון קיץ ירושלים)"
                                                }
                                            ],
                                            "result" : "",
                                            "inside" : true
                                        }
                                    ],
                                    "result" : "",
                                    "filterAgent" : true,
                                    "filterAgentCode" : "filterAgent();",
                                    "linkIndex" : 0
                                }
                            ],
                            "code" : "function filterAgent(){\n  if(currentAgent.attributes.os == \"Linux\"){\n    return true;\n  }\n  else{\n    return false;\n  }\n}"
                        },
                        "date" : "2016-04-27T17:23:10.916Z"
                    }
                ],
                "status" : 2
            }, 
            {
                "date" : "2016-04-27T17:23:44.050Z"
                "patches" : [ 
                    {
                        "op" : "remove",
                        "path" : "/links/0/linkIndex"
                    }
                ],
                "executions" : [ 
                    {
                        "log" : "---\n  name: \"simpleCli\"\n  version: 3\n  date: \"Wed Apr 27 2016 20:23:44 GMT+0300 (שעון קיץ ירושלים)\"\n",
                        "resObj" : {
                            "name" : "simpleCli",
                            "version" : 3,
                            "date" : "Wed Apr 27 2016 20:23:44 GMT+0300 (שעון קיץ ירושלים)"
                        },
                        "map" : {
                            "content" : "{\"nodes\":[{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":70,\"y\":250},\"angle\":0,\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\",\"embeds\":\"\",\"z\":1,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"Start\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/pmAgent.png\"}}},{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":286.203125,\"y\":319},\"angle\":0,\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\",\"embeds\":\"\",\"z\":2,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"CommandLine\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/CommandLine.png\"}}}],\"links\":[{\"type\":\"link\",\"source\":{\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\"},\"target\":{\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\"},\"router\":{\"name\":\"manhattan\"},\"connector\":{\"name\":\"rounded\"},\"id\":\"9f0c041e-6c05-410a-8b7a-e23138a9ffd5\",\"z\":4,\"attrs\":{\".connection\":{\"stroke\":\"#333333\",\"stroke-width\":3},\".marker-target\":{\"fill\":\"#333333\",\"d\":\"M 10 0 L 0 5 L 10 10 z\"}}}]}",
                            "nodes" : {
                                "Start" : {
                                    "id" : "fd1000fc-11cc-4261-9dcd-b2b9a53a3131",
                                    "name" : "Start",
                                    "type" : "startNode",
                                    "serverUrl" : "",
                                    "attributes" : {}
                                },
                                "CommandLine" : {
                                    "id" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                    "type" : "CommandLine",
                                    "name" : "CommandLine",
                                    "serverUrl" : "localhost:8100",
                                    "attributes" : {}
                                }
                            },
                            "links" : [ 
                                {
                                    "id" : "9f0c041e-6c05-410a-8b7a-e23138a9ffd5",
                                    "sourceId" : "fd1000fc-11cc-4261-9dcd-b2b9a53a3131",
                                    "targetId" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                    "processes" : [ 
                                        {
                                            "name" : "HelloWorld",
                                            "description" : "",
                                            "order" : 0,
                                            "default_execution" : false,
                                            "mandatory" : false,
                                            "actions" : [ 
                                                {
                                                    "server" : {
                                                        "type" : "CommandLine",
                                                        "name" : "CommandLine",
                                                        "id" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                                        "url" : "localhost:8100"
                                                    },
                                                    "method" : {
                                                        "params" : [ 
                                                            {
                                                                "name" : "COMMANDS",
                                                                "viewName" : "command",
                                                                "type" : "string",
                                                                "method" : "5720f24fa02b766c1cbf8d2e",
                                                                "options" : [],
                                                                "createdAt" : "2016-04-27T17:09:35.909Z",
                                                                "updatedAt" : "2016-04-27T17:09:35.909Z",
                                                                "id" : "5720f24fa02b766c1cbf8d3c"
                                                            }
                                                        ],
                                                        "agent" : {
                                                            "type" : "CommandLine",
                                                            "imgUrl" : "images/controls/CommandLine.png",
                                                            "createdAt" : "2016-04-27T17:09:35.253Z",
                                                            "updatedAt" : "2016-04-27T17:09:35.560Z",
                                                            "id" : "5720f24fa02b766c1cbf8d2d"
                                                        },
                                                        "name" : "execute",
                                                        "viewName" : "execute command",
                                                        "actionString" : "COMMANDS",
                                                        "createdAt" : "2016-04-27T17:09:35.564Z",
                                                        "updatedAt" : "2016-04-27T17:09:35.745Z",
                                                        "id" : "5720f24fa02b766c1cbf8d2e"
                                                    },
                                                    "params" : {
                                                        "COMMANDS" : {
                                                            "text" : "echo \"Hello World\""
                                                        }
                                                    },
                                                    "name" : "echo",
                                                    "timeout" : 0,
                                                    "timeunit" : "1",
                                                    "retries" : 0,
                                                    "mandatory" : false,
                                                    "suspend" : false,
                                                    "result" : "",
                                                    "lastUpdate" : "Wed Apr 27 2016 20:22:05 GMT+0300 (שעון קיץ ירושלים)"
                                                }
                                            ],
                                            "result" : "",
                                            "inside" : true
                                        }
                                    ],
                                    "result" : "",
                                    "filterAgent" : true,
                                    "filterAgentCode" : "filterAgent();"
                                }
                            ],
                            "code" : "function filterAgent(){\n  if(currentAgent.attributes.os == \"Linux\"){\n    return true;\n  }\n  else{\n    return false;\n  }\n}"
                        },
                        "date" : "2016-04-27T17:23:44.169Z"
                    }, 
                    {
                        "log" : "---\n  name: \"simpleCli\"\n  version: 3\n  date: \"Wed Apr 27 2016 20:24:05 GMT+0300 (שעון קיץ ירושלים)\"\n  Linux-Agent2: \n    processes: {}\n    status: 0\n    result: \"\"\n  Linux-Agent1: \n    processes: {}\n    status: 0\n    result: \"\"\n  Windows-Agent3: \n    processes: {}\n    status: 0\n    result: \"\"\n",
                        "resObj" : {
                            "name" : "simpleCli",
                            "version" : 3,
                            "date" : "Wed Apr 27 2016 20:24:05 GMT+0300 (שעון קיץ ירושלים)",
                            "Linux-Agent2" : {
                                "processes" : {},
                                "status" : 0,
                                "result" : ""
                            },
                            "Linux-Agent1" : {
                                "processes" : {},
                                "status" : 0,
                                "result" : ""
                            },
                            "Windows-Agent3" : {
                                "processes" : {},
                                "status" : 0,
                                "result" : ""
                            }
                        },
                        "map" : {
                            "content" : "{\"nodes\":[{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":70,\"y\":250},\"angle\":0,\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\",\"embeds\":\"\",\"z\":1,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"Start\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/pmAgent.png\"}}},{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":286.203125,\"y\":319},\"angle\":0,\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\",\"embeds\":\"\",\"z\":2,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"CommandLine\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/CommandLine.png\"}}}],\"links\":[{\"type\":\"link\",\"source\":{\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\"},\"target\":{\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\"},\"router\":{\"name\":\"manhattan\"},\"connector\":{\"name\":\"rounded\"},\"id\":\"9f0c041e-6c05-410a-8b7a-e23138a9ffd5\",\"z\":4,\"attrs\":{\".connection\":{\"stroke\":\"#333333\",\"stroke-width\":3},\".marker-target\":{\"fill\":\"#333333\",\"d\":\"M 10 0 L 0 5 L 10 10 z\"}}}]}",
                            "nodes" : {
                                "Start" : {
                                    "id" : "fd1000fc-11cc-4261-9dcd-b2b9a53a3131",
                                    "name" : "Start",
                                    "type" : "startNode",
                                    "serverUrl" : "",
                                    "attributes" : {}
                                },
                                "CommandLine" : {
                                    "id" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                    "type" : "CommandLine",
                                    "name" : "CommandLine",
                                    "serverUrl" : "localhost:8100",
                                    "attributes" : {}
                                }
                            },
                            "links" : [ 
                                {
                                    "id" : "9f0c041e-6c05-410a-8b7a-e23138a9ffd5",
                                    "sourceId" : "fd1000fc-11cc-4261-9dcd-b2b9a53a3131",
                                    "targetId" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                    "processes" : [ 
                                        {
                                            "name" : "HelloWorld",
                                            "description" : "",
                                            "order" : 0,
                                            "default_execution" : false,
                                            "mandatory" : false,
                                            "actions" : [ 
                                                {
                                                    "server" : {
                                                        "type" : "CommandLine",
                                                        "name" : "CommandLine",
                                                        "id" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                                        "url" : "localhost:8100"
                                                    },
                                                    "method" : {
                                                        "params" : [ 
                                                            {
                                                                "name" : "COMMANDS",
                                                                "viewName" : "command",
                                                                "type" : "string",
                                                                "method" : "5720f24fa02b766c1cbf8d2e",
                                                                "options" : [],
                                                                "createdAt" : "2016-04-27T17:09:35.909Z",
                                                                "updatedAt" : "2016-04-27T17:09:35.909Z",
                                                                "id" : "5720f24fa02b766c1cbf8d3c"
                                                            }
                                                        ],
                                                        "agent" : {
                                                            "type" : "CommandLine",
                                                            "imgUrl" : "images/controls/CommandLine.png",
                                                            "createdAt" : "2016-04-27T17:09:35.253Z",
                                                            "updatedAt" : "2016-04-27T17:09:35.560Z",
                                                            "id" : "5720f24fa02b766c1cbf8d2d"
                                                        },
                                                        "name" : "execute",
                                                        "viewName" : "execute command",
                                                        "actionString" : "COMMANDS",
                                                        "createdAt" : "2016-04-27T17:09:35.564Z",
                                                        "updatedAt" : "2016-04-27T17:09:35.745Z",
                                                        "id" : "5720f24fa02b766c1cbf8d2e"
                                                    },
                                                    "params" : {
                                                        "COMMANDS" : {
                                                            "text" : "echo \"Hello World\""
                                                        }
                                                    },
                                                    "name" : "echo",
                                                    "timeout" : 0,
                                                    "timeunit" : "1",
                                                    "retries" : 0,
                                                    "mandatory" : false,
                                                    "suspend" : false,
                                                    "result" : "",
                                                    "lastUpdate" : "Wed Apr 27 2016 20:22:05 GMT+0300 (שעון קיץ ירושלים)"
                                                }
                                            ],
                                            "result" : "",
                                            "inside" : true
                                        }
                                    ],
                                    "result" : "",
                                    "filterAgent" : true,
                                    "filterAgentCode" : "filterAgent();"
                                }
                            ],
                            "code" : "function filterAgent(){\n  if(currentAgent.attributes.os == \"Linux\"){\n    return true;\n  }\n  else{\n    return false;\n  }\n}"
                        },
                        "date" : "2016-04-27T17:24:05.962Z"
                    }
                ],
                "status" : 2
            }, 
            {
                "date" : "2016-04-27T17:29:20.084Z"
                "patches" : [ 
                    {
                        "op" : "replace",
                        "path" : "/code",
                        "value" : "function filterAgent(){\n  var os = getAttribute(currentAgent, \"os\");\n  if(os == \"Linux\"){\n    return true;\n  }\n  else{\n    return false;\n  }\n}"
                    }
                ],
                "executions" : [ 
                    {
                        "log" : "---\n  name: \"simpleCli\"\n  version: 4\n  date: \"Wed Apr 27 2016 20:29:22 GMT+0300 (שעון קיץ ירושלים)\"\n  Linux-Agent2: \n    processes: {}\n    status: 0\n    result: \"\"\n  Linux-Agent1: \n    processes: \n      HelloWorld: \n        name: \"HelloWorld\"\n        actions: \n          echo: \n            name: \"echo\"\n            baseAgent: \n              name: \"Linux-Agent1\"\n              url: \"http://localhost:8090\"\n            result: \"\\\"Hello World\\\"\\r\\n\"\n            status: 0\n        result: \"\\\"Hello World\\\"\\r\\n\\n\"\n        status: 0\n    status: 0\n    result: \"\\\"Hello World\\\"\\r\\n\\n\\n\"\n  Windows-Agent3: \n    processes: {}\n    status: 0\n    result: \"\"\n",
                        "resObj" : {
                            "name" : "simpleCli",
                            "version" : 4,
                            "date" : "Wed Apr 27 2016 20:29:22 GMT+0300 (שעון קיץ ירושלים)",
                            "Linux-Agent2" : {
                                "processes" : {},
                                "status" : 0,
                                "result" : ""
                            },
                            "Linux-Agent1" : {
                                "processes" : {
                                    "HelloWorld" : {
                                        "name" : "HelloWorld",
                                        "actions" : {
                                            "echo" : {
                                                "name" : "echo",
                                                "baseAgent" : {
                                                    "name" : "Linux-Agent1",
                                                    "url" : "http://localhost:8090"
                                                },
                                                "result" : "\"Hello World\"\r\n",
                                                "status" : 0
                                            }
                                        },
                                        "result" : "\"Hello World\"\r\n\n",
                                        "status" : 0
                                    }
                                },
                                "status" : 0,
                                "result" : "\"Hello World\"\r\n\n\n"
                            },
                            "Windows-Agent3" : {
                                "processes" : {},
                                "status" : 0,
                                "result" : ""
                            }
                        },
                        "map" : {
                            "content" : "{\"nodes\":[{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":70,\"y\":250},\"angle\":0,\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\",\"embeds\":\"\",\"z\":1,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"Start\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/pmAgent.png\"}}},{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":286.203125,\"y\":319},\"angle\":0,\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\",\"embeds\":\"\",\"z\":2,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"CommandLine\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/CommandLine.png\"}}}],\"links\":[{\"type\":\"link\",\"source\":{\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\"},\"target\":{\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\"},\"router\":{\"name\":\"manhattan\"},\"connector\":{\"name\":\"rounded\"},\"id\":\"9f0c041e-6c05-410a-8b7a-e23138a9ffd5\",\"z\":4,\"attrs\":{\".connection\":{\"stroke\":\"#333333\",\"stroke-width\":3},\".marker-target\":{\"fill\":\"#333333\",\"d\":\"M 10 0 L 0 5 L 10 10 z\"}}}]}",
                            "nodes" : {
                                "Start" : {
                                    "id" : "fd1000fc-11cc-4261-9dcd-b2b9a53a3131",
                                    "name" : "Start",
                                    "type" : "startNode",
                                    "serverUrl" : "",
                                    "attributes" : {}
                                },
                                "CommandLine" : {
                                    "id" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                    "type" : "CommandLine",
                                    "name" : "CommandLine",
                                    "serverUrl" : "localhost:8100",
                                    "attributes" : {}
                                }
                            },
                            "links" : [ 
                                {
                                    "id" : "9f0c041e-6c05-410a-8b7a-e23138a9ffd5",
                                    "sourceId" : "fd1000fc-11cc-4261-9dcd-b2b9a53a3131",
                                    "targetId" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                    "processes" : [ 
                                        {
                                            "name" : "HelloWorld",
                                            "description" : "",
                                            "order" : 0,
                                            "default_execution" : false,
                                            "mandatory" : false,
                                            "actions" : [ 
                                                {
                                                    "server" : {
                                                        "type" : "CommandLine",
                                                        "name" : "CommandLine",
                                                        "id" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                                        "url" : "localhost:8100"
                                                    },
                                                    "method" : {
                                                        "params" : [ 
                                                            {
                                                                "name" : "COMMANDS",
                                                                "viewName" : "command",
                                                                "type" : "string",
                                                                "method" : "5720f24fa02b766c1cbf8d2e",
                                                                "options" : [],
                                                                "createdAt" : "2016-04-27T17:09:35.909Z",
                                                                "updatedAt" : "2016-04-27T17:09:35.909Z",
                                                                "id" : "5720f24fa02b766c1cbf8d3c"
                                                            }
                                                        ],
                                                        "agent" : {
                                                            "type" : "CommandLine",
                                                            "imgUrl" : "images/controls/CommandLine.png",
                                                            "createdAt" : "2016-04-27T17:09:35.253Z",
                                                            "updatedAt" : "2016-04-27T17:09:35.560Z",
                                                            "id" : "5720f24fa02b766c1cbf8d2d"
                                                        },
                                                        "name" : "execute",
                                                        "viewName" : "execute command",
                                                        "actionString" : "COMMANDS",
                                                        "createdAt" : "2016-04-27T17:09:35.564Z",
                                                        "updatedAt" : "2016-04-27T17:09:35.745Z",
                                                        "id" : "5720f24fa02b766c1cbf8d2e"
                                                    },
                                                    "params" : {
                                                        "COMMANDS" : {
                                                            "text" : "echo \"Hello World\""
                                                        }
                                                    },
                                                    "name" : "echo",
                                                    "timeout" : 0,
                                                    "timeunit" : "1",
                                                    "retries" : 0,
                                                    "mandatory" : false,
                                                    "suspend" : false,
                                                    "result" : "",
                                                    "lastUpdate" : "Wed Apr 27 2016 20:22:05 GMT+0300 (שעון קיץ ירושלים)"
                                                }
                                            ],
                                            "result" : "",
                                            "inside" : true
                                        }
                                    ],
                                    "result" : "",
                                    "filterAgent" : true,
                                    "filterAgentCode" : "filterAgent();"
                                }
                            ],
                            "code" : "function filterAgent(){\n  var os = getAttribute(currentAgent, \"os\");\n  if(os == \"Linux\"){\n    return true;\n  }\n  else{\n    return false;\n  }\n}"
                        },
                        "date" : "2016-04-27T17:29:22.632Z"
                    }, 
                    {
                        "log" : "---\n  name: \"simpleCli\"\n  version: 4\n  date: \"Wed Apr 27 2016 20:29:45 GMT+0300 (שעון קיץ ירושלים)\"\n  Linux-Agent2: \n    processes: \n      HelloWorld: \n        name: \"HelloWorld\"\n        actions: \n          echo: \n            name: \"echo\"\n            baseAgent: \n              name: \"Linux-Agent2\"\n              url: \"http://localhost:8091\"\n            result: \"\\\"Hello World\\\"\\r\\n\"\n            status: 0\n        result: \"\\\"Hello World\\\"\\r\\n\\n\"\n        status: 0\n    status: 0\n    result: \"\\\"Hello World\\\"\\r\\n\\n\\n\"\n  Linux-Agent1: \n    processes: \n      HelloWorld: \n        name: \"HelloWorld\"\n        actions: \n          echo: \n            name: \"echo\"\n            baseAgent: \n              name: \"Linux-Agent1\"\n              url: \"http://localhost:8090\"\n            result: \"\\\"Hello World\\\"\\r\\n\"\n            status: 0\n        result: \"\\\"Hello World\\\"\\r\\n\\n\"\n        status: 0\n    status: 0\n    result: \"\\\"Hello World\\\"\\r\\n\\n\\n\"\n  Windows-Agent3: \n    processes: {}\n    status: 0\n    result: \"\"\n",
                        "resObj" : {
                            "name" : "simpleCli",
                            "version" : 4,
                            "date" : "Wed Apr 27 2016 20:29:45 GMT+0300 (שעון קיץ ירושלים)",
                            "Linux-Agent2" : {
                                "processes" : {
                                    "HelloWorld" : {
                                        "name" : "HelloWorld",
                                        "actions" : {
                                            "echo" : {
                                                "name" : "echo",
                                                "baseAgent" : {
                                                    "name" : "Linux-Agent2",
                                                    "url" : "http://localhost:8091"
                                                },
                                                "result" : "\"Hello World\"\r\n",
                                                "status" : 0
                                            }
                                        },
                                        "result" : "\"Hello World\"\r\n\n",
                                        "status" : 0
                                    }
                                },
                                "status" : 0,
                                "result" : "\"Hello World\"\r\n\n\n"
                            },
                            "Linux-Agent1" : {
                                "processes" : {
                                    "HelloWorld" : {
                                        "name" : "HelloWorld",
                                        "actions" : {
                                            "echo" : {
                                                "name" : "echo",
                                                "baseAgent" : {
                                                    "name" : "Linux-Agent1",
                                                    "url" : "http://localhost:8090"
                                                },
                                                "result" : "\"Hello World\"\r\n",
                                                "status" : 0
                                            }
                                        },
                                        "result" : "\"Hello World\"\r\n\n",
                                        "status" : 0
                                    }
                                },
                                "status" : 0,
                                "result" : "\"Hello World\"\r\n\n\n"
                            },
                            "Windows-Agent3" : {
                                "processes" : {},
                                "status" : 0,
                                "result" : ""
                            }
                        },
                        "map" : {
                            "content" : "{\"nodes\":[{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":70,\"y\":250},\"angle\":0,\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\",\"embeds\":\"\",\"z\":1,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"Start\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/pmAgent.png\"}}},{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":286.203125,\"y\":319},\"angle\":0,\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\",\"embeds\":\"\",\"z\":2,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"CommandLine\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/CommandLine.png\"}}}],\"links\":[{\"type\":\"link\",\"source\":{\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\"},\"target\":{\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\"},\"router\":{\"name\":\"manhattan\"},\"connector\":{\"name\":\"rounded\"},\"id\":\"9f0c041e-6c05-410a-8b7a-e23138a9ffd5\",\"z\":4,\"attrs\":{\".connection\":{\"stroke\":\"#333333\",\"stroke-width\":3},\".marker-target\":{\"fill\":\"#333333\",\"d\":\"M 10 0 L 0 5 L 10 10 z\"}}}]}",
                            "nodes" : {
                                "Start" : {
                                    "id" : "fd1000fc-11cc-4261-9dcd-b2b9a53a3131",
                                    "name" : "Start",
                                    "type" : "startNode",
                                    "serverUrl" : "",
                                    "attributes" : {}
                                },
                                "CommandLine" : {
                                    "id" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                    "type" : "CommandLine",
                                    "name" : "CommandLine",
                                    "serverUrl" : "localhost:8100",
                                    "attributes" : {}
                                }
                            },
                            "links" : [ 
                                {
                                    "id" : "9f0c041e-6c05-410a-8b7a-e23138a9ffd5",
                                    "sourceId" : "fd1000fc-11cc-4261-9dcd-b2b9a53a3131",
                                    "targetId" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                    "processes" : [ 
                                        {
                                            "name" : "HelloWorld",
                                            "description" : "",
                                            "order" : 0,
                                            "default_execution" : false,
                                            "mandatory" : false,
                                            "actions" : [ 
                                                {
                                                    "server" : {
                                                        "type" : "CommandLine",
                                                        "name" : "CommandLine",
                                                        "id" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                                        "url" : "localhost:8100"
                                                    },
                                                    "method" : {
                                                        "params" : [ 
                                                            {
                                                                "name" : "COMMANDS",
                                                                "viewName" : "command",
                                                                "type" : "string",
                                                                "method" : "5720f24fa02b766c1cbf8d2e",
                                                                "options" : [],
                                                                "createdAt" : "2016-04-27T17:09:35.909Z",
                                                                "updatedAt" : "2016-04-27T17:09:35.909Z",
                                                                "id" : "5720f24fa02b766c1cbf8d3c"
                                                            }
                                                        ],
                                                        "agent" : {
                                                            "type" : "CommandLine",
                                                            "imgUrl" : "images/controls/CommandLine.png",
                                                            "createdAt" : "2016-04-27T17:09:35.253Z",
                                                            "updatedAt" : "2016-04-27T17:09:35.560Z",
                                                            "id" : "5720f24fa02b766c1cbf8d2d"
                                                        },
                                                        "name" : "execute",
                                                        "viewName" : "execute command",
                                                        "actionString" : "COMMANDS",
                                                        "createdAt" : "2016-04-27T17:09:35.564Z",
                                                        "updatedAt" : "2016-04-27T17:09:35.745Z",
                                                        "id" : "5720f24fa02b766c1cbf8d2e"
                                                    },
                                                    "params" : {
                                                        "COMMANDS" : {
                                                            "text" : "echo \"Hello World\""
                                                        }
                                                    },
                                                    "name" : "echo",
                                                    "timeout" : 0,
                                                    "timeunit" : "1",
                                                    "retries" : 0,
                                                    "mandatory" : false,
                                                    "suspend" : false,
                                                    "result" : "",
                                                    "lastUpdate" : "Wed Apr 27 2016 20:22:05 GMT+0300 (שעון קיץ ירושלים)"
                                                }
                                            ],
                                            "result" : "",
                                            "inside" : true
                                        }
                                    ],
                                    "result" : "",
                                    "filterAgent" : true,
                                    "filterAgentCode" : "filterAgent();"
                                }
                            ],
                            "code" : "function filterAgent(){\n  var os = getAttribute(currentAgent, \"os\");\n  if(os == \"Linux\"){\n    return true;\n  }\n  else{\n    return false;\n  }\n}"
                        },
                        "date" : "2016-04-27T17:29:46.400Z"
                    }, 
                    {
                        "log" : "---\n  name: \"simpleCli\"\n  version: 4\n  date: \"Wed Apr 27 2016 20:30:36 GMT+0300 (שעון קיץ ירושלים)\"\n",
                        "resObj" : {
                            "name" : "simpleCli",
                            "version" : 4,
                            "date" : "Wed Apr 27 2016 20:30:36 GMT+0300 (שעון קיץ ירושלים)"
                        },
                        "map" : {
                            "content" : "{\"nodes\":[{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":70,\"y\":250},\"angle\":0,\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\",\"embeds\":\"\",\"z\":1,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"Start\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/pmAgent.png\"}}},{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":286.203125,\"y\":319},\"angle\":0,\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\",\"embeds\":\"\",\"z\":2,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"CommandLine\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/CommandLine.png\"}}}],\"links\":[{\"type\":\"link\",\"source\":{\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\"},\"target\":{\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\"},\"router\":{\"name\":\"manhattan\"},\"connector\":{\"name\":\"rounded\"},\"id\":\"9f0c041e-6c05-410a-8b7a-e23138a9ffd5\",\"z\":4,\"attrs\":{\".connection\":{\"stroke\":\"#333333\",\"stroke-width\":3},\".marker-target\":{\"fill\":\"#333333\",\"d\":\"M 10 0 L 0 5 L 10 10 z\"}}}]}",
                            "nodes" : {
                                "Start" : {
                                    "id" : "fd1000fc-11cc-4261-9dcd-b2b9a53a3131",
                                    "name" : "Start",
                                    "type" : "startNode",
                                    "serverUrl" : "",
                                    "attributes" : {}
                                },
                                "CommandLine" : {
                                    "id" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                    "type" : "CommandLine",
                                    "name" : "CommandLine",
                                    "serverUrl" : "localhost:8100",
                                    "attributes" : {}
                                }
                            },
                            "links" : [ 
                                {
                                    "id" : "9f0c041e-6c05-410a-8b7a-e23138a9ffd5",
                                    "sourceId" : "fd1000fc-11cc-4261-9dcd-b2b9a53a3131",
                                    "targetId" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                    "processes" : [ 
                                        {
                                            "name" : "HelloWorld",
                                            "description" : "",
                                            "order" : 0,
                                            "default_execution" : false,
                                            "mandatory" : false,
                                            "actions" : [ 
                                                {
                                                    "server" : {
                                                        "type" : "CommandLine",
                                                        "name" : "CommandLine",
                                                        "id" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                                        "url" : "localhost:8100"
                                                    },
                                                    "method" : {
                                                        "params" : [ 
                                                            {
                                                                "name" : "COMMANDS",
                                                                "viewName" : "command",
                                                                "type" : "string",
                                                                "method" : "5720f24fa02b766c1cbf8d2e",
                                                                "options" : [],
                                                                "createdAt" : "2016-04-27T17:09:35.909Z",
                                                                "updatedAt" : "2016-04-27T17:09:35.909Z",
                                                                "id" : "5720f24fa02b766c1cbf8d3c"
                                                            }
                                                        ],
                                                        "agent" : {
                                                            "type" : "CommandLine",
                                                            "imgUrl" : "images/controls/CommandLine.png",
                                                            "createdAt" : "2016-04-27T17:09:35.253Z",
                                                            "updatedAt" : "2016-04-27T17:09:35.560Z",
                                                            "id" : "5720f24fa02b766c1cbf8d2d"
                                                        },
                                                        "name" : "execute",
                                                        "viewName" : "execute command",
                                                        "actionString" : "COMMANDS",
                                                        "createdAt" : "2016-04-27T17:09:35.564Z",
                                                        "updatedAt" : "2016-04-27T17:09:35.745Z",
                                                        "id" : "5720f24fa02b766c1cbf8d2e"
                                                    },
                                                    "params" : {
                                                        "COMMANDS" : {
                                                            "text" : "echo \"Hello World\""
                                                        }
                                                    },
                                                    "name" : "echo",
                                                    "timeout" : 0,
                                                    "timeunit" : "1",
                                                    "retries" : 0,
                                                    "mandatory" : false,
                                                    "suspend" : false,
                                                    "result" : "",
                                                    "lastUpdate" : "Wed Apr 27 2016 20:22:05 GMT+0300 (שעון קיץ ירושלים)"
                                                }
                                            ],
                                            "result" : "",
                                            "inside" : true
                                        }
                                    ],
                                    "result" : "",
                                    "filterAgent" : true,
                                    "filterAgentCode" : "filterAgent();"
                                }
                            ],
                            "code" : "function filterAgent(){\n  var os = getAttribute(currentAgent, \"os\");\n  if(os == \"Linux\"){\n    return true;\n  }\n  else{\n    return false;\n  }\n}"
                        },
                        "date" : "2016-04-27T17:30:37.056Z"
                    }, 
                    {
                        "log" : "---\n  name: \"simpleCli\"\n  version: 4\n  date: \"Wed Apr 27 2016 20:30:40 GMT+0300 (שעון קיץ ירושלים)\"\n",
                        "resObj" : {
                            "name" : "simpleCli",
                            "version" : 4,
                            "date" : "Wed Apr 27 2016 20:30:40 GMT+0300 (שעון קיץ ירושלים)"
                        },
                        "map" : {
                            "content" : "{\"nodes\":[{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":70,\"y\":250},\"angle\":0,\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\",\"embeds\":\"\",\"z\":1,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"Start\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/pmAgent.png\"}}},{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":286.203125,\"y\":319},\"angle\":0,\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\",\"embeds\":\"\",\"z\":2,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"CommandLine\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/CommandLine.png\"}}}],\"links\":[{\"type\":\"link\",\"source\":{\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\"},\"target\":{\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\"},\"router\":{\"name\":\"manhattan\"},\"connector\":{\"name\":\"rounded\"},\"id\":\"9f0c041e-6c05-410a-8b7a-e23138a9ffd5\",\"z\":4,\"attrs\":{\".connection\":{\"stroke\":\"#333333\",\"stroke-width\":3},\".marker-target\":{\"fill\":\"#333333\",\"d\":\"M 10 0 L 0 5 L 10 10 z\"}}}]}",
                            "nodes" : {
                                "Start" : {
                                    "id" : "fd1000fc-11cc-4261-9dcd-b2b9a53a3131",
                                    "name" : "Start",
                                    "type" : "startNode",
                                    "serverUrl" : "",
                                    "attributes" : {}
                                },
                                "CommandLine" : {
                                    "id" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                    "type" : "CommandLine",
                                    "name" : "CommandLine",
                                    "serverUrl" : "localhost:8100",
                                    "attributes" : {}
                                }
                            },
                            "links" : [ 
                                {
                                    "id" : "9f0c041e-6c05-410a-8b7a-e23138a9ffd5",
                                    "sourceId" : "fd1000fc-11cc-4261-9dcd-b2b9a53a3131",
                                    "targetId" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                    "processes" : [ 
                                        {
                                            "name" : "HelloWorld",
                                            "description" : "",
                                            "order" : 0,
                                            "default_execution" : false,
                                            "mandatory" : false,
                                            "actions" : [ 
                                                {
                                                    "server" : {
                                                        "type" : "CommandLine",
                                                        "name" : "CommandLine",
                                                        "id" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                                        "url" : "localhost:8100"
                                                    },
                                                    "method" : {
                                                        "params" : [ 
                                                            {
                                                                "name" : "COMMANDS",
                                                                "viewName" : "command",
                                                                "type" : "string",
                                                                "method" : "5720f24fa02b766c1cbf8d2e",
                                                                "options" : [],
                                                                "createdAt" : "2016-04-27T17:09:35.909Z",
                                                                "updatedAt" : "2016-04-27T17:09:35.909Z",
                                                                "id" : "5720f24fa02b766c1cbf8d3c"
                                                            }
                                                        ],
                                                        "agent" : {
                                                            "type" : "CommandLine",
                                                            "imgUrl" : "images/controls/CommandLine.png",
                                                            "createdAt" : "2016-04-27T17:09:35.253Z",
                                                            "updatedAt" : "2016-04-27T17:09:35.560Z",
                                                            "id" : "5720f24fa02b766c1cbf8d2d"
                                                        },
                                                        "name" : "execute",
                                                        "viewName" : "execute command",
                                                        "actionString" : "COMMANDS",
                                                        "createdAt" : "2016-04-27T17:09:35.564Z",
                                                        "updatedAt" : "2016-04-27T17:09:35.745Z",
                                                        "id" : "5720f24fa02b766c1cbf8d2e"
                                                    },
                                                    "params" : {
                                                        "COMMANDS" : {
                                                            "text" : "echo \"Hello World\""
                                                        }
                                                    },
                                                    "name" : "echo",
                                                    "timeout" : 0,
                                                    "timeunit" : "1",
                                                    "retries" : 0,
                                                    "mandatory" : false,
                                                    "suspend" : false,
                                                    "result" : "",
                                                    "lastUpdate" : "Wed Apr 27 2016 20:22:05 GMT+0300 (שעון קיץ ירושלים)"
                                                }
                                            ],
                                            "result" : "",
                                            "inside" : true
                                        }
                                    ],
                                    "result" : "",
                                    "filterAgent" : true,
                                    "filterAgentCode" : "filterAgent();"
                                }
                            ],
                            "code" : "function filterAgent(){\n  var os = getAttribute(currentAgent, \"os\");\n  if(os == \"Linux\"){\n    return true;\n  }\n  else{\n    return false;\n  }\n}"
                        },
                        "date" : "2016-04-27T17:30:40.659Z"
                    }, 
                    {
                        "log" : "---\n  name: \"simpleCli\"\n  version: 4\n  date: \"Wed Apr 27 2016 20:30:58 GMT+0300 (שעון קיץ ירושלים)\"\n  Linux-Agent2: \n    processes: \n      HelloWorld: \n        name: \"HelloWorld\"\n        actions: \n          echo: \n            name: \"echo\"\n            baseAgent: \n              name: \"Linux-Agent2\"\n              url: \"http://localhost:8091\"\n            result: \"\\\"Hello World\\\"\\r\\n\"\n            status: 0\n        result: \"\\\"Hello World\\\"\\r\\n\\n\"\n        status: 0\n    status: 0\n    result: \"\\\"Hello World\\\"\\r\\n\\n\\n\"\n  Linux-Agent1: \n    processes: \n      HelloWorld: \n        name: \"HelloWorld\"\n        actions: \n          echo: \n            name: \"echo\"\n            baseAgent: \n              name: \"Linux-Agent1\"\n              url: \"http://localhost:8090\"\n            result: \"\\\"Hello World\\\"\\r\\n\"\n            status: 0\n        result: \"\\\"Hello World\\\"\\r\\n\\n\"\n        status: 0\n    status: 0\n    result: \"\\\"Hello World\\\"\\r\\n\\n\\n\"\n  Windows-Agent3: \n    processes: {}\n    status: 0\n    result: \"\"\n",
                        "resObj" : {
                            "name" : "simpleCli",
                            "version" : 4,
                            "date" : "Wed Apr 27 2016 20:30:58 GMT+0300 (שעון קיץ ירושלים)",
                            "Linux-Agent2" : {
                                "processes" : {
                                    "HelloWorld" : {
                                        "name" : "HelloWorld",
                                        "actions" : {
                                            "echo" : {
                                                "name" : "echo",
                                                "baseAgent" : {
                                                    "name" : "Linux-Agent2",
                                                    "url" : "http://localhost:8091"
                                                },
                                                "result" : "\"Hello World\"\r\n",
                                                "status" : 0
                                            }
                                        },
                                        "result" : "\"Hello World\"\r\n\n",
                                        "status" : 0
                                    }
                                },
                                "status" : 0,
                                "result" : "\"Hello World\"\r\n\n\n"
                            },
                            "Linux-Agent1" : {
                                "processes" : {
                                    "HelloWorld" : {
                                        "name" : "HelloWorld",
                                        "actions" : {
                                            "echo" : {
                                                "name" : "echo",
                                                "baseAgent" : {
                                                    "name" : "Linux-Agent1",
                                                    "url" : "http://localhost:8090"
                                                },
                                                "result" : "\"Hello World\"\r\n",
                                                "status" : 0
                                            }
                                        },
                                        "result" : "\"Hello World\"\r\n\n",
                                        "status" : 0
                                    }
                                },
                                "status" : 0,
                                "result" : "\"Hello World\"\r\n\n\n"
                            },
                            "Windows-Agent3" : {
                                "processes" : {},
                                "status" : 0,
                                "result" : ""
                            }
                        },
                        "map" : {
                            "content" : "{\"nodes\":[{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":70,\"y\":250},\"angle\":0,\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\",\"embeds\":\"\",\"z\":1,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"Start\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/pmAgent.png\"}}},{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":286.203125,\"y\":319},\"angle\":0,\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\",\"embeds\":\"\",\"z\":2,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"CommandLine\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/CommandLine.png\"}}}],\"links\":[{\"type\":\"link\",\"source\":{\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\"},\"target\":{\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\"},\"router\":{\"name\":\"manhattan\"},\"connector\":{\"name\":\"rounded\"},\"id\":\"9f0c041e-6c05-410a-8b7a-e23138a9ffd5\",\"z\":4,\"attrs\":{\".connection\":{\"stroke\":\"#333333\",\"stroke-width\":3},\".marker-target\":{\"fill\":\"#333333\",\"d\":\"M 10 0 L 0 5 L 10 10 z\"}}}]}",
                            "nodes" : {
                                "Start" : {
                                    "id" : "fd1000fc-11cc-4261-9dcd-b2b9a53a3131",
                                    "name" : "Start",
                                    "type" : "startNode",
                                    "serverUrl" : "",
                                    "attributes" : {}
                                },
                                "CommandLine" : {
                                    "id" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                    "type" : "CommandLine",
                                    "name" : "CommandLine",
                                    "serverUrl" : "localhost:8100",
                                    "attributes" : {}
                                }
                            },
                            "links" : [ 
                                {
                                    "id" : "9f0c041e-6c05-410a-8b7a-e23138a9ffd5",
                                    "sourceId" : "fd1000fc-11cc-4261-9dcd-b2b9a53a3131",
                                    "targetId" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                    "processes" : [ 
                                        {
                                            "name" : "HelloWorld",
                                            "description" : "",
                                            "order" : 0,
                                            "default_execution" : false,
                                            "mandatory" : false,
                                            "actions" : [ 
                                                {
                                                    "server" : {
                                                        "type" : "CommandLine",
                                                        "name" : "CommandLine",
                                                        "id" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                                        "url" : "localhost:8100"
                                                    },
                                                    "method" : {
                                                        "params" : [ 
                                                            {
                                                                "name" : "COMMANDS",
                                                                "viewName" : "command",
                                                                "type" : "string",
                                                                "method" : "5720f24fa02b766c1cbf8d2e",
                                                                "options" : [],
                                                                "createdAt" : "2016-04-27T17:09:35.909Z",
                                                                "updatedAt" : "2016-04-27T17:09:35.909Z",
                                                                "id" : "5720f24fa02b766c1cbf8d3c"
                                                            }
                                                        ],
                                                        "agent" : {
                                                            "type" : "CommandLine",
                                                            "imgUrl" : "images/controls/CommandLine.png",
                                                            "createdAt" : "2016-04-27T17:09:35.253Z",
                                                            "updatedAt" : "2016-04-27T17:09:35.560Z",
                                                            "id" : "5720f24fa02b766c1cbf8d2d"
                                                        },
                                                        "name" : "execute",
                                                        "viewName" : "execute command",
                                                        "actionString" : "COMMANDS",
                                                        "createdAt" : "2016-04-27T17:09:35.564Z",
                                                        "updatedAt" : "2016-04-27T17:09:35.745Z",
                                                        "id" : "5720f24fa02b766c1cbf8d2e"
                                                    },
                                                    "params" : {
                                                        "COMMANDS" : {
                                                            "text" : "echo \"Hello World\""
                                                        }
                                                    },
                                                    "name" : "echo",
                                                    "timeout" : 0,
                                                    "timeunit" : "1",
                                                    "retries" : 0,
                                                    "mandatory" : false,
                                                    "suspend" : false,
                                                    "result" : "",
                                                    "lastUpdate" : "Wed Apr 27 2016 20:22:05 GMT+0300 (שעון קיץ ירושלים)"
                                                }
                                            ],
                                            "result" : "",
                                            "inside" : true
                                        }
                                    ],
                                    "result" : "",
                                    "filterAgent" : true,
                                    "filterAgentCode" : "filterAgent();"
                                }
                            ],
                            "code" : "function filterAgent(){\n  var os = getAttribute(currentAgent, \"os\");\n  if(os == \"Linux\"){\n    return true;\n  }\n  else{\n    return false;\n  }\n}"
                        },
                        "date" : "2016-04-27T17:30:58.956Z"
                    }
                ],
                "status" : 2
            }, 
            {
                "date" : "2016-04-27T17:33:26.805Z"
                "patches" : [ 
                    {
                        "op" : "replace",
                        "path" : "/code",
                        "value" : ""
                    }
                ],
                "executions" : []
            }, 
            {
                "date" : "2016-04-27T17:33:39.688Z"
                "patches" : [ 
                    {
                        "op" : "replace",
                        "path" : "/links/0/filterAgent",
                        "value" : false
                    }, 
                    {
                        "op" : "replace",
                        "path" : "/content",
                        "value" : "{\"nodes\":[{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":70,\"y\":250},\"angle\":0,\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\",\"embeds\":\"\",\"z\":1,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"Start\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/pmAgent.png\"}}},{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":286.203125,\"y\":319},\"angle\":0,\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\",\"embeds\":\"\",\"z\":2,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"CommandLine\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/CommandLine.png\"}}}],\"links\":[{\"type\":\"link\",\"source\":{\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\"},\"target\":{\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\"},\"router\":{\"name\":\"manhattan\"},\"connector\":{\"name\":\"rounded\"},\"id\":\"9f0c041e-6c05-410a-8b7a-e23138a9ffd5\",\"z\":4,\"vertices\":[{\"x\":220,\"y\":340},{\"x\":220,\"y\":340}],\"attrs\":{\".connection\":{\"stroke\":\"#333333\",\"stroke-width\":3},\".marker-target\":{\"fill\":\"#333333\",\"d\":\"M 10 0 L 0 5 L 10 10 z\"}}}]}"
                    }
                ],
                "executions" : [ 
                    {
                        "log" : "---\n  name: \"simpleCli\"\n  version: 6\n  date: \"Wed Apr 27 2016 20:33:40 GMT+0300 (שעון קיץ ירושלים)\"\n  Linux-Agent2: \n    processes: \n      HelloWorld: \n        name: \"HelloWorld\"\n        actions: \n          echo: \n            name: \"echo\"\n            baseAgent: \n              name: \"Linux-Agent2\"\n              url: \"http://localhost:8091\"\n            result: \"\\\"Hello World\\\"\\r\\n\"\n            status: 0\n        result: \"\\\"Hello World\\\"\\r\\n\\n\"\n        status: 0\n    status: 0\n    result: \"\\\"Hello World\\\"\\r\\n\\n\\n\"\n  Linux-Agent1: \n    processes: \n      HelloWorld: \n        name: \"HelloWorld\"\n        actions: \n          echo: \n            name: \"echo\"\n            baseAgent: \n              name: \"Linux-Agent1\"\n              url: \"http://localhost:8090\"\n            result: \"\\\"Hello World\\\"\\r\\n\"\n            status: 0\n        result: \"\\\"Hello World\\\"\\r\\n\\n\"\n        status: 0\n    status: 0\n    result: \"\\\"Hello World\\\"\\r\\n\\n\\n\"\n  Windows-Agent3: \n    processes: \n      HelloWorld: \n        name: \"HelloWorld\"\n        actions: \n          echo: \n            name: \"echo\"\n            baseAgent: \n              name: \"Windows-Agent3\"\n              url: \"http://localhost:8092\"\n            result: \"\\\"Hello World\\\"\\r\\n\"\n            status: 0\n        result: \"\\\"Hello World\\\"\\r\\n\\n\"\n        status: 0\n    status: 0\n    result: \"\\\"Hello World\\\"\\r\\n\\n\\n\"\n",
                        "resObj" : {
                            "name" : "simpleCli",
                            "version" : 6,
                            "date" : "Wed Apr 27 2016 20:33:40 GMT+0300 (שעון קיץ ירושלים)",
                            "Linux-Agent2" : {
                                "processes" : {
                                    "HelloWorld" : {
                                        "name" : "HelloWorld",
                                        "actions" : {
                                            "echo" : {
                                                "name" : "echo",
                                                "baseAgent" : {
                                                    "name" : "Linux-Agent2",
                                                    "url" : "http://localhost:8091"
                                                },
                                                "result" : "\"Hello World\"\r\n",
                                                "status" : 0
                                            }
                                        },
                                        "result" : "\"Hello World\"\r\n\n",
                                        "status" : 0
                                    }
                                },
                                "status" : 0,
                                "result" : "\"Hello World\"\r\n\n\n"
                            },
                            "Linux-Agent1" : {
                                "processes" : {
                                    "HelloWorld" : {
                                        "name" : "HelloWorld",
                                        "actions" : {
                                            "echo" : {
                                                "name" : "echo",
                                                "baseAgent" : {
                                                    "name" : "Linux-Agent1",
                                                    "url" : "http://localhost:8090"
                                                },
                                                "result" : "\"Hello World\"\r\n",
                                                "status" : 0
                                            }
                                        },
                                        "result" : "\"Hello World\"\r\n\n",
                                        "status" : 0
                                    }
                                },
                                "status" : 0,
                                "result" : "\"Hello World\"\r\n\n\n"
                            },
                            "Windows-Agent3" : {
                                "processes" : {
                                    "HelloWorld" : {
                                        "name" : "HelloWorld",
                                        "actions" : {
                                            "echo" : {
                                                "name" : "echo",
                                                "baseAgent" : {
                                                    "name" : "Windows-Agent3",
                                                    "url" : "http://localhost:8092"
                                                },
                                                "result" : "\"Hello World\"\r\n",
                                                "status" : 0
                                            }
                                        },
                                        "result" : "\"Hello World\"\r\n\n",
                                        "status" : 0
                                    }
                                },
                                "status" : 0,
                                "result" : "\"Hello World\"\r\n\n\n"
                            }
                        },
                        "map" : {
                            "content" : "{\"nodes\":[{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":70,\"y\":250},\"angle\":0,\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\",\"embeds\":\"\",\"z\":1,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"Start\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/pmAgent.png\"}}},{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":286.203125,\"y\":319},\"angle\":0,\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\",\"embeds\":\"\",\"z\":2,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"CommandLine\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/CommandLine.png\"}}}],\"links\":[{\"type\":\"link\",\"source\":{\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\"},\"target\":{\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\"},\"router\":{\"name\":\"manhattan\"},\"connector\":{\"name\":\"rounded\"},\"id\":\"9f0c041e-6c05-410a-8b7a-e23138a9ffd5\",\"z\":4,\"vertices\":[{\"x\":220,\"y\":340},{\"x\":220,\"y\":340}],\"attrs\":{\".connection\":{\"stroke\":\"#333333\",\"stroke-width\":3},\".marker-target\":{\"fill\":\"#333333\",\"d\":\"M 10 0 L 0 5 L 10 10 z\"}}}]}",
                            "nodes" : {
                                "Start" : {
                                    "id" : "fd1000fc-11cc-4261-9dcd-b2b9a53a3131",
                                    "name" : "Start",
                                    "type" : "startNode",
                                    "serverUrl" : "",
                                    "attributes" : {}
                                },
                                "CommandLine" : {
                                    "id" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                    "type" : "CommandLine",
                                    "name" : "CommandLine",
                                    "serverUrl" : "localhost:8100",
                                    "attributes" : {}
                                }
                            },
                            "links" : [ 
                                {
                                    "id" : "9f0c041e-6c05-410a-8b7a-e23138a9ffd5",
                                    "sourceId" : "fd1000fc-11cc-4261-9dcd-b2b9a53a3131",
                                    "targetId" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                    "processes" : [ 
                                        {
                                            "name" : "HelloWorld",
                                            "description" : "",
                                            "order" : 0,
                                            "default_execution" : false,
                                            "mandatory" : false,
                                            "actions" : [ 
                                                {
                                                    "server" : {
                                                        "type" : "CommandLine",
                                                        "name" : "CommandLine",
                                                        "id" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                                        "url" : "localhost:8100"
                                                    },
                                                    "method" : {
                                                        "params" : [ 
                                                            {
                                                                "name" : "COMMANDS",
                                                                "viewName" : "command",
                                                                "type" : "string",
                                                                "method" : "5720f24fa02b766c1cbf8d2e",
                                                                "options" : [],
                                                                "createdAt" : "2016-04-27T17:09:35.909Z",
                                                                "updatedAt" : "2016-04-27T17:09:35.909Z",
                                                                "id" : "5720f24fa02b766c1cbf8d3c"
                                                            }
                                                        ],
                                                        "agent" : {
                                                            "type" : "CommandLine",
                                                            "imgUrl" : "images/controls/CommandLine.png",
                                                            "createdAt" : "2016-04-27T17:09:35.253Z",
                                                            "updatedAt" : "2016-04-27T17:09:35.560Z",
                                                            "id" : "5720f24fa02b766c1cbf8d2d"
                                                        },
                                                        "name" : "execute",
                                                        "viewName" : "execute command",
                                                        "actionString" : "COMMANDS",
                                                        "createdAt" : "2016-04-27T17:09:35.564Z",
                                                        "updatedAt" : "2016-04-27T17:09:35.745Z",
                                                        "id" : "5720f24fa02b766c1cbf8d2e"
                                                    },
                                                    "params" : {
                                                        "COMMANDS" : {
                                                            "text" : "echo \"Hello World\""
                                                        }
                                                    },
                                                    "name" : "echo",
                                                    "timeout" : 0,
                                                    "timeunit" : "1",
                                                    "retries" : 0,
                                                    "mandatory" : false,
                                                    "suspend" : false,
                                                    "result" : "",
                                                    "lastUpdate" : "Wed Apr 27 2016 20:22:05 GMT+0300 (שעון קיץ ירושלים)"
                                                }
                                            ],
                                            "result" : "",
                                            "inside" : true
                                        }
                                    ],
                                    "result" : "",
                                    "filterAgent" : false,
                                    "filterAgentCode" : "filterAgent();"
                                }
                            ],
                            "code" : ""
                        },
                        "date" : "2016-04-27T17:33:40.828Z"
                    }, 
                    {
                        "log" : "---\n  name: \"simpleCli\"\n  version: 6\n  date: \"Wed Apr 27 2016 22:15:56 GMT+0300 (שעון קיץ ירושלים)\"\n  Linux-Agent1: \n    processes: \n      HelloWorld: \n        name: \"HelloWorld\"\n        actions: \n          echo: \n            name: \"echo\"\n            baseAgent: \n              name: \"Linux-Agent1\"\n              url: \"http://localhost:8090\"\n            result: \"\\\"Hello World\\\"\\r\\n\"\n            status: 0\n        result: \"\\\"Hello World\\\"\\r\\n\\n\"\n        status: 0\n    status: 0\n    result: \"\\\"Hello World\\\"\\r\\n\\n\\n\"\n",
                        "resObj" : {
                            "name" : "simpleCli",
                            "version" : 6,
                            "date" : "Wed Apr 27 2016 22:15:56 GMT+0300 (שעון קיץ ירושלים)",
                            "Linux-Agent1" : {
                                "processes" : {
                                    "HelloWorld" : {
                                        "name" : "HelloWorld",
                                        "actions" : {
                                            "echo" : {
                                                "name" : "echo",
                                                "baseAgent" : {
                                                    "name" : "Linux-Agent1",
                                                    "url" : "http://localhost:8090"
                                                },
                                                "result" : "\"Hello World\"\r\n",
                                                "status" : 0
                                            }
                                        },
                                        "result" : "\"Hello World\"\r\n\n",
                                        "status" : 0
                                    }
                                },
                                "status" : 0,
                                "result" : "\"Hello World\"\r\n\n\n"
                            }
                        },
                        "map" : {
                            "content" : "{\"nodes\":[{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":70,\"y\":250},\"angle\":0,\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\",\"embeds\":\"\",\"z\":1,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"Start\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/pmAgent.png\"}}},{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":286.203125,\"y\":319},\"angle\":0,\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\",\"embeds\":\"\",\"z\":2,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"CommandLine\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/CommandLine.png\"}}}],\"links\":[{\"type\":\"link\",\"source\":{\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\"},\"target\":{\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\"},\"router\":{\"name\":\"manhattan\"},\"connector\":{\"name\":\"rounded\"},\"id\":\"9f0c041e-6c05-410a-8b7a-e23138a9ffd5\",\"z\":4,\"vertices\":[{\"x\":220,\"y\":340},{\"x\":220,\"y\":340}],\"attrs\":{\".connection\":{\"stroke\":\"#333333\",\"stroke-width\":3},\".marker-target\":{\"fill\":\"#333333\",\"d\":\"M 10 0 L 0 5 L 10 10 z\"}}}]}",
                            "nodes" : {
                                "Start" : {
                                    "id" : "fd1000fc-11cc-4261-9dcd-b2b9a53a3131",
                                    "name" : "Start",
                                    "type" : "startNode",
                                    "serverUrl" : "",
                                    "attributes" : {}
                                },
                                "CommandLine" : {
                                    "id" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                    "type" : "CommandLine",
                                    "name" : "CommandLine",
                                    "serverUrl" : "localhost:8100",
                                    "attributes" : {}
                                }
                            },
                            "links" : [ 
                                {
                                    "id" : "9f0c041e-6c05-410a-8b7a-e23138a9ffd5",
                                    "sourceId" : "fd1000fc-11cc-4261-9dcd-b2b9a53a3131",
                                    "targetId" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                    "processes" : [ 
                                        {
                                            "name" : "HelloWorld",
                                            "description" : "",
                                            "order" : 0,
                                            "default_execution" : false,
                                            "mandatory" : false,
                                            "actions" : [ 
                                                {
                                                    "server" : {
                                                        "type" : "CommandLine",
                                                        "name" : "CommandLine",
                                                        "id" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                                        "url" : "localhost:8100"
                                                    },
                                                    "method" : {
                                                        "params" : [ 
                                                            {
                                                                "name" : "COMMANDS",
                                                                "viewName" : "command",
                                                                "type" : "string",
                                                                "method" : "5720f24fa02b766c1cbf8d2e",
                                                                "options" : [],
                                                                "createdAt" : "2016-04-27T17:09:35.909Z",
                                                                "updatedAt" : "2016-04-27T17:09:35.909Z",
                                                                "id" : "5720f24fa02b766c1cbf8d3c"
                                                            }
                                                        ],
                                                        "agent" : {
                                                            "type" : "CommandLine",
                                                            "imgUrl" : "images/controls/CommandLine.png",
                                                            "createdAt" : "2016-04-27T17:09:35.253Z",
                                                            "updatedAt" : "2016-04-27T17:09:35.560Z",
                                                            "id" : "5720f24fa02b766c1cbf8d2d"
                                                        },
                                                        "name" : "execute",
                                                        "viewName" : "execute command",
                                                        "actionString" : "COMMANDS",
                                                        "createdAt" : "2016-04-27T17:09:35.564Z",
                                                        "updatedAt" : "2016-04-27T17:09:35.745Z",
                                                        "id" : "5720f24fa02b766c1cbf8d2e"
                                                    },
                                                    "params" : {
                                                        "COMMANDS" : {
                                                            "text" : "echo \"Hello World\""
                                                        }
                                                    },
                                                    "name" : "echo",
                                                    "timeout" : 0,
                                                    "timeunit" : "1",
                                                    "retries" : 0,
                                                    "mandatory" : false,
                                                    "suspend" : false,
                                                    "result" : "",
                                                    "lastUpdate" : "Wed Apr 27 2016 20:22:05 GMT+0300 (שעון קיץ ירושלים)"
                                                }
                                            ],
                                            "result" : "",
                                            "inside" : true
                                        }
                                    ],
                                    "result" : "",
                                    "filterAgent" : false,
                                    "filterAgentCode" : "filterAgent();"
                                }
                            ],
                            "code" : ""
                        },
                        "date" : "2016-04-27T19:15:56.755Z"
                    }
                ],
                "status" : 2
            }, 
            {
                "date" : "2016-04-27T19:17:03.671Z"
                "patches" : [ 
                    {
                        "op" : "replace",
                        "path" : "/content",
                        "value" : "{\"nodes\":[{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":50,\"y\":170},\"angle\":0,\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\",\"embeds\":\"\",\"z\":1,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"Start\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/pmAgent.png\"}}},{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":350,\"y\":310},\"angle\":0,\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\",\"embeds\":\"\",\"z\":2,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"CommandLine\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/CommandLine.png\"}}}],\"links\":[{\"type\":\"link\",\"source\":{\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\"},\"target\":{\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\"},\"router\":{\"name\":\"manhattan\"},\"connector\":{\"name\":\"rounded\"},\"id\":\"9f0c041e-6c05-410a-8b7a-e23138a9ffd5\",\"z\":4,\"vertices\":[{\"x\":220,\"y\":340},{\"x\":220,\"y\":340}],\"attrs\":{\".connection\":{\"stroke\":\"#333333\",\"stroke-width\":3},\".marker-target\":{\"fill\":\"#333333\",\"d\":\"M 10 0 L 0 5 L 10 10 z\"}}}]}"
                    }
                ],
                "executions" : [ 
                    {
                        "log" : "---\n  name: \"simpleCli\"\n  version: 7\n  date: \"Wed Apr 27 2016 22:17:03 GMT+0300 (שעון קיץ ירושלים)\"\n  Linux-Agent1: \n    processes: \n      HelloWorld: \n        name: \"HelloWorld\"\n        actions: \n          echo: \n            name: \"echo\"\n            baseAgent: \n              name: \"Linux-Agent1\"\n              url: \"http://localhost:8090\"\n            result: \"\\\"Hello World\\\"\\r\\n\"\n            status: 0\n        result: \"\\\"Hello World\\\"\\r\\n\\n\"\n        status: 0\n    status: 0\n    result: \"\\\"Hello World\\\"\\r\\n\\n\\n\"\n",
                        "resObj" : {
                            "name" : "simpleCli",
                            "version" : 7,
                            "date" : "Wed Apr 27 2016 22:17:03 GMT+0300 (שעון קיץ ירושלים)",
                            "Linux-Agent1" : {
                                "processes" : {
                                    "HelloWorld" : {
                                        "name" : "HelloWorld",
                                        "actions" : {
                                            "echo" : {
                                                "name" : "echo",
                                                "baseAgent" : {
                                                    "name" : "Linux-Agent1",
                                                    "url" : "http://localhost:8090"
                                                },
                                                "result" : "\"Hello World\"\r\n",
                                                "status" : 0
                                            }
                                        },
                                        "result" : "\"Hello World\"\r\n\n",
                                        "status" : 0
                                    }
                                },
                                "status" : 0,
                                "result" : "\"Hello World\"\r\n\n\n"
                            }
                        },
                        "map" : {
                            "content" : "{\"nodes\":[{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":50,\"y\":170},\"angle\":0,\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\",\"embeds\":\"\",\"z\":1,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"Start\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/pmAgent.png\"}}},{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":350,\"y\":310},\"angle\":0,\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\",\"embeds\":\"\",\"z\":2,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"CommandLine\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/CommandLine.png\"}}}],\"links\":[{\"type\":\"link\",\"source\":{\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\"},\"target\":{\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\"},\"router\":{\"name\":\"manhattan\"},\"connector\":{\"name\":\"rounded\"},\"id\":\"9f0c041e-6c05-410a-8b7a-e23138a9ffd5\",\"z\":4,\"vertices\":[{\"x\":220,\"y\":340},{\"x\":220,\"y\":340}],\"attrs\":{\".connection\":{\"stroke\":\"#333333\",\"stroke-width\":3},\".marker-target\":{\"fill\":\"#333333\",\"d\":\"M 10 0 L 0 5 L 10 10 z\"}}}]}",
                            "nodes" : {
                                "Start" : {
                                    "id" : "fd1000fc-11cc-4261-9dcd-b2b9a53a3131",
                                    "name" : "Start",
                                    "type" : "startNode",
                                    "serverUrl" : "",
                                    "attributes" : {}
                                },
                                "CommandLine" : {
                                    "id" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                    "type" : "CommandLine",
                                    "name" : "CommandLine",
                                    "serverUrl" : "localhost:8100",
                                    "attributes" : {}
                                }
                            },
                            "links" : [ 
                                {
                                    "id" : "9f0c041e-6c05-410a-8b7a-e23138a9ffd5",
                                    "sourceId" : "fd1000fc-11cc-4261-9dcd-b2b9a53a3131",
                                    "targetId" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                    "processes" : [ 
                                        {
                                            "name" : "HelloWorld",
                                            "description" : "",
                                            "order" : 0,
                                            "default_execution" : false,
                                            "mandatory" : false,
                                            "actions" : [ 
                                                {
                                                    "server" : {
                                                        "type" : "CommandLine",
                                                        "name" : "CommandLine",
                                                        "id" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                                        "url" : "localhost:8100"
                                                    },
                                                    "method" : {
                                                        "params" : [ 
                                                            {
                                                                "name" : "COMMANDS",
                                                                "viewName" : "command",
                                                                "type" : "string",
                                                                "method" : "5720f24fa02b766c1cbf8d2e",
                                                                "options" : [],
                                                                "createdAt" : "2016-04-27T17:09:35.909Z",
                                                                "updatedAt" : "2016-04-27T17:09:35.909Z",
                                                                "id" : "5720f24fa02b766c1cbf8d3c"
                                                            }
                                                        ],
                                                        "agent" : {
                                                            "type" : "CommandLine",
                                                            "imgUrl" : "images/controls/CommandLine.png",
                                                            "createdAt" : "2016-04-27T17:09:35.253Z",
                                                            "updatedAt" : "2016-04-27T17:09:35.560Z",
                                                            "id" : "5720f24fa02b766c1cbf8d2d"
                                                        },
                                                        "name" : "execute",
                                                        "viewName" : "execute command",
                                                        "actionString" : "COMMANDS",
                                                        "createdAt" : "2016-04-27T17:09:35.564Z",
                                                        "updatedAt" : "2016-04-27T17:09:35.745Z",
                                                        "id" : "5720f24fa02b766c1cbf8d2e"
                                                    },
                                                    "params" : {
                                                        "COMMANDS" : {
                                                            "text" : "echo \"Hello World\""
                                                        }
                                                    },
                                                    "name" : "echo",
                                                    "timeout" : 0,
                                                    "timeunit" : "1",
                                                    "retries" : 0,
                                                    "mandatory" : false,
                                                    "suspend" : false,
                                                    "result" : "",
                                                    "lastUpdate" : "Wed Apr 27 2016 20:22:05 GMT+0300 (שעון קיץ ירושלים)"
                                                }
                                            ],
                                            "result" : "",
                                            "inside" : true
                                        }
                                    ],
                                    "result" : "",
                                    "filterAgent" : false,
                                    "filterAgentCode" : "filterAgent();"
                                }
                            ],
                            "code" : ""
                        },
                        "date" : "2016-04-27T19:17:04.289Z"
                    }
                ],
                "status" : 2
            }, 
            {
                "date" : "2016-04-27T19:19:45.300Z"
                "patches" : [ 
                    {
                        "op" : "replace",
                        "path" : "/links/0/processes/0/actions/0/lastUpdate",
                        "value" : "Wed Apr 27 2016 22:18:07 GMT+0300 (שעון קיץ ירושלים)"
                    }, 
                    {
                        "op" : "replace",
                        "path" : "/content",
                        "value" : "{\"nodes\":[{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":50,\"y\":170},\"angle\":0,\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\",\"embeds\":\"\",\"z\":1,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"Start\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/pmAgent.png\"}}},{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":350,\"y\":310},\"angle\":0,\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\",\"embeds\":\"\",\"z\":2,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"CommandLine\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/CommandLine.png\"}}}],\"links\":[{\"type\":\"link\",\"source\":{\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\"},\"target\":{\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\"},\"router\":{\"name\":\"manhattan\"},\"connector\":{\"name\":\"rounded\"},\"id\":\"9f0c041e-6c05-410a-8b7a-e23138a9ffd5\",\"z\":4,\"vertices\":[{\"x\":220,\"y\":340},{\"x\":220,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340}],\"attrs\":{\".connection\":{\"stroke\":\"#333333\",\"stroke-width\":3},\".marker-target\":{\"fill\":\"#333333\",\"d\":\"M 10 0 L 0 5 L 10 10 z\"}}}]}"
                    }
                ],
                "executions" : [ 
                    {
                        "log" : "---\n  name: \"simpleCli\"\n  version: 8\n  date: \"Wed Apr 27 2016 22:19:45 GMT+0300 (שעון קיץ ירושלים)\"\n  Linux-Agent1: \n    processes: \n      HelloWorld: \n        name: \"HelloWorld\"\n        actions: \n          echo: \n            name: \"echo\"\n            baseAgent: \n              name: \"Linux-Agent1\"\n              url: \"http://localhost:8090\"\n            result: \"\\\"Hello World\\\"\\r\\n\"\n            status: 0\n        result: \"\\\"Hello World\\\"\\r\\n\\n\"\n        status: 0\n    status: 0\n    result: \"\\\"Hello World\\\"\\r\\n\\n\\n\"\n",
                        "resObj" : {
                            "name" : "simpleCli",
                            "version" : 8,
                            "date" : "Wed Apr 27 2016 22:19:45 GMT+0300 (שעון קיץ ירושלים)",
                            "Linux-Agent1" : {
                                "processes" : {
                                    "HelloWorld" : {
                                        "name" : "HelloWorld",
                                        "actions" : {
                                            "echo" : {
                                                "name" : "echo",
                                                "baseAgent" : {
                                                    "name" : "Linux-Agent1",
                                                    "url" : "http://localhost:8090"
                                                },
                                                "result" : "\"Hello World\"\r\n",
                                                "status" : 0
                                            }
                                        },
                                        "result" : "\"Hello World\"\r\n\n",
                                        "status" : 0
                                    }
                                },
                                "status" : 0,
                                "result" : "\"Hello World\"\r\n\n\n"
                            }
                        },
                        "map" : {
                            "content" : "{\"nodes\":[{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":50,\"y\":170},\"angle\":0,\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\",\"embeds\":\"\",\"z\":1,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"Start\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/pmAgent.png\"}}},{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":350,\"y\":310},\"angle\":0,\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\",\"embeds\":\"\",\"z\":2,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"CommandLine\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/CommandLine.png\"}}}],\"links\":[{\"type\":\"link\",\"source\":{\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\"},\"target\":{\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\"},\"router\":{\"name\":\"manhattan\"},\"connector\":{\"name\":\"rounded\"},\"id\":\"9f0c041e-6c05-410a-8b7a-e23138a9ffd5\",\"z\":4,\"vertices\":[{\"x\":220,\"y\":340},{\"x\":220,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340}],\"attrs\":{\".connection\":{\"stroke\":\"#333333\",\"stroke-width\":3},\".marker-target\":{\"fill\":\"#333333\",\"d\":\"M 10 0 L 0 5 L 10 10 z\"}}}]}",
                            "nodes" : {
                                "Start" : {
                                    "id" : "fd1000fc-11cc-4261-9dcd-b2b9a53a3131",
                                    "name" : "Start",
                                    "type" : "startNode",
                                    "serverUrl" : "",
                                    "attributes" : {}
                                },
                                "CommandLine" : {
                                    "id" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                    "type" : "CommandLine",
                                    "name" : "CommandLine",
                                    "serverUrl" : "localhost:8100",
                                    "attributes" : {}
                                }
                            },
                            "links" : [ 
                                {
                                    "id" : "9f0c041e-6c05-410a-8b7a-e23138a9ffd5",
                                    "sourceId" : "fd1000fc-11cc-4261-9dcd-b2b9a53a3131",
                                    "targetId" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                    "processes" : [ 
                                        {
                                            "name" : "HelloWorld",
                                            "description" : "",
                                            "order" : 0,
                                            "default_execution" : false,
                                            "mandatory" : false,
                                            "actions" : [ 
                                                {
                                                    "server" : {
                                                        "type" : "CommandLine",
                                                        "name" : "CommandLine",
                                                        "id" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                                        "url" : "localhost:8100"
                                                    },
                                                    "method" : {
                                                        "params" : [ 
                                                            {
                                                                "name" : "COMMANDS",
                                                                "viewName" : "command",
                                                                "type" : "string",
                                                                "method" : "5720f24fa02b766c1cbf8d2e",
                                                                "options" : [],
                                                                "createdAt" : "2016-04-27T17:09:35.909Z",
                                                                "updatedAt" : "2016-04-27T17:09:35.909Z",
                                                                "id" : "5720f24fa02b766c1cbf8d3c"
                                                            }
                                                        ],
                                                        "agent" : {
                                                            "type" : "CommandLine",
                                                            "imgUrl" : "images/controls/CommandLine.png",
                                                            "createdAt" : "2016-04-27T17:09:35.253Z",
                                                            "updatedAt" : "2016-04-27T17:09:35.560Z",
                                                            "id" : "5720f24fa02b766c1cbf8d2d"
                                                        },
                                                        "name" : "execute",
                                                        "viewName" : "execute command",
                                                        "actionString" : "COMMANDS",
                                                        "createdAt" : "2016-04-27T17:09:35.564Z",
                                                        "updatedAt" : "2016-04-27T17:09:35.745Z",
                                                        "id" : "5720f24fa02b766c1cbf8d2e"
                                                    },
                                                    "params" : {
                                                        "COMMANDS" : {
                                                            "text" : "echo \"Hello World\""
                                                        }
                                                    },
                                                    "name" : "echo",
                                                    "timeout" : 0,
                                                    "timeunit" : "1",
                                                    "retries" : 0,
                                                    "mandatory" : false,
                                                    "suspend" : false,
                                                    "result" : "",
                                                    "lastUpdate" : "Wed Apr 27 2016 22:18:07 GMT+0300 (שעון קיץ ירושלים)"
                                                }
                                            ],
                                            "result" : "",
                                            "inside" : true
                                        }
                                    ],
                                    "result" : "",
                                    "filterAgent" : false,
                                    "filterAgentCode" : "filterAgent();"
                                }
                            ],
                            "code" : ""
                        },
                        "date" : "2016-04-27T19:19:45.839Z"
                    }
                ],
                "status" : 2
            }, 
            {
                "date" : "2016-04-27T19:46:13.816Z"
                "patches" : [ 
                    {
                        "op" : "replace",
                        "path" : "/links/0/processes/0/actions/0/lastUpdate",
                        "value" : "Wed Apr 27 2016 22:45:54 GMT+0300 (שעון קיץ ירושלים)"
                    }, 
                    {
                        "op" : "replace",
                        "path" : "/links/0/processes/0/actions/0/params/COMMANDS/text",
                        "value" : "echsso \"Hello World\""
                    }, 
                    {
                        "op" : "replace",
                        "path" : "/content",
                        "value" : "{\"nodes\":[{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":50,\"y\":170},\"angle\":0,\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\",\"embeds\":\"\",\"z\":1,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"Start\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/pmAgent.png\"}}},{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":350,\"y\":310},\"angle\":0,\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\",\"embeds\":\"\",\"z\":2,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"CommandLine\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/CommandLine.png\"}}}],\"links\":[{\"type\":\"link\",\"source\":{\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\"},\"target\":{\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\"},\"router\":{\"name\":\"manhattan\"},\"connector\":{\"name\":\"rounded\"},\"id\":\"9f0c041e-6c05-410a-8b7a-e23138a9ffd5\",\"z\":4,\"vertices\":[{\"x\":220,\"y\":340},{\"x\":220,\"y\":340},{\"x\":240,\"y\":340},{\"x\":240,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340}],\"attrs\":{\".connection\":{\"stroke\":\"#333333\",\"stroke-width\":3},\".marker-target\":{\"fill\":\"#333333\",\"d\":\"M 10 0 L 0 5 L 10 10 z\"}}}]}"
                    }
                ],
                "executions" : [ 
                    {
                        "log" : "---\n  name: \"simpleCli\"\n  version: 9\n  date: \"Wed Apr 27 2016 22:46:14 GMT+0300 (שעון קיץ ירושלים)\"\n  Linux-Agent1: \n    processes: \n      HelloWorld: \n        name: \"HelloWorld\"\n        actions: \n          echo: \n            name: \"echo\"\n            baseAgent: \n              name: \"Linux-Agent1\"\n              url: \"http://localhost:8090\"\n            result: \"Error:'echsso' is not recognized as an internal or external command,\\r\\noperable program or batch file.\\r\\n\"\n            status: -1\n        result: \"\"\n        status: 0\n    status: 0\n    result: \"\\n\"\n",
                        "resObj" : {
                            "name" : "simpleCli",
                            "version" : 9,
                            "date" : "Wed Apr 27 2016 22:46:14 GMT+0300 (שעון קיץ ירושלים)",
                            "Linux-Agent1" : {
                                "processes" : {
                                    "HelloWorld" : {
                                        "name" : "HelloWorld",
                                        "actions" : {
                                            "echo" : {
                                                "name" : "echo",
                                                "baseAgent" : {
                                                    "name" : "Linux-Agent1",
                                                    "url" : "http://localhost:8090"
                                                },
                                                "result" : "Error:'echsso' is not recognized as an internal or external command,\r\noperable program or batch file.\r\n",
                                                "status" : -1
                                            }
                                        },
                                        "result" : "",
                                        "status" : 0
                                    }
                                },
                                "status" : 0,
                                "result" : "\n"
                            }
                        },
                        "map" : {
                            "content" : "{\"nodes\":[{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":50,\"y\":170},\"angle\":0,\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\",\"embeds\":\"\",\"z\":1,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"Start\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/pmAgent.png\"}}},{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":350,\"y\":310},\"angle\":0,\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\",\"embeds\":\"\",\"z\":2,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"CommandLine\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/CommandLine.png\"}}}],\"links\":[{\"type\":\"link\",\"source\":{\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\"},\"target\":{\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\"},\"router\":{\"name\":\"manhattan\"},\"connector\":{\"name\":\"rounded\"},\"id\":\"9f0c041e-6c05-410a-8b7a-e23138a9ffd5\",\"z\":4,\"vertices\":[{\"x\":220,\"y\":340},{\"x\":220,\"y\":340},{\"x\":240,\"y\":340},{\"x\":240,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340}],\"attrs\":{\".connection\":{\"stroke\":\"#333333\",\"stroke-width\":3},\".marker-target\":{\"fill\":\"#333333\",\"d\":\"M 10 0 L 0 5 L 10 10 z\"}}}]}",
                            "nodes" : {
                                "Start" : {
                                    "id" : "fd1000fc-11cc-4261-9dcd-b2b9a53a3131",
                                    "name" : "Start",
                                    "type" : "startNode",
                                    "serverUrl" : "",
                                    "attributes" : {}
                                },
                                "CommandLine" : {
                                    "id" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                    "type" : "CommandLine",
                                    "name" : "CommandLine",
                                    "serverUrl" : "localhost:8100",
                                    "attributes" : {}
                                }
                            },
                            "links" : [ 
                                {
                                    "id" : "9f0c041e-6c05-410a-8b7a-e23138a9ffd5",
                                    "sourceId" : "fd1000fc-11cc-4261-9dcd-b2b9a53a3131",
                                    "targetId" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                    "processes" : [ 
                                        {
                                            "name" : "HelloWorld",
                                            "description" : "",
                                            "order" : 0,
                                            "default_execution" : false,
                                            "mandatory" : false,
                                            "actions" : [ 
                                                {
                                                    "server" : {
                                                        "type" : "CommandLine",
                                                        "name" : "CommandLine",
                                                        "id" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                                        "url" : "localhost:8100"
                                                    },
                                                    "method" : {
                                                        "params" : [ 
                                                            {
                                                                "name" : "COMMANDS",
                                                                "viewName" : "command",
                                                                "type" : "string",
                                                                "method" : "5720f24fa02b766c1cbf8d2e",
                                                                "options" : [],
                                                                "createdAt" : "2016-04-27T17:09:35.909Z",
                                                                "updatedAt" : "2016-04-27T17:09:35.909Z",
                                                                "id" : "5720f24fa02b766c1cbf8d3c"
                                                            }
                                                        ],
                                                        "agent" : {
                                                            "type" : "CommandLine",
                                                            "imgUrl" : "images/controls/CommandLine.png",
                                                            "createdAt" : "2016-04-27T17:09:35.253Z",
                                                            "updatedAt" : "2016-04-27T17:09:35.560Z",
                                                            "id" : "5720f24fa02b766c1cbf8d2d"
                                                        },
                                                        "name" : "execute",
                                                        "viewName" : "execute command",
                                                        "actionString" : "COMMANDS",
                                                        "createdAt" : "2016-04-27T17:09:35.564Z",
                                                        "updatedAt" : "2016-04-27T17:09:35.745Z",
                                                        "id" : "5720f24fa02b766c1cbf8d2e"
                                                    },
                                                    "params" : {
                                                        "COMMANDS" : {
                                                            "text" : "echsso \"Hello World\""
                                                        }
                                                    },
                                                    "name" : "echo",
                                                    "timeout" : 0,
                                                    "timeunit" : "1",
                                                    "retries" : 0,
                                                    "mandatory" : false,
                                                    "suspend" : false,
                                                    "result" : "",
                                                    "lastUpdate" : "Wed Apr 27 2016 22:45:54 GMT+0300 (שעון קיץ ירושלים)"
                                                }
                                            ],
                                            "result" : "",
                                            "inside" : true
                                        }
                                    ],
                                    "result" : "",
                                    "filterAgent" : false,
                                    "filterAgentCode" : "filterAgent();"
                                }
                            ],
                            "code" : ""
                        },
                        "date" : "2016-04-27T19:46:14.549Z"
                    }, 
                    {
                        "log" : "---\n  name: \"simpleCli\"\n  version: 9\n  date: \"Wed Apr 27 2016 22:46:44 GMT+0300 (שעון קיץ ירושלים)\"\n  Linux-Agent1: \n    processes: \n      HelloWorld: \n        name: \"HelloWorld\"\n        actions: \n          echo: \n            name: \"echo\"\n            baseAgent: \n              name: \"Linux-Agent1\"\n              url: \"http://localhost:8090\"\n            result: \"Error:'echsso' is not recognized as an internal or external command,\\r\\noperable program or batch file.\\r\\n\"\n            status: -1\n        result: \"\"\n        status: 0\n    status: 0\n    result: \"\\n\"\n",
                        "resObj" : {
                            "name" : "simpleCli",
                            "version" : 9,
                            "date" : "Wed Apr 27 2016 22:46:44 GMT+0300 (שעון קיץ ירושלים)",
                            "Linux-Agent1" : {
                                "processes" : {
                                    "HelloWorld" : {
                                        "name" : "HelloWorld",
                                        "actions" : {
                                            "echo" : {
                                                "name" : "echo",
                                                "baseAgent" : {
                                                    "name" : "Linux-Agent1",
                                                    "url" : "http://localhost:8090"
                                                },
                                                "result" : "Error:'echsso' is not recognized as an internal or external command,\r\noperable program or batch file.\r\n",
                                                "status" : -1
                                            }
                                        },
                                        "result" : "",
                                        "status" : 0
                                    }
                                },
                                "status" : 0,
                                "result" : "\n"
                            }
                        },
                        "map" : {
                            "content" : "{\"nodes\":[{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":50,\"y\":170},\"angle\":0,\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\",\"embeds\":\"\",\"z\":1,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"Start\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/pmAgent.png\"}}},{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":350,\"y\":310},\"angle\":0,\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\",\"embeds\":\"\",\"z\":2,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"CommandLine\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/CommandLine.png\"}}}],\"links\":[{\"type\":\"link\",\"source\":{\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\"},\"target\":{\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\"},\"router\":{\"name\":\"manhattan\"},\"connector\":{\"name\":\"rounded\"},\"id\":\"9f0c041e-6c05-410a-8b7a-e23138a9ffd5\",\"z\":4,\"vertices\":[{\"x\":220,\"y\":340},{\"x\":220,\"y\":340},{\"x\":240,\"y\":340},{\"x\":240,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340}],\"attrs\":{\".connection\":{\"stroke\":\"#333333\",\"stroke-width\":3},\".marker-target\":{\"fill\":\"#333333\",\"d\":\"M 10 0 L 0 5 L 10 10 z\"}}}]}",
                            "nodes" : {
                                "Start" : {
                                    "id" : "fd1000fc-11cc-4261-9dcd-b2b9a53a3131",
                                    "name" : "Start",
                                    "type" : "startNode",
                                    "serverUrl" : "",
                                    "attributes" : {}
                                },
                                "CommandLine" : {
                                    "id" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                    "type" : "CommandLine",
                                    "name" : "CommandLine",
                                    "serverUrl" : "localhost:8100",
                                    "attributes" : {}
                                }
                            },
                            "links" : [ 
                                {
                                    "id" : "9f0c041e-6c05-410a-8b7a-e23138a9ffd5",
                                    "sourceId" : "fd1000fc-11cc-4261-9dcd-b2b9a53a3131",
                                    "targetId" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                    "processes" : [ 
                                        {
                                            "name" : "HelloWorld",
                                            "description" : "",
                                            "order" : 0,
                                            "default_execution" : false,
                                            "mandatory" : false,
                                            "actions" : [ 
                                                {
                                                    "server" : {
                                                        "type" : "CommandLine",
                                                        "name" : "CommandLine",
                                                        "id" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                                        "url" : "localhost:8100"
                                                    },
                                                    "method" : {
                                                        "params" : [ 
                                                            {
                                                                "name" : "COMMANDS",
                                                                "viewName" : "command",
                                                                "type" : "string",
                                                                "method" : "5720f24fa02b766c1cbf8d2e",
                                                                "options" : [],
                                                                "createdAt" : "2016-04-27T17:09:35.909Z",
                                                                "updatedAt" : "2016-04-27T17:09:35.909Z",
                                                                "id" : "5720f24fa02b766c1cbf8d3c"
                                                            }
                                                        ],
                                                        "agent" : {
                                                            "type" : "CommandLine",
                                                            "imgUrl" : "images/controls/CommandLine.png",
                                                            "createdAt" : "2016-04-27T17:09:35.253Z",
                                                            "updatedAt" : "2016-04-27T17:09:35.560Z",
                                                            "id" : "5720f24fa02b766c1cbf8d2d"
                                                        },
                                                        "name" : "execute",
                                                        "viewName" : "execute command",
                                                        "actionString" : "COMMANDS",
                                                        "createdAt" : "2016-04-27T17:09:35.564Z",
                                                        "updatedAt" : "2016-04-27T17:09:35.745Z",
                                                        "id" : "5720f24fa02b766c1cbf8d2e"
                                                    },
                                                    "params" : {
                                                        "COMMANDS" : {
                                                            "text" : "echsso \"Hello World\""
                                                        }
                                                    },
                                                    "name" : "echo",
                                                    "timeout" : 0,
                                                    "timeunit" : "1",
                                                    "retries" : 0,
                                                    "mandatory" : false,
                                                    "suspend" : false,
                                                    "result" : "",
                                                    "lastUpdate" : "Wed Apr 27 2016 22:45:54 GMT+0300 (שעון קיץ ירושלים)"
                                                }
                                            ],
                                            "result" : "",
                                            "inside" : true
                                        }
                                    ],
                                    "result" : "",
                                    "filterAgent" : false,
                                    "filterAgentCode" : "filterAgent();"
                                }
                            ],
                            "code" : ""
                        },
                        "date" : "2016-04-27T19:46:44.288Z"
                    }
                ],
                "status" : 2
            }, 
            {
                "date" : "2016-04-27T19:47:14.172Z"
                "patches" : [ 
                    {
                        "op" : "replace",
                        "path" : "/links/0/processes/0/actions/0/lastUpdate",
                        "value" : "Wed Apr 27 2016 22:47:12 GMT+0300 (שעון קיץ ירושלים)"
                    }, 
                    {
                        "op" : "replace",
                        "path" : "/links/0/processes/0/actions/0/params/COMMANDS/text",
                        "value" : "echo \"Hello World\""
                    }, 
                    {
                        "op" : "replace",
                        "path" : "/content",
                        "value" : "{\"nodes\":[{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":50,\"y\":170},\"angle\":0,\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\",\"embeds\":\"\",\"z\":1,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"Start\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/pmAgent.png\"}}},{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":350,\"y\":310},\"angle\":0,\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\",\"embeds\":\"\",\"z\":2,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"CommandLine\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/CommandLine.png\"}}}],\"links\":[{\"type\":\"link\",\"source\":{\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\"},\"target\":{\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\"},\"router\":{\"name\":\"manhattan\"},\"connector\":{\"name\":\"rounded\"},\"id\":\"9f0c041e-6c05-410a-8b7a-e23138a9ffd5\",\"z\":4,\"vertices\":[{\"x\":220,\"y\":340},{\"x\":220,\"y\":340},{\"x\":240,\"y\":340},{\"x\":240,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340}],\"attrs\":{\".connection\":{\"stroke\":\"#333333\",\"stroke-width\":3},\".marker-target\":{\"fill\":\"#333333\",\"d\":\"M 10 0 L 0 5 L 10 10 z\"}}}]}"
                    }
                ],
                "executions" : [ 
                    {
                        "log" : "---\n  name: \"simpleCli\"\n  version: 10\n  date: \"Wed Apr 27 2016 22:47:14 GMT+0300 (שעון קיץ ירושלים)\"\n  Linux-Agent1: \n    processes: \n      HelloWorld: \n        name: \"HelloWorld\"\n        actions: \n          echo: \n            name: \"echo\"\n            baseAgent: \n              name: \"Linux-Agent1\"\n              url: \"http://localhost:8090\"\n            result: \"\\\"Hello World\\\"\\r\\n\"\n            status: 0\n        result: \"\\\"Hello World\\\"\\r\\n\\n\"\n        status: 0\n    status: 0\n    result: \"\\\"Hello World\\\"\\r\\n\\n\\n\"\n",
                        "resObj" : {
                            "name" : "simpleCli",
                            "version" : 10,
                            "date" : "Wed Apr 27 2016 22:47:14 GMT+0300 (שעון קיץ ירושלים)",
                            "Linux-Agent1" : {
                                "processes" : {
                                    "HelloWorld" : {
                                        "name" : "HelloWorld",
                                        "actions" : {
                                            "echo" : {
                                                "name" : "echo",
                                                "baseAgent" : {
                                                    "name" : "Linux-Agent1",
                                                    "url" : "http://localhost:8090"
                                                },
                                                "result" : "\"Hello World\"\r\n",
                                                "status" : 0
                                            }
                                        },
                                        "result" : "\"Hello World\"\r\n\n",
                                        "status" : 0
                                    }
                                },
                                "status" : 0,
                                "result" : "\"Hello World\"\r\n\n\n"
                            }
                        },
                        "map" : {
                            "content" : "{\"nodes\":[{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":50,\"y\":170},\"angle\":0,\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\",\"embeds\":\"\",\"z\":1,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"Start\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/pmAgent.png\"}}},{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":350,\"y\":310},\"angle\":0,\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\",\"embeds\":\"\",\"z\":2,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"CommandLine\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/CommandLine.png\"}}}],\"links\":[{\"type\":\"link\",\"source\":{\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\"},\"target\":{\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\"},\"router\":{\"name\":\"manhattan\"},\"connector\":{\"name\":\"rounded\"},\"id\":\"9f0c041e-6c05-410a-8b7a-e23138a9ffd5\",\"z\":4,\"vertices\":[{\"x\":220,\"y\":340},{\"x\":220,\"y\":340},{\"x\":240,\"y\":340},{\"x\":240,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340}],\"attrs\":{\".connection\":{\"stroke\":\"#333333\",\"stroke-width\":3},\".marker-target\":{\"fill\":\"#333333\",\"d\":\"M 10 0 L 0 5 L 10 10 z\"}}}]}",
                            "nodes" : {
                                "Start" : {
                                    "id" : "fd1000fc-11cc-4261-9dcd-b2b9a53a3131",
                                    "name" : "Start",
                                    "type" : "startNode",
                                    "serverUrl" : "",
                                    "attributes" : {}
                                },
                                "CommandLine" : {
                                    "id" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                    "type" : "CommandLine",
                                    "name" : "CommandLine",
                                    "serverUrl" : "localhost:8100",
                                    "attributes" : {}
                                }
                            },
                            "links" : [ 
                                {
                                    "id" : "9f0c041e-6c05-410a-8b7a-e23138a9ffd5",
                                    "sourceId" : "fd1000fc-11cc-4261-9dcd-b2b9a53a3131",
                                    "targetId" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                    "processes" : [ 
                                        {
                                            "name" : "HelloWorld",
                                            "description" : "",
                                            "order" : 0,
                                            "default_execution" : false,
                                            "mandatory" : false,
                                            "actions" : [ 
                                                {
                                                    "server" : {
                                                        "type" : "CommandLine",
                                                        "name" : "CommandLine",
                                                        "id" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                                        "url" : "localhost:8100"
                                                    },
                                                    "method" : {
                                                        "params" : [ 
                                                            {
                                                                "name" : "COMMANDS",
                                                                "viewName" : "command",
                                                                "type" : "string",
                                                                "method" : "5720f24fa02b766c1cbf8d2e",
                                                                "options" : [],
                                                                "createdAt" : "2016-04-27T17:09:35.909Z",
                                                                "updatedAt" : "2016-04-27T17:09:35.909Z",
                                                                "id" : "5720f24fa02b766c1cbf8d3c"
                                                            }
                                                        ],
                                                        "agent" : {
                                                            "type" : "CommandLine",
                                                            "imgUrl" : "images/controls/CommandLine.png",
                                                            "createdAt" : "2016-04-27T17:09:35.253Z",
                                                            "updatedAt" : "2016-04-27T17:09:35.560Z",
                                                            "id" : "5720f24fa02b766c1cbf8d2d"
                                                        },
                                                        "name" : "execute",
                                                        "viewName" : "execute command",
                                                        "actionString" : "COMMANDS",
                                                        "createdAt" : "2016-04-27T17:09:35.564Z",
                                                        "updatedAt" : "2016-04-27T17:09:35.745Z",
                                                        "id" : "5720f24fa02b766c1cbf8d2e"
                                                    },
                                                    "params" : {
                                                        "COMMANDS" : {
                                                            "text" : "echo \"Hello World\""
                                                        }
                                                    },
                                                    "name" : "echo",
                                                    "timeout" : 0,
                                                    "timeunit" : "1",
                                                    "retries" : 0,
                                                    "mandatory" : false,
                                                    "suspend" : false,
                                                    "result" : "",
                                                    "lastUpdate" : "Wed Apr 27 2016 22:47:12 GMT+0300 (שעון קיץ ירושלים)"
                                                }
                                            ],
                                            "result" : "",
                                            "inside" : true
                                        }
                                    ],
                                    "result" : "",
                                    "filterAgent" : false,
                                    "filterAgentCode" : "filterAgent();"
                                }
                            ],
                            "code" : ""
                        },
                        "date" : "2016-04-27T19:47:14.997Z"
                    }
                ],
                "status" : 2
            }, 
            {
                "date" : "2016-04-27T20:09:23.322Z"
                "patches" : [ 
                    {
                        "op" : "replace",
                        "path" : "/content",
                        "value" : "{\"nodes\":[{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":40,\"y\":150},\"angle\":0,\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\",\"embeds\":\"\",\"z\":1,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"Start\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/pmAgent.png\"}}},{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":350,\"y\":310},\"angle\":0,\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\",\"embeds\":\"\",\"z\":2,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"CommandLine\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/CommandLine.png\"}}},{\"type\":\"basic.Rect\",\"position\":{\"x\":300,\"y\":150},\"size\":{\"width\":0.1,\"height\":0.1},\"angle\":0,\"id\":\"7f33a380-2dc1-4899-a1c1-51c1be84ec10\",\"z\":5,\"attrs\":{}}],\"links\":[{\"type\":\"link\",\"source\":{\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\"},\"target\":{\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\"},\"router\":{\"name\":\"manhattan\"},\"connector\":{\"name\":\"rounded\"},\"id\":\"9f0c041e-6c05-410a-8b7a-e23138a9ffd5\",\"z\":4,\"vertices\":[{\"x\":220,\"y\":340},{\"x\":220,\"y\":340},{\"x\":240,\"y\":340},{\"x\":240,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340}],\"attrs\":{\".connection\":{\"stroke\":\"#333333\",\"stroke-width\":3},\".marker-target\":{\"fill\":\"#333333\",\"d\":\"M 10 0 L 0 5 L 10 10 z\"}}},{\"type\":\"link\",\"source\":{\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\"},\"target\":{\"id\":\"7f33a380-2dc1-4899-a1c1-51c1be84ec10\"},\"router\":{\"name\":\"manhattan\"},\"connector\":{\"name\":\"rounded\"},\"id\":\"99f07f28-d496-4472-8d32-ef54bc770f97\",\"z\":6,\"attrs\":{\".connection\":{\"stroke\":\"#333333\",\"stroke-width\":3},\".marker-target\":{\"fill\":\"#333333\",\"d\":\"M 10 0 L 0 5 L 10 10 z\"}}}]}"
                    }
                ],
                "executions" : [ 
                    {
                        "log" : "---\n  name: \"simpleCli\"\n  version: 11\n  date: \"Wed Apr 27 2016 23:09:23 GMT+0300 (שעון קיץ ירושלים)\"\n  Linux-Agent2: \n    processes: \n      HelloWorld: \n        name: \"HelloWorld\"\n        actions: \n          echo: \n            name: \"echo\"\n            baseAgent: \n              name: \"Linux-Agent2\"\n              url: \"http://localhost:8091\"\n            result: \"\\\"Hello World\\\"\\r\\n\"\n            status: 0\n        result: \"\\\"Hello World\\\"\\r\\n\\n\"\n        status: 0\n    status: 0\n    result: \"\\\"Hello World\\\"\\r\\n\\n\\n\"\n  Linux-Agent1: \n    processes: \n      HelloWorld: \n        name: \"HelloWorld\"\n        actions: \n          echo: \n            name: \"echo\"\n            baseAgent: \n              name: \"Linux-Agent1\"\n              url: \"http://localhost:8090\"\n            result: \"\\\"Hello World\\\"\\r\\n\"\n            status: 0\n        result: \"\\\"Hello World\\\"\\r\\n\\n\"\n        status: 0\n    status: 0\n    result: \"\\\"Hello World\\\"\\r\\n\\n\\n\"\n  Windows-Agent3: \n    processes: \n      HelloWorld: \n        name: \"HelloWorld\"\n        actions: \n          echo: \n            name: \"echo\"\n            baseAgent: \n              name: \"Windows-Agent3\"\n              url: \"http://localhost:8092\"\n            result: \"\\\"Hello World\\\"\\r\\n\"\n            status: 0\n        result: \"\\\"Hello World\\\"\\r\\n\\n\"\n        status: 0\n    status: 0\n    result: \"\\\"Hello World\\\"\\r\\n\\n\\n\"\n",
                        "resObj" : {
                            "name" : "simpleCli",
                            "version" : 11,
                            "date" : "Wed Apr 27 2016 23:09:23 GMT+0300 (שעון קיץ ירושלים)",
                            "Linux-Agent2" : {
                                "processes" : {
                                    "HelloWorld" : {
                                        "name" : "HelloWorld",
                                        "actions" : {
                                            "echo" : {
                                                "name" : "echo",
                                                "baseAgent" : {
                                                    "name" : "Linux-Agent2",
                                                    "url" : "http://localhost:8091"
                                                },
                                                "result" : "\"Hello World\"\r\n",
                                                "status" : 0
                                            }
                                        },
                                        "result" : "\"Hello World\"\r\n\n",
                                        "status" : 0
                                    }
                                },
                                "status" : 0,
                                "result" : "\"Hello World\"\r\n\n\n"
                            },
                            "Linux-Agent1" : {
                                "processes" : {
                                    "HelloWorld" : {
                                        "name" : "HelloWorld",
                                        "actions" : {
                                            "echo" : {
                                                "name" : "echo",
                                                "baseAgent" : {
                                                    "name" : "Linux-Agent1",
                                                    "url" : "http://localhost:8090"
                                                },
                                                "result" : "\"Hello World\"\r\n",
                                                "status" : 0
                                            }
                                        },
                                        "result" : "\"Hello World\"\r\n\n",
                                        "status" : 0
                                    }
                                },
                                "status" : 0,
                                "result" : "\"Hello World\"\r\n\n\n"
                            },
                            "Windows-Agent3" : {
                                "processes" : {
                                    "HelloWorld" : {
                                        "name" : "HelloWorld",
                                        "actions" : {
                                            "echo" : {
                                                "name" : "echo",
                                                "baseAgent" : {
                                                    "name" : "Windows-Agent3",
                                                    "url" : "http://localhost:8092"
                                                },
                                                "result" : "\"Hello World\"\r\n",
                                                "status" : 0
                                            }
                                        },
                                        "result" : "\"Hello World\"\r\n\n",
                                        "status" : 0
                                    }
                                },
                                "status" : 0,
                                "result" : "\"Hello World\"\r\n\n\n"
                            }
                        },
                        "map" : {
                            "content" : "{\"nodes\":[{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":40,\"y\":150},\"angle\":0,\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\",\"embeds\":\"\",\"z\":1,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"Start\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/pmAgent.png\"}}},{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":350,\"y\":310},\"angle\":0,\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\",\"embeds\":\"\",\"z\":2,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"CommandLine\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/CommandLine.png\"}}},{\"type\":\"basic.Rect\",\"position\":{\"x\":300,\"y\":150},\"size\":{\"width\":0.1,\"height\":0.1},\"angle\":0,\"id\":\"7f33a380-2dc1-4899-a1c1-51c1be84ec10\",\"z\":5,\"attrs\":{}}],\"links\":[{\"type\":\"link\",\"source\":{\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\"},\"target\":{\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\"},\"router\":{\"name\":\"manhattan\"},\"connector\":{\"name\":\"rounded\"},\"id\":\"9f0c041e-6c05-410a-8b7a-e23138a9ffd5\",\"z\":4,\"vertices\":[{\"x\":220,\"y\":340},{\"x\":220,\"y\":340},{\"x\":240,\"y\":340},{\"x\":240,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340}],\"attrs\":{\".connection\":{\"stroke\":\"#333333\",\"stroke-width\":3},\".marker-target\":{\"fill\":\"#333333\",\"d\":\"M 10 0 L 0 5 L 10 10 z\"}}},{\"type\":\"link\",\"source\":{\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\"},\"target\":{\"id\":\"7f33a380-2dc1-4899-a1c1-51c1be84ec10\"},\"router\":{\"name\":\"manhattan\"},\"connector\":{\"name\":\"rounded\"},\"id\":\"99f07f28-d496-4472-8d32-ef54bc770f97\",\"z\":6,\"attrs\":{\".connection\":{\"stroke\":\"#333333\",\"stroke-width\":3},\".marker-target\":{\"fill\":\"#333333\",\"d\":\"M 10 0 L 0 5 L 10 10 z\"}}}]}",
                            "nodes" : {
                                "Start" : {
                                    "id" : "fd1000fc-11cc-4261-9dcd-b2b9a53a3131",
                                    "name" : "Start",
                                    "type" : "startNode",
                                    "serverUrl" : "",
                                    "attributes" : {}
                                },
                                "CommandLine" : {
                                    "id" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                    "type" : "CommandLine",
                                    "name" : "CommandLine",
                                    "serverUrl" : "localhost:8100",
                                    "attributes" : {}
                                }
                            },
                            "links" : [ 
                                {
                                    "id" : "9f0c041e-6c05-410a-8b7a-e23138a9ffd5",
                                    "sourceId" : "fd1000fc-11cc-4261-9dcd-b2b9a53a3131",
                                    "targetId" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                    "processes" : [ 
                                        {
                                            "name" : "HelloWorld",
                                            "description" : "",
                                            "order" : 0,
                                            "default_execution" : false,
                                            "mandatory" : false,
                                            "actions" : [ 
                                                {
                                                    "server" : {
                                                        "type" : "CommandLine",
                                                        "name" : "CommandLine",
                                                        "id" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                                        "url" : "localhost:8100"
                                                    },
                                                    "method" : {
                                                        "params" : [ 
                                                            {
                                                                "name" : "COMMANDS",
                                                                "viewName" : "command",
                                                                "type" : "string",
                                                                "method" : "5720f24fa02b766c1cbf8d2e",
                                                                "options" : [],
                                                                "createdAt" : "2016-04-27T17:09:35.909Z",
                                                                "updatedAt" : "2016-04-27T17:09:35.909Z",
                                                                "id" : "5720f24fa02b766c1cbf8d3c"
                                                            }
                                                        ],
                                                        "agent" : {
                                                            "type" : "CommandLine",
                                                            "imgUrl" : "images/controls/CommandLine.png",
                                                            "createdAt" : "2016-04-27T17:09:35.253Z",
                                                            "updatedAt" : "2016-04-27T17:09:35.560Z",
                                                            "id" : "5720f24fa02b766c1cbf8d2d"
                                                        },
                                                        "name" : "execute",
                                                        "viewName" : "execute command",
                                                        "actionString" : "COMMANDS",
                                                        "createdAt" : "2016-04-27T17:09:35.564Z",
                                                        "updatedAt" : "2016-04-27T17:09:35.745Z",
                                                        "id" : "5720f24fa02b766c1cbf8d2e"
                                                    },
                                                    "params" : {
                                                        "COMMANDS" : {
                                                            "text" : "echo \"Hello World\""
                                                        }
                                                    },
                                                    "name" : "echo",
                                                    "timeout" : 0,
                                                    "timeunit" : "1",
                                                    "retries" : 0,
                                                    "mandatory" : false,
                                                    "suspend" : false,
                                                    "result" : "",
                                                    "lastUpdate" : "Wed Apr 27 2016 22:47:12 GMT+0300 (שעון קיץ ירושלים)"
                                                }
                                            ],
                                            "result" : "",
                                            "inside" : true
                                        }
                                    ],
                                    "result" : "",
                                    "filterAgent" : false,
                                    "filterAgentCode" : "filterAgent();"
                                }
                            ],
                            "code" : ""
                        },
                        "date" : "2016-04-27T20:09:24.268Z"
                    }, 
                    {
                        "log" : "---\n  name: \"simpleCli\"\n  version: 11\n  date: \"Wed Apr 27 2016 23:10:18 GMT+0300 (שעון קיץ ירושלים)\"\n  Linux-Agent1: \n    processes: \n      HelloWorld: \n        name: \"HelloWorld\"\n        actions: \n          echo: \n            name: \"echo\"\n            baseAgent: \n              name: \"Linux-Agent1\"\n              url: \"http://localhost:8090\"\n            result: \"\\\"Hello World\\\"\\r\\n\"\n            status: 0\n        result: \"\\\"Hello World\\\"\\r\\n\\n\"\n        status: 0\n    status: 0\n    result: \"\\\"Hello World\\\"\\r\\n\\n\\n\"\n",
                        "resObj" : {
                            "name" : "simpleCli",
                            "version" : 11,
                            "date" : "Wed Apr 27 2016 23:10:18 GMT+0300 (שעון קיץ ירושלים)",
                            "Linux-Agent1" : {
                                "processes" : {
                                    "HelloWorld" : {
                                        "name" : "HelloWorld",
                                        "actions" : {
                                            "echo" : {
                                                "name" : "echo",
                                                "baseAgent" : {
                                                    "name" : "Linux-Agent1",
                                                    "url" : "http://localhost:8090"
                                                },
                                                "result" : "\"Hello World\"\r\n",
                                                "status" : 0
                                            }
                                        },
                                        "result" : "\"Hello World\"\r\n\n",
                                        "status" : 0
                                    }
                                },
                                "status" : 0,
                                "result" : "\"Hello World\"\r\n\n\n"
                            }
                        },
                        "map" : {
                            "content" : "{\"nodes\":[{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":40,\"y\":150},\"angle\":0,\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\",\"embeds\":\"\",\"z\":1,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"Start\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/pmAgent.png\"}}},{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":350,\"y\":310},\"angle\":0,\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\",\"embeds\":\"\",\"z\":2,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"CommandLine\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/CommandLine.png\"}}},{\"type\":\"basic.Rect\",\"position\":{\"x\":300,\"y\":150},\"size\":{\"width\":0.1,\"height\":0.1},\"angle\":0,\"id\":\"7f33a380-2dc1-4899-a1c1-51c1be84ec10\",\"z\":5,\"attrs\":{}}],\"links\":[{\"type\":\"link\",\"source\":{\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\"},\"target\":{\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\"},\"router\":{\"name\":\"manhattan\"},\"connector\":{\"name\":\"rounded\"},\"id\":\"9f0c041e-6c05-410a-8b7a-e23138a9ffd5\",\"z\":4,\"vertices\":[{\"x\":220,\"y\":340},{\"x\":220,\"y\":340},{\"x\":240,\"y\":340},{\"x\":240,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340}],\"attrs\":{\".connection\":{\"stroke\":\"#333333\",\"stroke-width\":3},\".marker-target\":{\"fill\":\"#333333\",\"d\":\"M 10 0 L 0 5 L 10 10 z\"}}},{\"type\":\"link\",\"source\":{\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\"},\"target\":{\"id\":\"7f33a380-2dc1-4899-a1c1-51c1be84ec10\"},\"router\":{\"name\":\"manhattan\"},\"connector\":{\"name\":\"rounded\"},\"id\":\"99f07f28-d496-4472-8d32-ef54bc770f97\",\"z\":6,\"attrs\":{\".connection\":{\"stroke\":\"#333333\",\"stroke-width\":3},\".marker-target\":{\"fill\":\"#333333\",\"d\":\"M 10 0 L 0 5 L 10 10 z\"}}}]}",
                            "nodes" : {
                                "Start" : {
                                    "id" : "fd1000fc-11cc-4261-9dcd-b2b9a53a3131",
                                    "name" : "Start",
                                    "type" : "startNode",
                                    "serverUrl" : "",
                                    "attributes" : {}
                                },
                                "CommandLine" : {
                                    "id" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                    "type" : "CommandLine",
                                    "name" : "CommandLine",
                                    "serverUrl" : "localhost:8100",
                                    "attributes" : {}
                                }
                            },
                            "links" : [ 
                                {
                                    "id" : "9f0c041e-6c05-410a-8b7a-e23138a9ffd5",
                                    "sourceId" : "fd1000fc-11cc-4261-9dcd-b2b9a53a3131",
                                    "targetId" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                    "processes" : [ 
                                        {
                                            "name" : "HelloWorld",
                                            "description" : "",
                                            "order" : 0,
                                            "default_execution" : false,
                                            "mandatory" : false,
                                            "actions" : [ 
                                                {
                                                    "server" : {
                                                        "type" : "CommandLine",
                                                        "name" : "CommandLine",
                                                        "id" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                                        "url" : "localhost:8100"
                                                    },
                                                    "method" : {
                                                        "params" : [ 
                                                            {
                                                                "name" : "COMMANDS",
                                                                "viewName" : "command",
                                                                "type" : "string",
                                                                "method" : "5720f24fa02b766c1cbf8d2e",
                                                                "options" : [],
                                                                "createdAt" : "2016-04-27T17:09:35.909Z",
                                                                "updatedAt" : "2016-04-27T17:09:35.909Z",
                                                                "id" : "5720f24fa02b766c1cbf8d3c"
                                                            }
                                                        ],
                                                        "agent" : {
                                                            "type" : "CommandLine",
                                                            "imgUrl" : "images/controls/CommandLine.png",
                                                            "createdAt" : "2016-04-27T17:09:35.253Z",
                                                            "updatedAt" : "2016-04-27T17:09:35.560Z",
                                                            "id" : "5720f24fa02b766c1cbf8d2d"
                                                        },
                                                        "name" : "execute",
                                                        "viewName" : "execute command",
                                                        "actionString" : "COMMANDS",
                                                        "createdAt" : "2016-04-27T17:09:35.564Z",
                                                        "updatedAt" : "2016-04-27T17:09:35.745Z",
                                                        "id" : "5720f24fa02b766c1cbf8d2e"
                                                    },
                                                    "params" : {
                                                        "COMMANDS" : {
                                                            "text" : "echo \"Hello World\""
                                                        }
                                                    },
                                                    "name" : "echo",
                                                    "timeout" : 0,
                                                    "timeunit" : "1",
                                                    "retries" : 0,
                                                    "mandatory" : false,
                                                    "suspend" : false,
                                                    "result" : "",
                                                    "lastUpdate" : "Wed Apr 27 2016 22:47:12 GMT+0300 (שעון קיץ ירושלים)"
                                                }
                                            ],
                                            "result" : "",
                                            "inside" : true
                                        }
                                    ],
                                    "result" : "",
                                    "filterAgent" : false,
                                    "filterAgentCode" : "filterAgent();"
                                }
                            ],
                            "code" : ""
                        },
                        "date" : "2016-04-27T20:10:18.761Z"
                    }
                ],
                "status" : 2
            }, 
            {
                "date" : "2016-05-16T20:55:37.599Z"
                "patches" : [ 
                    {
                        "op" : "replace",
                        "path" : "/content",
                        "value" : "{\"nodes\":[{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":40,\"y\":150},\"angle\":0,\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\",\"embeds\":\"\",\"z\":1,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"Start\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/pmAgent.png\"}}},{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":350,\"y\":310},\"angle\":0,\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\",\"embeds\":\"\",\"z\":2,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"CommandLine\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/CommandLine.png\"}}},{\"type\":\"basic.Rect\",\"position\":{\"x\":300,\"y\":150},\"size\":{\"width\":0.1,\"height\":0.1},\"angle\":0,\"id\":\"7f33a380-2dc1-4899-a1c1-51c1be84ec10\",\"z\":5,\"attrs\":{}}],\"links\":[{\"type\":\"link\",\"source\":{\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\"},\"target\":{\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\"},\"router\":{\"name\":\"manhattan\"},\"connector\":{\"name\":\"rounded\"},\"id\":\"9f0c041e-6c05-410a-8b7a-e23138a9ffd5\",\"z\":4,\"vertices\":[{\"x\":220,\"y\":340},{\"x\":220,\"y\":340},{\"x\":240,\"y\":340},{\"x\":240,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340}],\"attrs\":{\".connection\":{\"stroke\":\"#333333\",\"stroke-width\":3},\".marker-target\":{\"fill\":\"#333333\",\"d\":\"M 10 0 L 0 5 L 10 10 z\"}}}]}"
                    }
                ],
                "executions" : [ 
                    {
                        "log" : "---\n  name: \"simpleCli\"\n  version: 12\n  date: \"Mon May 16 2016 23:55:38 GMT+0300 (שעון קיץ ירושלים)\"\n  Linux-Agent2: \n    processes: \n      HelloWorld: \n        name: \"HelloWorld\"\n        actions: \n          echo: \n            name: \"echo\"\n            baseAgent: \n              name: \"Linux-Agent2\"\n              url: \"http://localhost:8091\"\n            result: \"\\\"Hello World\\\"\\r\\n\"\n            status: 0\n        result: \"\\\"Hello World\\\"\\r\\n\\n\"\n        status: 0\n    status: 0\n    result: \"\\\"Hello World\\\"\\r\\n\\n\\n\"\n  Linux-Agent1: \n    processes: \n      HelloWorld: \n        name: \"HelloWorld\"\n        actions: \n          echo: \n            name: \"echo\"\n            baseAgent: \n              name: \"Linux-Agent1\"\n              url: \"http://localhost:8090\"\n            result: \"\\\"Hello World\\\"\\r\\n\"\n            status: 0\n        result: \"\\\"Hello World\\\"\\r\\n\\n\"\n        status: 0\n    status: 0\n    result: \"\\\"Hello World\\\"\\r\\n\\n\\n\"\n  Windows-Agent3: \n    processes: \n      HelloWorld: \n        name: \"HelloWorld\"\n        actions: \n          echo: \n            name: \"echo\"\n            baseAgent: \n              name: \"Windows-Agent3\"\n              url: \"http://localhost:8092\"\n            result: \"\\\"Hello World\\\"\\r\\n\"\n            status: 0\n        result: \"\\\"Hello World\\\"\\r\\n\\n\"\n        status: 0\n    status: 0\n    result: \"\\\"Hello World\\\"\\r\\n\\n\\n\"\n",
                        "resObj" : {
                            "name" : "simpleCli",
                            "version" : 12,
                            "date" : "Mon May 16 2016 23:55:38 GMT+0300 (שעון קיץ ירושלים)",
                            "Linux-Agent2" : {
                                "processes" : {
                                    "HelloWorld" : {
                                        "name" : "HelloWorld",
                                        "actions" : {
                                            "echo" : {
                                                "name" : "echo",
                                                "baseAgent" : {
                                                    "name" : "Linux-Agent2",
                                                    "url" : "http://localhost:8091"
                                                },
                                                "result" : "\"Hello World\"\r\n",
                                                "status" : 0
                                            }
                                        },
                                        "result" : "\"Hello World\"\r\n\n",
                                        "status" : 0
                                    }
                                },
                                "status" : 0,
                                "result" : "\"Hello World\"\r\n\n\n"
                            },
                            "Linux-Agent1" : {
                                "processes" : {
                                    "HelloWorld" : {
                                        "name" : "HelloWorld",
                                        "actions" : {
                                            "echo" : {
                                                "name" : "echo",
                                                "baseAgent" : {
                                                    "name" : "Linux-Agent1",
                                                    "url" : "http://localhost:8090"
                                                },
                                                "result" : "\"Hello World\"\r\n",
                                                "status" : 0
                                            }
                                        },
                                        "result" : "\"Hello World\"\r\n\n",
                                        "status" : 0
                                    }
                                },
                                "status" : 0,
                                "result" : "\"Hello World\"\r\n\n\n"
                            },
                            "Windows-Agent3" : {
                                "processes" : {
                                    "HelloWorld" : {
                                        "name" : "HelloWorld",
                                        "actions" : {
                                            "echo" : {
                                                "name" : "echo",
                                                "baseAgent" : {
                                                    "name" : "Windows-Agent3",
                                                    "url" : "http://localhost:8092"
                                                },
                                                "result" : "\"Hello World\"\r\n",
                                                "status" : 0
                                            }
                                        },
                                        "result" : "\"Hello World\"\r\n\n",
                                        "status" : 0
                                    }
                                },
                                "status" : 0,
                                "result" : "\"Hello World\"\r\n\n\n"
                            }
                        },
                        "map" : {
                            "content" : "{\"nodes\":[{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":40,\"y\":150},\"angle\":0,\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\",\"embeds\":\"\",\"z\":1,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"Start\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/pmAgent.png\"}}},{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":350,\"y\":310},\"angle\":0,\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\",\"embeds\":\"\",\"z\":2,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"CommandLine\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/CommandLine.png\"}}},{\"type\":\"basic.Rect\",\"position\":{\"x\":300,\"y\":150},\"size\":{\"width\":0.1,\"height\":0.1},\"angle\":0,\"id\":\"7f33a380-2dc1-4899-a1c1-51c1be84ec10\",\"z\":5,\"attrs\":{}}],\"links\":[{\"type\":\"link\",\"source\":{\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\"},\"target\":{\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\"},\"router\":{\"name\":\"manhattan\"},\"connector\":{\"name\":\"rounded\"},\"id\":\"9f0c041e-6c05-410a-8b7a-e23138a9ffd5\",\"z\":4,\"vertices\":[{\"x\":220,\"y\":340},{\"x\":220,\"y\":340},{\"x\":240,\"y\":340},{\"x\":240,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340}],\"attrs\":{\".connection\":{\"stroke\":\"#333333\",\"stroke-width\":3},\".marker-target\":{\"fill\":\"#333333\",\"d\":\"M 10 0 L 0 5 L 10 10 z\"}}}]}",
                            "nodes" : {
                                "Start" : {
                                    "id" : "fd1000fc-11cc-4261-9dcd-b2b9a53a3131",
                                    "name" : "Start",
                                    "type" : "startNode",
                                    "serverUrl" : "",
                                    "attributes" : {}
                                },
                                "CommandLine" : {
                                    "id" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                    "type" : "CommandLine",
                                    "name" : "CommandLine",
                                    "serverUrl" : "localhost:8100",
                                    "attributes" : {}
                                }
                            },
                            "links" : [ 
                                {
                                    "id" : "9f0c041e-6c05-410a-8b7a-e23138a9ffd5",
                                    "sourceId" : "fd1000fc-11cc-4261-9dcd-b2b9a53a3131",
                                    "targetId" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                    "processes" : [ 
                                        {
                                            "name" : "HelloWorld",
                                            "description" : "",
                                            "order" : 0,
                                            "default_execution" : false,
                                            "mandatory" : false,
                                            "actions" : [ 
                                                {
                                                    "server" : {
                                                        "type" : "CommandLine",
                                                        "name" : "CommandLine",
                                                        "id" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                                        "url" : "localhost:8100"
                                                    },
                                                    "method" : {
                                                        "params" : [ 
                                                            {
                                                                "name" : "COMMANDS",
                                                                "viewName" : "command",
                                                                "type" : "string",
                                                                "method" : "5720f24fa02b766c1cbf8d2e",
                                                                "options" : [],
                                                                "createdAt" : "2016-04-27T17:09:35.909Z",
                                                                "updatedAt" : "2016-04-27T17:09:35.909Z",
                                                                "id" : "5720f24fa02b766c1cbf8d3c"
                                                            }
                                                        ],
                                                        "agent" : {
                                                            "type" : "CommandLine",
                                                            "imgUrl" : "images/controls/CommandLine.png",
                                                            "createdAt" : "2016-04-27T17:09:35.253Z",
                                                            "updatedAt" : "2016-04-27T17:09:35.560Z",
                                                            "id" : "5720f24fa02b766c1cbf8d2d"
                                                        },
                                                        "name" : "execute",
                                                        "viewName" : "execute command",
                                                        "actionString" : "COMMANDS",
                                                        "createdAt" : "2016-04-27T17:09:35.564Z",
                                                        "updatedAt" : "2016-04-27T17:09:35.745Z",
                                                        "id" : "5720f24fa02b766c1cbf8d2e"
                                                    },
                                                    "params" : {
                                                        "COMMANDS" : {
                                                            "text" : "echo \"Hello World\""
                                                        }
                                                    },
                                                    "name" : "echo",
                                                    "timeout" : 0,
                                                    "timeunit" : "1",
                                                    "retries" : 0,
                                                    "mandatory" : false,
                                                    "suspend" : false,
                                                    "result" : "",
                                                    "lastUpdate" : "Wed Apr 27 2016 22:47:12 GMT+0300 (שעון קיץ ירושלים)"
                                                }
                                            ],
                                            "result" : "",
                                            "inside" : true
                                        }
                                    ],
                                    "result" : "",
                                    "filterAgent" : false,
                                    "filterAgentCode" : "filterAgent();"
                                }
                            ],
                            "code" : ""
                        },
                        "date" : "2016-05-16T20:55:39.733Z"
                    }, 
                    {
                        "log" : "---\n  name: \"simpleCli\"\n  version: 12\n  date: \"Tue Jun 14 2016 21:03:10 GMT+0300 (שעון קיץ ירושלים)\"\n  Linux-Agent1: \n    processes: \n      HelloWorld: \n        name: \"HelloWorld\"\n        actions: \n          echo: \n            name: \"echo\"\n            baseAgent: \n              name: \"Linux-Agent1\"\n              url: \"http://localhost:8090\"\n            result: \"\\\"Hello World\\\"\\r\\n\"\n            status: 0\n        result: \"\\\"Hello World\\\"\\r\\n\\n\"\n        status: 0\n    status: 0\n    result: \"\\\"Hello World\\\"\\r\\n\\n\\n\"\n",
                        "resObj" : {
                            "name" : "simpleCli",
                            "version" : 12,
                            "date" : "Tue Jun 14 2016 21:03:10 GMT+0300 (שעון קיץ ירושלים)",
                            "Linux-Agent1" : {
                                "processes" : {
                                    "HelloWorld" : {
                                        "name" : "HelloWorld",
                                        "actions" : {
                                            "echo" : {
                                                "name" : "echo",
                                                "baseAgent" : {
                                                    "name" : "Linux-Agent1",
                                                    "url" : "http://localhost:8090"
                                                },
                                                "result" : "\"Hello World\"\r\n",
                                                "status" : 0
                                            }
                                        },
                                        "result" : "\"Hello World\"\r\n\n",
                                        "status" : 0
                                    }
                                },
                                "status" : 0,
                                "result" : "\"Hello World\"\r\n\n\n"
                            }
                        },
                        "map" : {
                            "content" : "{\"nodes\":[{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":40,\"y\":150},\"angle\":0,\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\",\"embeds\":\"\",\"z\":1,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"Start\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/pmAgent.png\"}}},{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":350,\"y\":310},\"angle\":0,\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\",\"embeds\":\"\",\"z\":2,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"CommandLine\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/CommandLine.png\"}}},{\"type\":\"basic.Rect\",\"position\":{\"x\":300,\"y\":150},\"size\":{\"width\":0.1,\"height\":0.1},\"angle\":0,\"id\":\"7f33a380-2dc1-4899-a1c1-51c1be84ec10\",\"z\":5,\"attrs\":{}}],\"links\":[{\"type\":\"link\",\"source\":{\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\"},\"target\":{\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\"},\"router\":{\"name\":\"manhattan\"},\"connector\":{\"name\":\"rounded\"},\"id\":\"9f0c041e-6c05-410a-8b7a-e23138a9ffd5\",\"z\":4,\"vertices\":[{\"x\":220,\"y\":340},{\"x\":220,\"y\":340},{\"x\":240,\"y\":340},{\"x\":240,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340}],\"attrs\":{\".connection\":{\"stroke\":\"#333333\",\"stroke-width\":3},\".marker-target\":{\"fill\":\"#333333\",\"d\":\"M 10 0 L 0 5 L 10 10 z\"}}}]}",
                            "nodes" : {
                                "Start" : {
                                    "id" : "fd1000fc-11cc-4261-9dcd-b2b9a53a3131",
                                    "name" : "Start",
                                    "type" : "startNode",
                                    "serverUrl" : "",
                                    "attributes" : {}
                                },
                                "CommandLine" : {
                                    "id" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                    "type" : "CommandLine",
                                    "name" : "CommandLine",
                                    "serverUrl" : "localhost:8100",
                                    "attributes" : {}
                                }
                            },
                            "links" : [ 
                                {
                                    "id" : "9f0c041e-6c05-410a-8b7a-e23138a9ffd5",
                                    "sourceId" : "fd1000fc-11cc-4261-9dcd-b2b9a53a3131",
                                    "targetId" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                    "processes" : [ 
                                        {
                                            "name" : "HelloWorld",
                                            "description" : "",
                                            "order" : 0,
                                            "default_execution" : false,
                                            "mandatory" : false,
                                            "actions" : [ 
                                                {
                                                    "server" : {
                                                        "type" : "CommandLine",
                                                        "name" : "CommandLine",
                                                        "id" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                                        "url" : "localhost:8100"
                                                    },
                                                    "method" : {
                                                        "params" : [ 
                                                            {
                                                                "name" : "COMMANDS",
                                                                "viewName" : "command",
                                                                "type" : "string",
                                                                "method" : "5720f24fa02b766c1cbf8d2e",
                                                                "options" : [],
                                                                "createdAt" : "2016-04-27T17:09:35.909Z",
                                                                "updatedAt" : "2016-04-27T17:09:35.909Z",
                                                                "id" : "5720f24fa02b766c1cbf8d3c"
                                                            }
                                                        ],
                                                        "agent" : {
                                                            "type" : "CommandLine",
                                                            "imgUrl" : "images/controls/CommandLine.png",
                                                            "createdAt" : "2016-04-27T17:09:35.253Z",
                                                            "updatedAt" : "2016-04-27T17:09:35.560Z",
                                                            "id" : "5720f24fa02b766c1cbf8d2d"
                                                        },
                                                        "name" : "execute",
                                                        "viewName" : "execute command",
                                                        "actionString" : "COMMANDS",
                                                        "createdAt" : "2016-04-27T17:09:35.564Z",
                                                        "updatedAt" : "2016-04-27T17:09:35.745Z",
                                                        "id" : "5720f24fa02b766c1cbf8d2e"
                                                    },
                                                    "params" : {
                                                        "COMMANDS" : {
                                                            "text" : "echo \"Hello World\""
                                                        }
                                                    },
                                                    "name" : "echo",
                                                    "timeout" : 0,
                                                    "timeunit" : "1",
                                                    "retries" : 0,
                                                    "mandatory" : false,
                                                    "suspend" : false,
                                                    "result" : "",
                                                    "lastUpdate" : "Wed Apr 27 2016 22:47:12 GMT+0300 (שעון קיץ ירושלים)"
                                                }
                                            ],
                                            "result" : "",
                                            "inside" : true
                                        }
                                    ],
                                    "result" : "",
                                    "filterAgent" : false,
                                    "filterAgentCode" : "filterAgent();"
                                }
                            ],
                            "code" : ""
                        },
                        "date" : "2016-06-14T18:03:11.177Z"
                    }
                ],
                "status" : 2
            }, 
            {
                "date" : "2016-06-14T18:08:51.527Z"
                "patches" : [ 
                    {
                        "op" : "replace",
                        "path" : "/links/0/processes/0/actions/0/lastUpdate",
                        "value" : "Tue Jun 14 2016 21:08:39 GMT+0300 (שעון קיץ ירושלים)"
                    }, 
                    {
                        "op" : "replace",
                        "path" : "/content",
                        "value" : "{\"nodes\":[{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":40,\"y\":150},\"angle\":0,\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\",\"embeds\":\"\",\"z\":1,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"Start\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/pmAgent.png\"}}},{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":350,\"y\":310},\"angle\":0,\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\",\"embeds\":\"\",\"z\":2,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"CommandLine\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/CommandLine.png\"}}},{\"type\":\"basic.Rect\",\"position\":{\"x\":300,\"y\":150},\"size\":{\"width\":0.1,\"height\":0.1},\"angle\":0,\"id\":\"7f33a380-2dc1-4899-a1c1-51c1be84ec10\",\"z\":5,\"attrs\":{}}],\"links\":[{\"type\":\"link\",\"source\":{\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\"},\"target\":{\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\"},\"router\":{\"name\":\"manhattan\"},\"connector\":{\"name\":\"rounded\"},\"id\":\"9f0c041e-6c05-410a-8b7a-e23138a9ffd5\",\"z\":4,\"vertices\":[{\"x\":220,\"y\":340},{\"x\":220,\"y\":340},{\"x\":240,\"y\":340},{\"x\":240,\"y\":340},{\"x\":240,\"y\":340},{\"x\":240,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340}],\"attrs\":{\".connection\":{\"stroke\":\"#333333\",\"stroke-width\":3},\".marker-target\":{\"fill\":\"#333333\",\"d\":\"M 10 0 L 0 5 L 10 10 z\"}}}]}"
                    }
                ],
                "executions" : [ 
                    {
                        "log" : "---\n  name: \"simpleCli\"\n  version: 13\n  date: \"Tue Jun 14 2016 21:08:52 GMT+0300 (שעון קיץ ירושלים)\"\n  Linux-Agent1: \n    processes: \n      HelloWorld: \n        name: \"HelloWorld\"\n        actions: \n          echo: \n            name: \"echo\"\n            baseAgent: \n              name: \"Linux-Agent1\"\n              url: \"http://localhost:8090\"\n            result: \"\\\"Hello World\\\"\\r\\n\"\n            status: 0\n        result: \"\\\"Hello World\\\"\\r\\n\\n\"\n        status: 0\n    status: 0\n    result: \"\\\"Hello World\\\"\\r\\n\\n\\n\"\n",
                        "resObj" : {
                            "name" : "simpleCli",
                            "version" : 13,
                            "date" : "Tue Jun 14 2016 21:08:52 GMT+0300 (שעון קיץ ירושלים)",
                            "Linux-Agent1" : {
                                "processes" : {
                                    "HelloWorld" : {
                                        "name" : "HelloWorld",
                                        "actions" : {
                                            "echo" : {
                                                "name" : "echo",
                                                "baseAgent" : {
                                                    "name" : "Linux-Agent1",
                                                    "url" : "http://localhost:8090"
                                                },
                                                "result" : "\"Hello World\"\r\n",
                                                "status" : 0
                                            }
                                        },
                                        "result" : "\"Hello World\"\r\n\n",
                                        "status" : 0
                                    }
                                },
                                "status" : 0,
                                "result" : "\"Hello World\"\r\n\n\n"
                            }
                        },
                        "map" : {
                            "content" : "{\"nodes\":[{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":40,\"y\":150},\"angle\":0,\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\",\"embeds\":\"\",\"z\":1,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"Start\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/pmAgent.png\"}}},{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":350,\"y\":310},\"angle\":0,\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\",\"embeds\":\"\",\"z\":2,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"CommandLine\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/CommandLine.png\"}}},{\"type\":\"basic.Rect\",\"position\":{\"x\":300,\"y\":150},\"size\":{\"width\":0.1,\"height\":0.1},\"angle\":0,\"id\":\"7f33a380-2dc1-4899-a1c1-51c1be84ec10\",\"z\":5,\"attrs\":{}}],\"links\":[{\"type\":\"link\",\"source\":{\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\"},\"target\":{\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\"},\"router\":{\"name\":\"manhattan\"},\"connector\":{\"name\":\"rounded\"},\"id\":\"9f0c041e-6c05-410a-8b7a-e23138a9ffd5\",\"z\":4,\"vertices\":[{\"x\":220,\"y\":340},{\"x\":220,\"y\":340},{\"x\":240,\"y\":340},{\"x\":240,\"y\":340},{\"x\":240,\"y\":340},{\"x\":240,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340}],\"attrs\":{\".connection\":{\"stroke\":\"#333333\",\"stroke-width\":3},\".marker-target\":{\"fill\":\"#333333\",\"d\":\"M 10 0 L 0 5 L 10 10 z\"}}}]}",
                            "nodes" : {
                                "Start" : {
                                    "id" : "fd1000fc-11cc-4261-9dcd-b2b9a53a3131",
                                    "name" : "Start",
                                    "type" : "startNode",
                                    "serverUrl" : "",
                                    "attributes" : {}
                                },
                                "CommandLine" : {
                                    "id" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                    "type" : "CommandLine",
                                    "name" : "CommandLine",
                                    "serverUrl" : "localhost:8100",
                                    "attributes" : {}
                                }
                            },
                            "links" : [ 
                                {
                                    "id" : "9f0c041e-6c05-410a-8b7a-e23138a9ffd5",
                                    "sourceId" : "fd1000fc-11cc-4261-9dcd-b2b9a53a3131",
                                    "targetId" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                    "processes" : [ 
                                        {
                                            "name" : "HelloWorld",
                                            "description" : "",
                                            "order" : 0,
                                            "default_execution" : false,
                                            "mandatory" : false,
                                            "actions" : [ 
                                                {
                                                    "server" : {
                                                        "type" : "CommandLine",
                                                        "name" : "CommandLine",
                                                        "id" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                                        "url" : "localhost:8100"
                                                    },
                                                    "method" : {
                                                        "params" : [ 
                                                            {
                                                                "name" : "COMMANDS",
                                                                "viewName" : "command",
                                                                "type" : "string",
                                                                "method" : "5720f24fa02b766c1cbf8d2e",
                                                                "options" : [],
                                                                "createdAt" : "2016-04-27T17:09:35.909Z",
                                                                "updatedAt" : "2016-04-27T17:09:35.909Z",
                                                                "id" : "5720f24fa02b766c1cbf8d3c"
                                                            }
                                                        ],
                                                        "agent" : {
                                                            "type" : "CommandLine",
                                                            "imgUrl" : "images/controls/CommandLine.png",
                                                            "createdAt" : "2016-04-27T17:09:35.253Z",
                                                            "updatedAt" : "2016-04-27T17:09:35.560Z",
                                                            "id" : "5720f24fa02b766c1cbf8d2d"
                                                        },
                                                        "name" : "execute",
                                                        "viewName" : "execute command",
                                                        "actionString" : "COMMANDS",
                                                        "createdAt" : "2016-04-27T17:09:35.564Z",
                                                        "updatedAt" : "2016-04-27T17:09:35.745Z",
                                                        "id" : "5720f24fa02b766c1cbf8d2e"
                                                    },
                                                    "params" : {
                                                        "COMMANDS" : {
                                                            "text" : "echo \"Hello World\""
                                                        }
                                                    },
                                                    "name" : "echo",
                                                    "timeout" : 0,
                                                    "timeunit" : "1",
                                                    "retries" : 0,
                                                    "mandatory" : false,
                                                    "suspend" : false,
                                                    "result" : "",
                                                    "lastUpdate" : "Tue Jun 14 2016 21:08:39 GMT+0300 (שעון קיץ ירושלים)"
                                                }
                                            ],
                                            "result" : "",
                                            "inside" : true
                                        }
                                    ],
                                    "result" : "",
                                    "filterAgent" : false,
                                    "filterAgentCode" : "filterAgent();"
                                }
                            ],
                            "code" : ""
                        },
                        "date" : "2016-06-14T18:08:53.154Z"
                    }, 
                    {
                        "log" : "---\n  name: \"simpleCli\"\n  version: 13\n  date: \"Tue Jun 14 2016 21:09:56 GMT+0300 (שעון קיץ ירושלים)\"\n  Linux-Agent2: \n    processes: \n      HelloWorld: \n        name: \"HelloWorld\"\n        actions: \n          echo: \n            name: \"echo\"\n            baseAgent: \n              name: \"Linux-Agent2\"\n              url: \"http://localhost:8091\"\n            result: \"\\\"Hello World\\\"\\r\\n\"\n            status: 0\n        result: \"\\\"Hello World\\\"\\r\\n\\n\"\n        status: 0\n    status: 0\n    result: \"\\\"Hello World\\\"\\r\\n\\n\\n\"\n  Linux-Agent1: \n    processes: \n      HelloWorld: \n        name: \"HelloWorld\"\n        actions: \n          echo: \n            name: \"echo\"\n            baseAgent: \n              name: \"Linux-Agent1\"\n              url: \"http://localhost:8090\"\n            result: \"\\\"Hello World\\\"\\r\\n\"\n            status: 0\n        result: \"\\\"Hello World\\\"\\r\\n\\n\"\n        status: 0\n    status: 0\n    result: \"\\\"Hello World\\\"\\r\\n\\n\\n\"\n  Windows-Agent3: \n    processes: \n      HelloWorld: \n        name: \"HelloWorld\"\n        actions: \n          echo: \n            name: \"echo\"\n            baseAgent: \n              name: \"Windows-Agent3\"\n              url: \"http://localhost:8092\"\n            result: \"\\\"Hello World\\\"\\r\\n\"\n            status: 0\n        result: \"\\\"Hello World\\\"\\r\\n\\n\"\n        status: 0\n    status: 0\n    result: \"\\\"Hello World\\\"\\r\\n\\n\\n\"\n",
                        "resObj" : {
                            "name" : "simpleCli",
                            "version" : 13,
                            "date" : "Tue Jun 14 2016 21:09:56 GMT+0300 (שעון קיץ ירושלים)",
                            "Linux-Agent2" : {
                                "processes" : {
                                    "HelloWorld" : {
                                        "name" : "HelloWorld",
                                        "actions" : {
                                            "echo" : {
                                                "name" : "echo",
                                                "baseAgent" : {
                                                    "name" : "Linux-Agent2",
                                                    "url" : "http://localhost:8091"
                                                },
                                                "result" : "\"Hello World\"\r\n",
                                                "status" : 0
                                            }
                                        },
                                        "result" : "\"Hello World\"\r\n\n",
                                        "status" : 0
                                    }
                                },
                                "status" : 0,
                                "result" : "\"Hello World\"\r\n\n\n"
                            },
                            "Linux-Agent1" : {
                                "processes" : {
                                    "HelloWorld" : {
                                        "name" : "HelloWorld",
                                        "actions" : {
                                            "echo" : {
                                                "name" : "echo",
                                                "baseAgent" : {
                                                    "name" : "Linux-Agent1",
                                                    "url" : "http://localhost:8090"
                                                },
                                                "result" : "\"Hello World\"\r\n",
                                                "status" : 0
                                            }
                                        },
                                        "result" : "\"Hello World\"\r\n\n",
                                        "status" : 0
                                    }
                                },
                                "status" : 0,
                                "result" : "\"Hello World\"\r\n\n\n"
                            },
                            "Windows-Agent3" : {
                                "processes" : {
                                    "HelloWorld" : {
                                        "name" : "HelloWorld",
                                        "actions" : {
                                            "echo" : {
                                                "name" : "echo",
                                                "baseAgent" : {
                                                    "name" : "Windows-Agent3",
                                                    "url" : "http://localhost:8092"
                                                },
                                                "result" : "\"Hello World\"\r\n",
                                                "status" : 0
                                            }
                                        },
                                        "result" : "\"Hello World\"\r\n\n",
                                        "status" : 0
                                    }
                                },
                                "status" : 0,
                                "result" : "\"Hello World\"\r\n\n\n"
                            }
                        },
                        "map" : {
                            "content" : "{\"nodes\":[{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":40,\"y\":150},\"angle\":0,\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\",\"embeds\":\"\",\"z\":1,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"Start\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/pmAgent.png\"}}},{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":350,\"y\":310},\"angle\":0,\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\",\"embeds\":\"\",\"z\":2,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"CommandLine\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/CommandLine.png\"}}},{\"type\":\"basic.Rect\",\"position\":{\"x\":300,\"y\":150},\"size\":{\"width\":0.1,\"height\":0.1},\"angle\":0,\"id\":\"7f33a380-2dc1-4899-a1c1-51c1be84ec10\",\"z\":5,\"attrs\":{}}],\"links\":[{\"type\":\"link\",\"source\":{\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\"},\"target\":{\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\"},\"router\":{\"name\":\"manhattan\"},\"connector\":{\"name\":\"rounded\"},\"id\":\"9f0c041e-6c05-410a-8b7a-e23138a9ffd5\",\"z\":4,\"vertices\":[{\"x\":220,\"y\":340},{\"x\":220,\"y\":340},{\"x\":240,\"y\":340},{\"x\":240,\"y\":340},{\"x\":240,\"y\":340},{\"x\":240,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340}],\"attrs\":{\".connection\":{\"stroke\":\"#333333\",\"stroke-width\":3},\".marker-target\":{\"fill\":\"#333333\",\"d\":\"M 10 0 L 0 5 L 10 10 z\"}}}]}",
                            "nodes" : {
                                "Start" : {
                                    "id" : "fd1000fc-11cc-4261-9dcd-b2b9a53a3131",
                                    "name" : "Start",
                                    "type" : "startNode",
                                    "serverUrl" : "",
                                    "attributes" : {}
                                },
                                "CommandLine" : {
                                    "id" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                    "type" : "CommandLine",
                                    "name" : "CommandLine",
                                    "serverUrl" : "localhost:8100",
                                    "attributes" : {}
                                }
                            },
                            "links" : [ 
                                {
                                    "id" : "9f0c041e-6c05-410a-8b7a-e23138a9ffd5",
                                    "sourceId" : "fd1000fc-11cc-4261-9dcd-b2b9a53a3131",
                                    "targetId" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                    "processes" : [ 
                                        {
                                            "name" : "HelloWorld",
                                            "description" : "",
                                            "order" : 0,
                                            "default_execution" : false,
                                            "mandatory" : false,
                                            "actions" : [ 
                                                {
                                                    "server" : {
                                                        "type" : "CommandLine",
                                                        "name" : "CommandLine",
                                                        "id" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                                        "url" : "localhost:8100"
                                                    },
                                                    "method" : {
                                                        "params" : [ 
                                                            {
                                                                "name" : "COMMANDS",
                                                                "viewName" : "command",
                                                                "type" : "string",
                                                                "method" : "5720f24fa02b766c1cbf8d2e",
                                                                "options" : [],
                                                                "createdAt" : "2016-04-27T17:09:35.909Z",
                                                                "updatedAt" : "2016-04-27T17:09:35.909Z",
                                                                "id" : "5720f24fa02b766c1cbf8d3c"
                                                            }
                                                        ],
                                                        "agent" : {
                                                            "type" : "CommandLine",
                                                            "imgUrl" : "images/controls/CommandLine.png",
                                                            "createdAt" : "2016-04-27T17:09:35.253Z",
                                                            "updatedAt" : "2016-04-27T17:09:35.560Z",
                                                            "id" : "5720f24fa02b766c1cbf8d2d"
                                                        },
                                                        "name" : "execute",
                                                        "viewName" : "execute command",
                                                        "actionString" : "COMMANDS",
                                                        "createdAt" : "2016-04-27T17:09:35.564Z",
                                                        "updatedAt" : "2016-04-27T17:09:35.745Z",
                                                        "id" : "5720f24fa02b766c1cbf8d2e"
                                                    },
                                                    "params" : {
                                                        "COMMANDS" : {
                                                            "text" : "echo \"Hello World\""
                                                        }
                                                    },
                                                    "name" : "echo",
                                                    "timeout" : 0,
                                                    "timeunit" : "1",
                                                    "retries" : 0,
                                                    "mandatory" : false,
                                                    "suspend" : false,
                                                    "result" : "",
                                                    "lastUpdate" : "Tue Jun 14 2016 21:08:39 GMT+0300 (שעון קיץ ירושלים)"
                                                }
                                            ],
                                            "result" : "",
                                            "inside" : true
                                        }
                                    ],
                                    "result" : "",
                                    "filterAgent" : false,
                                    "filterAgentCode" : "filterAgent();"
                                }
                            ],
                            "code" : ""
                        },
                        "date" : "2016-06-14T18:09:57.783Z"
                    }, 
                    {
                        "log" : "---\n  name: \"simpleCli\"\n  version: 13\n  date: \"Sun Jun 19 2016 09:40:42 GMT+0300 (שעון קיץ ירושלים)\"\n  Linux-Agent2: \n    processes: \n      HelloWorld: \n        name: \"HelloWorld\"\n        actions: \n          echo: \n            name: \"echo\"\n            baseAgent: \n              name: \"Linux-Agent2\"\n              url: \"http://localhost:8091\"\n            result: \"\\\"Hello World\\\"\\r\\n\"\n            status: 0\n        result: \"\\\"Hello World\\\"\\r\\n\\n\"\n        status: 0\n    status: 0\n    result: \"\\\"Hello World\\\"\\r\\n\\n\\n\"\n  Linux-Agent1: \n    processes: \n      HelloWorld: \n        name: \"HelloWorld\"\n        actions: \n          echo: \n            name: \"echo\"\n            baseAgent: \n              name: \"Linux-Agent1\"\n              url: \"http://localhost:8090\"\n            result: \"\\\"Hello World\\\"\\r\\n\"\n            status: 0\n        result: \"\\\"Hello World\\\"\\r\\n\\n\"\n        status: 0\n    status: 0\n    result: \"\\\"Hello World\\\"\\r\\n\\n\\n\"\n  Windows-Agent3: \n    processes: \n      HelloWorld: \n        name: \"HelloWorld\"\n        actions: \n          echo: \n            name: \"echo\"\n            baseAgent: \n              name: \"Windows-Agent3\"\n              url: \"http://localhost:8092\"\n            result: \"Error:Error: connect ECONNREFUSED 127.0.0.1:8092\"\n            status: -1\n        result: \"\"\n        status: 0\n    status: 0\n    result: \"\\n\"\n",
                        "resObj" : {
                            "name" : "simpleCli",
                            "version" : 13,
                            "date" : "Sun Jun 19 2016 09:40:42 GMT+0300 (שעון קיץ ירושלים)",
                            "Linux-Agent2" : {
                                "processes" : {
                                    "HelloWorld" : {
                                        "name" : "HelloWorld",
                                        "actions" : {
                                            "echo" : {
                                                "name" : "echo",
                                                "baseAgent" : {
                                                    "name" : "Linux-Agent2",
                                                    "url" : "http://localhost:8091"
                                                },
                                                "result" : "\"Hello World\"\r\n",
                                                "status" : 0
                                            }
                                        },
                                        "result" : "\"Hello World\"\r\n\n",
                                        "status" : 0
                                    }
                                },
                                "status" : 0,
                                "result" : "\"Hello World\"\r\n\n\n"
                            },
                            "Linux-Agent1" : {
                                "processes" : {
                                    "HelloWorld" : {
                                        "name" : "HelloWorld",
                                        "actions" : {
                                            "echo" : {
                                                "name" : "echo",
                                                "baseAgent" : {
                                                    "name" : "Linux-Agent1",
                                                    "url" : "http://localhost:8090"
                                                },
                                                "result" : "\"Hello World\"\r\n",
                                                "status" : 0
                                            }
                                        },
                                        "result" : "\"Hello World\"\r\n\n",
                                        "status" : 0
                                    }
                                },
                                "status" : 0,
                                "result" : "\"Hello World\"\r\n\n\n"
                            },
                            "Windows-Agent3" : {
                                "processes" : {
                                    "HelloWorld" : {
                                        "name" : "HelloWorld",
                                        "actions" : {
                                            "echo" : {
                                                "name" : "echo",
                                                "baseAgent" : {
                                                    "name" : "Windows-Agent3",
                                                    "url" : "http://localhost:8092"
                                                },
                                                "result" : "Error:Error: connect ECONNREFUSED 127.0.0.1:8092",
                                                "status" : -1
                                            }
                                        },
                                        "result" : "",
                                        "status" : 0
                                    }
                                },
                                "status" : 0,
                                "result" : "\n"
                            }
                        },
                        "map" : {
                            "content" : "{\"nodes\":[{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":40,\"y\":150},\"angle\":0,\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\",\"embeds\":\"\",\"z\":1,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"Start\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/pmAgent.png\"}}},{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":350,\"y\":310},\"angle\":0,\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\",\"embeds\":\"\",\"z\":2,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"CommandLine\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/CommandLine.png\"}}},{\"type\":\"basic.Rect\",\"position\":{\"x\":300,\"y\":150},\"size\":{\"width\":0.1,\"height\":0.1},\"angle\":0,\"id\":\"7f33a380-2dc1-4899-a1c1-51c1be84ec10\",\"z\":5,\"attrs\":{}}],\"links\":[{\"type\":\"link\",\"source\":{\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\"},\"target\":{\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\"},\"router\":{\"name\":\"manhattan\"},\"connector\":{\"name\":\"rounded\"},\"id\":\"9f0c041e-6c05-410a-8b7a-e23138a9ffd5\",\"z\":4,\"vertices\":[{\"x\":220,\"y\":340},{\"x\":220,\"y\":340},{\"x\":240,\"y\":340},{\"x\":240,\"y\":340},{\"x\":240,\"y\":340},{\"x\":240,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340}],\"attrs\":{\".connection\":{\"stroke\":\"#333333\",\"stroke-width\":3},\".marker-target\":{\"fill\":\"#333333\",\"d\":\"M 10 0 L 0 5 L 10 10 z\"}}}]}",
                            "nodes" : {
                                "Start" : {
                                    "id" : "fd1000fc-11cc-4261-9dcd-b2b9a53a3131",
                                    "name" : "Start",
                                    "type" : "startNode",
                                    "serverUrl" : "",
                                    "attributes" : {}
                                },
                                "CommandLine" : {
                                    "id" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                    "type" : "CommandLine",
                                    "name" : "CommandLine",
                                    "serverUrl" : "localhost:8100",
                                    "attributes" : {}
                                }
                            },
                            "links" : [ 
                                {
                                    "id" : "9f0c041e-6c05-410a-8b7a-e23138a9ffd5",
                                    "sourceId" : "fd1000fc-11cc-4261-9dcd-b2b9a53a3131",
                                    "targetId" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                    "processes" : [ 
                                        {
                                            "name" : "HelloWorld",
                                            "description" : "",
                                            "order" : 0,
                                            "default_execution" : false,
                                            "mandatory" : false,
                                            "actions" : [ 
                                                {
                                                    "server" : {
                                                        "type" : "CommandLine",
                                                        "name" : "CommandLine",
                                                        "id" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                                        "url" : "localhost:8100"
                                                    },
                                                    "method" : {
                                                        "params" : [ 
                                                            {
                                                                "name" : "COMMANDS",
                                                                "viewName" : "command",
                                                                "type" : "string",
                                                                "method" : "5720f24fa02b766c1cbf8d2e",
                                                                "options" : [],
                                                                "createdAt" : "2016-04-27T17:09:35.909Z",
                                                                "updatedAt" : "2016-04-27T17:09:35.909Z",
                                                                "id" : "5720f24fa02b766c1cbf8d3c"
                                                            }
                                                        ],
                                                        "agent" : {
                                                            "type" : "CommandLine",
                                                            "imgUrl" : "images/controls/CommandLine.png",
                                                            "createdAt" : "2016-04-27T17:09:35.253Z",
                                                            "updatedAt" : "2016-04-27T17:09:35.560Z",
                                                            "id" : "5720f24fa02b766c1cbf8d2d"
                                                        },
                                                        "name" : "execute",
                                                        "viewName" : "execute command",
                                                        "actionString" : "COMMANDS",
                                                        "createdAt" : "2016-04-27T17:09:35.564Z",
                                                        "updatedAt" : "2016-04-27T17:09:35.745Z",
                                                        "id" : "5720f24fa02b766c1cbf8d2e"
                                                    },
                                                    "params" : {
                                                        "COMMANDS" : {
                                                            "text" : "echo \"Hello World\""
                                                        }
                                                    },
                                                    "name" : "echo",
                                                    "timeout" : 0,
                                                    "timeunit" : "1",
                                                    "retries" : 0,
                                                    "mandatory" : false,
                                                    "suspend" : false,
                                                    "result" : "",
                                                    "lastUpdate" : "Tue Jun 14 2016 21:08:39 GMT+0300 (שעון קיץ ירושלים)"
                                                }
                                            ],
                                            "result" : "",
                                            "inside" : true
                                        }
                                    ],
                                    "result" : "",
                                    "filterAgent" : false,
                                    "filterAgentCode" : "filterAgent();"
                                }
                            ],
                            "code" : ""
                        },
                        "date" : "2016-06-19T06:40:44.242Z"
                    }, 
                    {
                        "log" : "---\n  name: \"simpleCli\"\n  version: 13\n  date: \"Thu Jun 23 2016 17:04:36 GMT+0300 (שעון קיץ ירושלים)\"\n  Linux-Agent1: \n    processes: \n      HelloWorld: \n        name: \"HelloWorld\"\n        actions: \n          echo: \n            name: \"echo\"\n            baseAgent: \n              name: \"Linux-Agent1\"\n              url: \"http://localhost:8090\"\n            result: \"\\\"Hello World\\\"\\r\\n\"\n            status: 0\n        result: \"\\\"Hello World\\\"\\r\\n\\n\"\n        status: 0\n    status: 0\n    result: \"\\\"Hello World\\\"\\r\\n\\n\\n\"\n",
                        "resObj" : {
                            "name" : "simpleCli",
                            "version" : 13,
                            "date" : "Thu Jun 23 2016 17:04:36 GMT+0300 (שעון קיץ ירושלים)",
                            "Linux-Agent1" : {
                                "processes" : {
                                    "HelloWorld" : {
                                        "name" : "HelloWorld",
                                        "actions" : {
                                            "echo" : {
                                                "name" : "echo",
                                                "baseAgent" : {
                                                    "name" : "Linux-Agent1",
                                                    "url" : "http://localhost:8090"
                                                },
                                                "result" : "\"Hello World\"\r\n",
                                                "status" : 0
                                            }
                                        },
                                        "result" : "\"Hello World\"\r\n\n",
                                        "status" : 0
                                    }
                                },
                                "status" : 0,
                                "result" : "\"Hello World\"\r\n\n\n"
                            }
                        },
                        "map" : {
                            "content" : "{\"nodes\":[{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":40,\"y\":150},\"angle\":0,\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\",\"embeds\":\"\",\"z\":1,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"Start\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/pmAgent.png\"}}},{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":350,\"y\":310},\"angle\":0,\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\",\"embeds\":\"\",\"z\":2,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"CommandLine\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/CommandLine.png\"}}},{\"type\":\"basic.Rect\",\"position\":{\"x\":300,\"y\":150},\"size\":{\"width\":0.1,\"height\":0.1},\"angle\":0,\"id\":\"7f33a380-2dc1-4899-a1c1-51c1be84ec10\",\"z\":5,\"attrs\":{}}],\"links\":[{\"type\":\"link\",\"source\":{\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\"},\"target\":{\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\"},\"router\":{\"name\":\"manhattan\"},\"connector\":{\"name\":\"rounded\"},\"id\":\"9f0c041e-6c05-410a-8b7a-e23138a9ffd5\",\"z\":4,\"vertices\":[{\"x\":220,\"y\":340},{\"x\":220,\"y\":340},{\"x\":240,\"y\":340},{\"x\":240,\"y\":340},{\"x\":240,\"y\":340},{\"x\":240,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340}],\"attrs\":{\".connection\":{\"stroke\":\"#333333\",\"stroke-width\":3},\".marker-target\":{\"fill\":\"#333333\",\"d\":\"M 10 0 L 0 5 L 10 10 z\"}}}]}",
                            "nodes" : {
                                "Start" : {
                                    "id" : "fd1000fc-11cc-4261-9dcd-b2b9a53a3131",
                                    "name" : "Start",
                                    "type" : "startNode",
                                    "serverUrl" : "",
                                    "attributes" : {}
                                },
                                "CommandLine" : {
                                    "id" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                    "type" : "CommandLine",
                                    "name" : "CommandLine",
                                    "serverUrl" : "localhost:8100",
                                    "attributes" : {}
                                }
                            },
                            "links" : [ 
                                {
                                    "id" : "9f0c041e-6c05-410a-8b7a-e23138a9ffd5",
                                    "sourceId" : "fd1000fc-11cc-4261-9dcd-b2b9a53a3131",
                                    "targetId" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                    "processes" : [ 
                                        {
                                            "name" : "HelloWorld",
                                            "description" : "",
                                            "order" : 0,
                                            "default_execution" : false,
                                            "mandatory" : false,
                                            "actions" : [ 
                                                {
                                                    "server" : {
                                                        "type" : "CommandLine",
                                                        "name" : "CommandLine",
                                                        "id" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                                        "url" : "localhost:8100"
                                                    },
                                                    "method" : {
                                                        "params" : [ 
                                                            {
                                                                "name" : "COMMANDS",
                                                                "viewName" : "command",
                                                                "type" : "string",
                                                                "method" : "5720f24fa02b766c1cbf8d2e",
                                                                "options" : [],
                                                                "createdAt" : "2016-04-27T17:09:35.909Z",
                                                                "updatedAt" : "2016-04-27T17:09:35.909Z",
                                                                "id" : "5720f24fa02b766c1cbf8d3c"
                                                            }
                                                        ],
                                                        "agent" : {
                                                            "type" : "CommandLine",
                                                            "imgUrl" : "images/controls/CommandLine.png",
                                                            "createdAt" : "2016-04-27T17:09:35.253Z",
                                                            "updatedAt" : "2016-04-27T17:09:35.560Z",
                                                            "id" : "5720f24fa02b766c1cbf8d2d"
                                                        },
                                                        "name" : "execute",
                                                        "viewName" : "execute command",
                                                        "actionString" : "COMMANDS",
                                                        "createdAt" : "2016-04-27T17:09:35.564Z",
                                                        "updatedAt" : "2016-04-27T17:09:35.745Z",
                                                        "id" : "5720f24fa02b766c1cbf8d2e"
                                                    },
                                                    "params" : {
                                                        "COMMANDS" : {
                                                            "text" : "echo \"Hello World\""
                                                        }
                                                    },
                                                    "name" : "echo",
                                                    "timeout" : 0,
                                                    "timeunit" : "1",
                                                    "retries" : 0,
                                                    "mandatory" : false,
                                                    "suspend" : false,
                                                    "result" : "",
                                                    "lastUpdate" : "Tue Jun 14 2016 21:08:39 GMT+0300 (שעון קיץ ירושלים)"
                                                }
                                            ],
                                            "result" : "",
                                            "inside" : true
                                        }
                                    ],
                                    "result" : "",
                                    "filterAgent" : false,
                                    "filterAgentCode" : "filterAgent();"
                                }
                            ],
                            "code" : ""
                        },
                        "date" : "2016-06-23T14:04:37.373Z"
                    }, 
                    {
                        "log" : "---\n  name: \"simpleCli\"\n  version: 13\n  date: \"Thu Jun 23 2016 17:18:17 GMT+0300 (שעון קיץ ירושלים)\"\n  Linux-Agent2: \n    processes: \n      HelloWorld: \n        name: \"HelloWorld\"\n        actions: \n          echo: \n            name: \"echo\"\n            baseAgent: \n              name: \"Linux-Agent2\"\n              url: \"http://localhost:8091\"\n            result: \"\\\"Hello World\\\"\\r\\n\"\n            status: 0\n        result: \"\\\"Hello World\\\"\\r\\n\\n\"\n        status: 0\n    status: 0\n    result: \"\\\"Hello World\\\"\\r\\n\\n\\n\"\n  Linux-Agent1: \n    processes: \n      HelloWorld: \n        name: \"HelloWorld\"\n        actions: \n          echo: \n            name: \"echo\"\n            baseAgent: \n              name: \"Linux-Agent1\"\n              url: \"http://localhost:8090\"\n            result: \"\\\"Hello World\\\"\\r\\n\"\n            status: 0\n        result: \"\\\"Hello World\\\"\\r\\n\\n\"\n        status: 0\n    status: 0\n    result: \"\\\"Hello World\\\"\\r\\n\\n\\n\"\n  Windows-Agent3: \n    processes: \n      HelloWorld: \n        name: \"HelloWorld\"\n        actions: \n          echo: \n            name: \"echo\"\n            baseAgent: \n              name: \"Windows-Agent3\"\n              url: \"http://localhost:8092\"\n            result: \"\\\"Hello World\\\"\\r\\n\"\n            status: 0\n        result: \"\\\"Hello World\\\"\\r\\n\\n\"\n        status: 0\n    status: 0\n    result: \"\\\"Hello World\\\"\\r\\n\\n\\n\"\n",
                        "resObj" : {
                            "name" : "simpleCli",
                            "version" : 13,
                            "date" : "Thu Jun 23 2016 17:18:17 GMT+0300 (שעון קיץ ירושלים)",
                            "Linux-Agent2" : {
                                "processes" : {
                                    "HelloWorld" : {
                                        "name" : "HelloWorld",
                                        "actions" : {
                                            "echo" : {
                                                "name" : "echo",
                                                "baseAgent" : {
                                                    "name" : "Linux-Agent2",
                                                    "url" : "http://localhost:8091"
                                                },
                                                "result" : "\"Hello World\"\r\n",
                                                "status" : 0
                                            }
                                        },
                                        "result" : "\"Hello World\"\r\n\n",
                                        "status" : 0
                                    }
                                },
                                "status" : 0,
                                "result" : "\"Hello World\"\r\n\n\n"
                            },
                            "Linux-Agent1" : {
                                "processes" : {
                                    "HelloWorld" : {
                                        "name" : "HelloWorld",
                                        "actions" : {
                                            "echo" : {
                                                "name" : "echo",
                                                "baseAgent" : {
                                                    "name" : "Linux-Agent1",
                                                    "url" : "http://localhost:8090"
                                                },
                                                "result" : "\"Hello World\"\r\n",
                                                "status" : 0
                                            }
                                        },
                                        "result" : "\"Hello World\"\r\n\n",
                                        "status" : 0
                                    }
                                },
                                "status" : 0,
                                "result" : "\"Hello World\"\r\n\n\n"
                            },
                            "Windows-Agent3" : {
                                "processes" : {
                                    "HelloWorld" : {
                                        "name" : "HelloWorld",
                                        "actions" : {
                                            "echo" : {
                                                "name" : "echo",
                                                "baseAgent" : {
                                                    "name" : "Windows-Agent3",
                                                    "url" : "http://localhost:8092"
                                                },
                                                "result" : "\"Hello World\"\r\n",
                                                "status" : 0
                                            }
                                        },
                                        "result" : "\"Hello World\"\r\n\n",
                                        "status" : 0
                                    }
                                },
                                "status" : 0,
                                "result" : "\"Hello World\"\r\n\n\n"
                            }
                        },
                        "map" : {
                            "content" : "{\"nodes\":[{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":40,\"y\":150},\"angle\":0,\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\",\"embeds\":\"\",\"z\":1,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"Start\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/pmAgent.png\"}}},{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":350,\"y\":310},\"angle\":0,\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\",\"embeds\":\"\",\"z\":2,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"CommandLine\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/CommandLine.png\"}}},{\"type\":\"basic.Rect\",\"position\":{\"x\":300,\"y\":150},\"size\":{\"width\":0.1,\"height\":0.1},\"angle\":0,\"id\":\"7f33a380-2dc1-4899-a1c1-51c1be84ec10\",\"z\":5,\"attrs\":{}}],\"links\":[{\"type\":\"link\",\"source\":{\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\"},\"target\":{\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\"},\"router\":{\"name\":\"manhattan\"},\"connector\":{\"name\":\"rounded\"},\"id\":\"9f0c041e-6c05-410a-8b7a-e23138a9ffd5\",\"z\":4,\"vertices\":[{\"x\":220,\"y\":340},{\"x\":220,\"y\":340},{\"x\":240,\"y\":340},{\"x\":240,\"y\":340},{\"x\":240,\"y\":340},{\"x\":240,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340}],\"attrs\":{\".connection\":{\"stroke\":\"#333333\",\"stroke-width\":3},\".marker-target\":{\"fill\":\"#333333\",\"d\":\"M 10 0 L 0 5 L 10 10 z\"}}}]}",
                            "nodes" : {
                                "Start" : {
                                    "id" : "fd1000fc-11cc-4261-9dcd-b2b9a53a3131",
                                    "name" : "Start",
                                    "type" : "startNode",
                                    "serverUrl" : "",
                                    "attributes" : {}
                                },
                                "CommandLine" : {
                                    "id" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                    "type" : "CommandLine",
                                    "name" : "CommandLine",
                                    "serverUrl" : "localhost:8100",
                                    "attributes" : {}
                                }
                            },
                            "links" : [ 
                                {
                                    "id" : "9f0c041e-6c05-410a-8b7a-e23138a9ffd5",
                                    "sourceId" : "fd1000fc-11cc-4261-9dcd-b2b9a53a3131",
                                    "targetId" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                    "processes" : [ 
                                        {
                                            "name" : "HelloWorld",
                                            "description" : "",
                                            "order" : 0,
                                            "default_execution" : false,
                                            "mandatory" : false,
                                            "actions" : [ 
                                                {
                                                    "server" : {
                                                        "type" : "CommandLine",
                                                        "name" : "CommandLine",
                                                        "id" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                                        "url" : "localhost:8100"
                                                    },
                                                    "method" : {
                                                        "params" : [ 
                                                            {
                                                                "name" : "COMMANDS",
                                                                "viewName" : "command",
                                                                "type" : "string",
                                                                "method" : "5720f24fa02b766c1cbf8d2e",
                                                                "options" : [],
                                                                "createdAt" : "2016-04-27T17:09:35.909Z",
                                                                "updatedAt" : "2016-04-27T17:09:35.909Z",
                                                                "id" : "5720f24fa02b766c1cbf8d3c"
                                                            }
                                                        ],
                                                        "agent" : {
                                                            "type" : "CommandLine",
                                                            "imgUrl" : "images/controls/CommandLine.png",
                                                            "createdAt" : "2016-04-27T17:09:35.253Z",
                                                            "updatedAt" : "2016-04-27T17:09:35.560Z",
                                                            "id" : "5720f24fa02b766c1cbf8d2d"
                                                        },
                                                        "name" : "execute",
                                                        "viewName" : "execute command",
                                                        "actionString" : "COMMANDS",
                                                        "createdAt" : "2016-04-27T17:09:35.564Z",
                                                        "updatedAt" : "2016-04-27T17:09:35.745Z",
                                                        "id" : "5720f24fa02b766c1cbf8d2e"
                                                    },
                                                    "params" : {
                                                        "COMMANDS" : {
                                                            "text" : "echo \"Hello World\""
                                                        }
                                                    },
                                                    "name" : "echo",
                                                    "timeout" : 0,
                                                    "timeunit" : "1",
                                                    "retries" : 0,
                                                    "mandatory" : false,
                                                    "suspend" : false,
                                                    "result" : "",
                                                    "lastUpdate" : "Tue Jun 14 2016 21:08:39 GMT+0300 (שעון קיץ ירושלים)"
                                                }
                                            ],
                                            "result" : "",
                                            "inside" : true
                                        }
                                    ],
                                    "result" : "",
                                    "filterAgent" : false,
                                    "filterAgentCode" : "filterAgent();"
                                }
                            ],
                            "code" : ""
                        },
                        "date" : "2016-06-23T14:18:18.743Z"
                    }, 
                    {
                        "log" : "---\n  name: \"simpleCli\"\n  version: 13\n  date: \"Tue Jul 12 2016 15:55:04 GMT+0300 (שעון קיץ ירושלים)\"\n  DESKTOP-GCH4T97-win32: \n    processes: \n      HelloWorld: \n        name: \"HelloWorld\"\n        actions: \n          echo: \n            name: \"echo\"\n            baseAgent: \n              name: \"DESKTOP-GCH4T97-win32\"\n              url: \"http://192.168.56.1:8012\"\n            result: \"\\\"Hello World\\\"\\r\\n\"\n            status: 0\n        result: \"\\\"Hello World\\\"\\r\\n\\n\"\n        status: 0\n    status: 0\n    result: \"\\\"Hello World\\\"\\r\\n\\n\\n\"\n",
                        "resObj" : {
                            "name" : "simpleCli",
                            "version" : 13,
                            "date" : "Tue Jul 12 2016 15:55:04 GMT+0300 (שעון קיץ ירושלים)",
                            "DESKTOP-GCH4T97-win32" : {
                                "processes" : {
                                    "HelloWorld" : {
                                        "name" : "HelloWorld",
                                        "actions" : {
                                            "echo" : {
                                                "name" : "echo",
                                                "baseAgent" : {
                                                    "name" : "DESKTOP-GCH4T97-win32",
                                                    "url" : "http://192.168.56.1:8012"
                                                },
                                                "result" : "\"Hello World\"\r\n",
                                                "status" : 0
                                            }
                                        },
                                        "result" : "\"Hello World\"\r\n\n",
                                        "status" : 0
                                    }
                                },
                                "status" : 0,
                                "result" : "\"Hello World\"\r\n\n\n"
                            }
                        },
                        "map" : {
                            "content" : "{\"nodes\":[{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":40,\"y\":150},\"angle\":0,\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\",\"embeds\":\"\",\"z\":1,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"Start\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/pmAgent.png\"}}},{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":350,\"y\":310},\"angle\":0,\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\",\"embeds\":\"\",\"z\":2,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"CommandLine\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/CommandLine.png\"}}},{\"type\":\"basic.Rect\",\"position\":{\"x\":300,\"y\":150},\"size\":{\"width\":0.1,\"height\":0.1},\"angle\":0,\"id\":\"7f33a380-2dc1-4899-a1c1-51c1be84ec10\",\"z\":5,\"attrs\":{}}],\"links\":[{\"type\":\"link\",\"source\":{\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\"},\"target\":{\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\"},\"router\":{\"name\":\"manhattan\"},\"connector\":{\"name\":\"rounded\"},\"id\":\"9f0c041e-6c05-410a-8b7a-e23138a9ffd5\",\"z\":4,\"vertices\":[{\"x\":220,\"y\":340},{\"x\":220,\"y\":340},{\"x\":240,\"y\":340},{\"x\":240,\"y\":340},{\"x\":240,\"y\":340},{\"x\":240,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340}],\"attrs\":{\".connection\":{\"stroke\":\"#333333\",\"stroke-width\":3},\".marker-target\":{\"fill\":\"#333333\",\"d\":\"M 10 0 L 0 5 L 10 10 z\"}}}]}",
                            "nodes" : {
                                "Start" : {
                                    "id" : "fd1000fc-11cc-4261-9dcd-b2b9a53a3131",
                                    "name" : "Start",
                                    "type" : "startNode",
                                    "serverUrl" : "",
                                    "attributes" : {}
                                },
                                "CommandLine" : {
                                    "id" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                    "type" : "CommandLine",
                                    "name" : "CommandLine",
                                    "serverUrl" : "localhost:8100",
                                    "attributes" : {}
                                }
                            },
                            "links" : [ 
                                {
                                    "id" : "9f0c041e-6c05-410a-8b7a-e23138a9ffd5",
                                    "sourceId" : "fd1000fc-11cc-4261-9dcd-b2b9a53a3131",
                                    "targetId" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                    "processes" : [ 
                                        {
                                            "name" : "HelloWorld",
                                            "description" : "",
                                            "order" : 0,
                                            "default_execution" : false,
                                            "mandatory" : false,
                                            "actions" : [ 
                                                {
                                                    "server" : {
                                                        "type" : "CommandLine",
                                                        "name" : "CommandLine",
                                                        "id" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                                        "url" : "localhost:8100"
                                                    },
                                                    "method" : {
                                                        "params" : [ 
                                                            {
                                                                "name" : "COMMANDS",
                                                                "viewName" : "command",
                                                                "type" : "string",
                                                                "method" : "5720f24fa02b766c1cbf8d2e",
                                                                "options" : [],
                                                                "createdAt" : "2016-04-27T17:09:35.909Z",
                                                                "updatedAt" : "2016-04-27T17:09:35.909Z",
                                                                "id" : "5720f24fa02b766c1cbf8d3c"
                                                            }
                                                        ],
                                                        "agent" : {
                                                            "type" : "CommandLine",
                                                            "imgUrl" : "images/controls/CommandLine.png",
                                                            "createdAt" : "2016-04-27T17:09:35.253Z",
                                                            "updatedAt" : "2016-04-27T17:09:35.560Z",
                                                            "id" : "5720f24fa02b766c1cbf8d2d"
                                                        },
                                                        "name" : "execute",
                                                        "viewName" : "execute command",
                                                        "actionString" : "COMMANDS",
                                                        "createdAt" : "2016-04-27T17:09:35.564Z",
                                                        "updatedAt" : "2016-04-27T17:09:35.745Z",
                                                        "id" : "5720f24fa02b766c1cbf8d2e"
                                                    },
                                                    "params" : {
                                                        "COMMANDS" : {
                                                            "text" : "echo \"Hello World\""
                                                        }
                                                    },
                                                    "name" : "echo",
                                                    "timeout" : 0,
                                                    "timeunit" : "1",
                                                    "retries" : 0,
                                                    "mandatory" : false,
                                                    "suspend" : false,
                                                    "result" : "",
                                                    "lastUpdate" : "Tue Jun 14 2016 21:08:39 GMT+0300 (שעון קיץ ירושלים)"
                                                }
                                            ],
                                            "result" : "",
                                            "inside" : true
                                        }
                                    ],
                                    "result" : "",
                                    "filterAgent" : false,
                                    "filterAgentCode" : "filterAgent();"
                                }
                            ],
                            "code" : ""
                        },
                        "date" : "2016-07-12T12:55:04.216Z"
                    }
                ],
                "status" : 2
            }, 
            {
                "date" : "2016-07-12T13:12:41.912Z"
                "patches" : [ 
                    {
                        "op" : "replace",
                        "path" : "/content",
                        "value" : "{\"nodes\":[{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":40,\"y\":150},\"angle\":0,\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\",\"embeds\":\"\",\"z\":1,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"Start\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/pmAgent.png\"}}},{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":350,\"y\":310},\"angle\":0,\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\",\"embeds\":\"\",\"z\":2,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"CommandLine\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/CommandLine.png\"}}},{\"type\":\"basic.Rect\",\"position\":{\"x\":300,\"y\":150},\"size\":{\"width\":0.1,\"height\":0.1},\"angle\":0,\"id\":\"7f33a380-2dc1-4899-a1c1-51c1be84ec10\",\"z\":5,\"attrs\":{}}],\"links\":[{\"type\":\"link\",\"source\":{\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\"},\"target\":{\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\"},\"router\":{\"name\":\"manhattan\"},\"connector\":{\"name\":\"rounded\"},\"id\":\"9f0c041e-6c05-410a-8b7a-e23138a9ffd5\",\"z\":4,\"vertices\":[{\"x\":220,\"y\":340},{\"x\":220,\"y\":340},{\"x\":230,\"y\":340},{\"x\":230,\"y\":340},{\"x\":240,\"y\":340},{\"x\":240,\"y\":340},{\"x\":240,\"y\":340},{\"x\":240,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340}],\"attrs\":{\".connection\":{\"stroke\":\"#333333\",\"stroke-width\":3},\".marker-target\":{\"fill\":\"#333333\",\"d\":\"M 10 0 L 0 5 L 10 10 z\"}}}]}"
                    }
                ],
                "executions" : [ 
                    {
                        "log" : "---\n  name: \"simpleCli\"\n  version: 14\n  date: \"Tue Jul 12 2016 16:12:42 GMT+0300 (שעון קיץ ירושלים)\"\n",
                        "resObj" : {
                            "name" : "simpleCli",
                            "version" : 14,
                            "date" : "Tue Jul 12 2016 16:12:42 GMT+0300 (שעון קיץ ירושלים)"
                        },
                        "map" : {
                            "content" : "{\"nodes\":[{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":40,\"y\":150},\"angle\":0,\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\",\"embeds\":\"\",\"z\":1,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"Start\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/pmAgent.png\"}}},{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":350,\"y\":310},\"angle\":0,\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\",\"embeds\":\"\",\"z\":2,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"CommandLine\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/CommandLine.png\"}}},{\"type\":\"basic.Rect\",\"position\":{\"x\":300,\"y\":150},\"size\":{\"width\":0.1,\"height\":0.1},\"angle\":0,\"id\":\"7f33a380-2dc1-4899-a1c1-51c1be84ec10\",\"z\":5,\"attrs\":{}}],\"links\":[{\"type\":\"link\",\"source\":{\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\"},\"target\":{\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\"},\"router\":{\"name\":\"manhattan\"},\"connector\":{\"name\":\"rounded\"},\"id\":\"9f0c041e-6c05-410a-8b7a-e23138a9ffd5\",\"z\":4,\"vertices\":[{\"x\":220,\"y\":340},{\"x\":220,\"y\":340},{\"x\":230,\"y\":340},{\"x\":230,\"y\":340},{\"x\":240,\"y\":340},{\"x\":240,\"y\":340},{\"x\":240,\"y\":340},{\"x\":240,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340}],\"attrs\":{\".connection\":{\"stroke\":\"#333333\",\"stroke-width\":3},\".marker-target\":{\"fill\":\"#333333\",\"d\":\"M 10 0 L 0 5 L 10 10 z\"}}}]}",
                            "nodes" : {
                                "Start" : {
                                    "id" : "fd1000fc-11cc-4261-9dcd-b2b9a53a3131",
                                    "name" : "Start",
                                    "type" : "startNode",
                                    "serverUrl" : "",
                                    "attributes" : {}
                                },
                                "CommandLine" : {
                                    "id" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                    "type" : "CommandLine",
                                    "name" : "CommandLine",
                                    "serverUrl" : "localhost:8100",
                                    "attributes" : {}
                                }
                            },
                            "links" : [ 
                                {
                                    "id" : "9f0c041e-6c05-410a-8b7a-e23138a9ffd5",
                                    "sourceId" : "fd1000fc-11cc-4261-9dcd-b2b9a53a3131",
                                    "targetId" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                    "processes" : [ 
                                        {
                                            "name" : "HelloWorld",
                                            "description" : "",
                                            "order" : 0,
                                            "default_execution" : false,
                                            "mandatory" : false,
                                            "actions" : [ 
                                                {
                                                    "server" : {
                                                        "type" : "CommandLine",
                                                        "name" : "CommandLine",
                                                        "id" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                                        "url" : "localhost:8100"
                                                    },
                                                    "method" : {
                                                        "params" : [ 
                                                            {
                                                                "name" : "COMMANDS",
                                                                "viewName" : "command",
                                                                "type" : "string",
                                                                "method" : "5720f24fa02b766c1cbf8d2e",
                                                                "options" : [],
                                                                "createdAt" : "2016-04-27T17:09:35.909Z",
                                                                "updatedAt" : "2016-04-27T17:09:35.909Z",
                                                                "id" : "5720f24fa02b766c1cbf8d3c"
                                                            }
                                                        ],
                                                        "agent" : {
                                                            "type" : "CommandLine",
                                                            "imgUrl" : "images/controls/CommandLine.png",
                                                            "createdAt" : "2016-04-27T17:09:35.253Z",
                                                            "updatedAt" : "2016-04-27T17:09:35.560Z",
                                                            "id" : "5720f24fa02b766c1cbf8d2d"
                                                        },
                                                        "name" : "execute",
                                                        "viewName" : "execute command",
                                                        "actionString" : "COMMANDS",
                                                        "createdAt" : "2016-04-27T17:09:35.564Z",
                                                        "updatedAt" : "2016-04-27T17:09:35.745Z",
                                                        "id" : "5720f24fa02b766c1cbf8d2e"
                                                    },
                                                    "params" : {
                                                        "COMMANDS" : {
                                                            "text" : "echo \"Hello World\""
                                                        }
                                                    },
                                                    "name" : "echo",
                                                    "timeout" : 0,
                                                    "timeunit" : "1",
                                                    "retries" : 0,
                                                    "mandatory" : false,
                                                    "suspend" : false,
                                                    "result" : "",
                                                    "lastUpdate" : "Tue Jun 14 2016 21:08:39 GMT+0300 (שעון קיץ ירושלים)"
                                                }
                                            ],
                                            "result" : "",
                                            "inside" : true
                                        }
                                    ],
                                    "result" : "",
                                    "filterAgent" : false,
                                    "filterAgentCode" : "filterAgent();"
                                }
                            ],
                            "code" : ""
                        },
                        "date" : "2016-07-12T13:12:42.588Z"
                    }, 
                    {
                        "log" : "---\n  name: \"simpleCli\"\n  version: 14\n  date: \"Tue Jul 12 2016 16:14:32 GMT+0300 (שעון קיץ ירושלים)\"\n  DESKTOP-GCH4T97-win32: \n    processes: \n      HelloWorld: \n        name: \"HelloWorld\"\n        actions: \n          echo: \n            name: \"echo\"\n            baseAgent: \n              name: \"DESKTOP-GCH4T97-win32\"\n              url: \"http://192.168.56.1:8022\"\n            result: \"\\\"Hello World\\\"\\r\\n\"\n            status: 0\n        result: \"\\\"Hello World\\\"\\r\\n\\n\"\n        status: 0\n    status: 0\n    result: \"\\\"Hello World\\\"\\r\\n\\n\\n\"\n",
                        "resObj" : {
                            "name" : "simpleCli",
                            "version" : 14,
                            "date" : "Tue Jul 12 2016 16:14:32 GMT+0300 (שעון קיץ ירושלים)",
                            "DESKTOP-GCH4T97-win32" : {
                                "processes" : {
                                    "HelloWorld" : {
                                        "name" : "HelloWorld",
                                        "actions" : {
                                            "echo" : {
                                                "name" : "echo",
                                                "baseAgent" : {
                                                    "name" : "DESKTOP-GCH4T97-win32",
                                                    "url" : "http://192.168.56.1:8022"
                                                },
                                                "result" : "\"Hello World\"\r\n",
                                                "status" : 0
                                            }
                                        },
                                        "result" : "\"Hello World\"\r\n\n",
                                        "status" : 0
                                    }
                                },
                                "status" : 0,
                                "result" : "\"Hello World\"\r\n\n\n"
                            }
                        },
                        "map" : {
                            "content" : "{\"nodes\":[{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":40,\"y\":150},\"angle\":0,\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\",\"embeds\":\"\",\"z\":1,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"Start\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/pmAgent.png\"}}},{\"type\":\"basic.DecoratedRect\",\"size\":{\"width\":200,\"height\":50},\"position\":{\"x\":350,\"y\":310},\"angle\":0,\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\",\"embeds\":\"\",\"z\":2,\"attrs\":{\"rect\":{\"fill\":\"#93cede\"},\"text\":{\"text\":\"CommandLine\",\"fill\":\"#2e2e2e\"},\"image\":{\"xlink:href\":\"images/controls/CommandLine.png\"}}},{\"type\":\"basic.Rect\",\"position\":{\"x\":300,\"y\":150},\"size\":{\"width\":0.1,\"height\":0.1},\"angle\":0,\"id\":\"7f33a380-2dc1-4899-a1c1-51c1be84ec10\",\"z\":5,\"attrs\":{}}],\"links\":[{\"type\":\"link\",\"source\":{\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\"},\"target\":{\"id\":\"44c0cbcc-4030-45ed-8ca5-e875c5cf3487\"},\"router\":{\"name\":\"manhattan\"},\"connector\":{\"name\":\"rounded\"},\"id\":\"9f0c041e-6c05-410a-8b7a-e23138a9ffd5\",\"z\":4,\"vertices\":[{\"x\":220,\"y\":340},{\"x\":220,\"y\":340},{\"x\":230,\"y\":340},{\"x\":230,\"y\":340},{\"x\":240,\"y\":340},{\"x\":240,\"y\":340},{\"x\":240,\"y\":340},{\"x\":240,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340},{\"x\":250,\"y\":340}],\"attrs\":{\".connection\":{\"stroke\":\"#333333\",\"stroke-width\":3},\".marker-target\":{\"fill\":\"#333333\",\"d\":\"M 10 0 L 0 5 L 10 10 z\"}}}]}",
                            "nodes" : {
                                "Start" : {
                                    "id" : "fd1000fc-11cc-4261-9dcd-b2b9a53a3131",
                                    "name" : "Start",
                                    "type" : "startNode",
                                    "serverUrl" : "",
                                    "attributes" : {}
                                },
                                "CommandLine" : {
                                    "id" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                    "type" : "CommandLine",
                                    "name" : "CommandLine",
                                    "serverUrl" : "localhost:8100",
                                    "attributes" : {}
                                }
                            },
                            "links" : [ 
                                {
                                    "id" : "9f0c041e-6c05-410a-8b7a-e23138a9ffd5",
                                    "sourceId" : "fd1000fc-11cc-4261-9dcd-b2b9a53a3131",
                                    "targetId" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                    "processes" : [ 
                                        {
                                            "name" : "HelloWorld",
                                            "description" : "",
                                            "order" : 0,
                                            "default_execution" : false,
                                            "mandatory" : false,
                                            "actions" : [ 
                                                {
                                                    "server" : {
                                                        "type" : "CommandLine",
                                                        "name" : "CommandLine",
                                                        "id" : "44c0cbcc-4030-45ed-8ca5-e875c5cf3487",
                                                        "url" : "localhost:8100"
                                                    },
                                                    "method" : {
                                                        "params" : [ 
                                                            {
                                                                "name" : "COMMANDS",
                                                                "viewName" : "command",
                                                                "type" : "string",
                                                                "method" : "5720f24fa02b766c1cbf8d2e",
                                                                "options" : [],
                                                                "createdAt" : "2016-04-27T17:09:35.909Z",
                                                                "updatedAt" : "2016-04-27T17:09:35.909Z",
                                                                "id" : "5720f24fa02b766c1cbf8d3c"
                                                            }
                                                        ],
                                                        "agent" : {
                                                            "type" : "CommandLine",
                                                            "imgUrl" : "images/controls/CommandLine.png",
                                                            "createdAt" : "2016-04-27T17:09:35.253Z",
                                                            "updatedAt" : "2016-04-27T17:09:35.560Z",
                                                            "id" : "5720f24fa02b766c1cbf8d2d"
                                                        },
                                                        "name" : "execute",
                                                        "viewName" : "execute command",
                                                        "actionString" : "COMMANDS",
                                                        "createdAt" : "2016-04-27T17:09:35.564Z",
                                                        "updatedAt" : "2016-04-27T17:09:35.745Z",
                                                        "id" : "5720f24fa02b766c1cbf8d2e"
                                                    },
                                                    "params" : {
                                                        "COMMANDS" : {
                                                            "text" : "echo \"Hello World\""
                                                        }
                                                    },
                                                    "name" : "echo",
                                                    "timeout" : 0,
                                                    "timeunit" : "1",
                                                    "retries" : 0,
                                                    "mandatory" : false,
                                                    "suspend" : false,
                                                    "result" : "",
                                                    "lastUpdate" : "Tue Jun 14 2016 21:08:39 GMT+0300 (שעון קיץ ירושלים)"
                                                }
                                            ],
                                            "result" : "",
                                            "inside" : true
                                        }
                                    ],
                                    "result" : "",
                                    "filterAgent" : false,
                                    "filterAgentCode" : "filterAgent();"
                                }
                            ],
                            "code" : ""
                        },
                        "date" : "2016-07-12T13:14:32.260Z"
                    }
                ],
                "status" : 2
            }
        ],
        "isActive" : true,
        "createdAt" : "2016-04-27T17:09:03.379Z",
        "updatedAt" : "2016-07-12T13:14:32.274Z"
    }
];