import { OnInit, Component, ViewEncapsulation } from '@angular/core';

import { DialogRef, ModalComponent } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { Modal } from 'angular2-modal/plugins/bootstrap';

import { AgentsService } from '../../../../shared/services/agents.service';

import * as _ from 'lodash';

export class ExecutionReportComponentWindowData extends BSModalContext {
  map: any;

  constructor(map: any) {
    super();
    this.size = 'lg';
    this.map = map;
  }
}

@Component({
  selector: 'app-execution-report',
  templateUrl: './execution-report.component.html',
  styleUrls: ['./execution-report.component.css']
})
export class ExecutionReportComponent implements OnInit {

  context: ExecutionReportComponentWindowData;
  map: any = {};
  execution: any = {
    processes: [1, 2, 3]
  };

  processes: any;

  user: any = { username: 'test' }

  constructor(public dialog: DialogRef<ExecutionReportComponentWindowData>, public modal: Modal, private agentsService: AgentsService) {
    this.context = dialog.context;
    this.map = this.context.map;
  }

  ngOnInit() {
    this.execution = {
      "res": "finished running map exampleMap",
      "resObj": {
        "log": "---\n  name: \"exampleMap\"\n  version: 4\n  date: \"Tue Sep 13 2016 09:13:45 GMT+0300 (שעון קיץ ירושלים)\"\n  DESKTOP-GCH4T97-win32: \n    processes: \n      aaaa: \n        linkId: 0\n        name: \"aaaa\"\n        actions: \n          dddd: \n            name: \"dddd\"\n            baseAgent: \n              name: \"DESKTOP-GCH4T97-win32\"\n              url: \"http://192.168.56.1:8021\"\n            result: \"\\\"asdfsad\\\"\\r\\n\"\n            status: 0\n        result: \"\\\"asdfsad\\\"\\r\\n\\n\"\n        status: 0\n      ddd: \n        linkId: 1\n        name: \"ddd\"\n        actions: \n          qqq: \n            name: \"qqq\"\n            baseAgent: \n              name: \"DESKTOP-GCH4T97-win32\"\n              url: \"http://192.168.56.1:8021\"\n            result: \"\\\"aaaaa\\\"\\r\\n\"\n            status: 0\n        result: \"\\\"aaaaa\\\"\\r\\n\\n\"\n        status: 0\n    status: 0\n    result: \"\\\"asdfsad\\\"\\r\\n\\n\\n\\\"aaaaa\\\"\\r\\n\\n\\n\"\n",
        "resObj": {
          "name": "exampleMap",
          "version": 4,
          "date": "Tue Sep 13 2016 09:13:45 GMT+0300 (שעון קיץ ירושלים)",
          "DESKTOP-GCH4T97-win32": {
            "processes": {
              "aaaa": {
                "linkId": 0,
                "name": "aaaa",
                "actions": {
                  "dddd": {
                    "name": "dddd",
                    "baseAgent": {
                      "name": "DESKTOP-GCH4T97-win32",
                      "url": "http://192.168.56.1:8021"
                    },
                    "result": "\"asdfsad\"\r\n",
                    "status": 0
                  }
                },
                "result": "\"asdfsad\"\r\n\n",
                "status": 0
              },
              "ddd": {
                "linkId": 1,
                "name": "ddd",
                "actions": {
                  "qqq": {
                    "name": "qqq",
                    "baseAgent": {
                      "name": "DESKTOP-GCH4T97-win32",
                      "url": "http://192.168.56.1:8021"
                    },
                    "result": "\"aaaaa\"\r\n",
                    "status": 0
                  }
                },
                "result": "\"aaaaa\"\r\n\n",
                "status": 0
              }
            },
            "status": 0,
            "result": "\"asdfsad\"\r\n\n\n\"aaaaa\"\r\n\n\n"
          },
          "status": 0
        },
        "map": {
          "content": "{\"cells\":[{\"type\":\"devs.PMStartPoint\",\"size\":{\"width\":40,\"height\":39},\"outPorts\":[\"\"],\"inPorts\":[],\"position\":{\"x\":40,\"y\":30},\"angle\":0,\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\",\"embeds\":\"\",\"z\":1,\"attrs\":{\".outPorts>.port0>.port-label\":{\"text\":\"\"},\".outPorts>.port0>.port-body\":{\"port\":{\"id\":\"out12\",\"type\":\"out\"}},\".outPorts>.port0\":{\"ref\":\".body\",\"ref-y\":0.5,\"ref-dx\":0}}},{\"type\":\"devs.PMDragModel\",\"size\":{\"width\":110,\"height\":84},\"inPorts\":[\"\"],\"outPorts\":[\"\"],\"position\":{\"x\":216,\"y\":81},\"angle\":0,\"id\":\"26eeee6c-e333-46e5-8b7b-66448e1a2faa\",\"z\":1,\"attrs\":{\".label\":{\"text\":\"CommandLine-1\"},\"image\":{\"xlink:href\":\"assets/img/agents/CommandLine.png\"},\".inPorts>.port0>.port-label\":{\"text\":\"\"},\".inPorts>.port0>.port-body\":{\"port\":{\"id\":\"in22\",\"type\":\"in\"}},\".inPorts>.port0\":{\"ref\":\".body\",\"ref-y\":0.5},\".outPorts>.port0>.port-label\":{\"text\":\"\"},\".outPorts>.port0>.port-body\":{\"port\":{\"id\":\"out23\",\"type\":\"out\"}},\".outPorts>.port0\":{\"ref\":\".body\",\"ref-y\":0.5,\"ref-dx\":0}}},{\"type\":\"devs.PMDragModel\",\"size\":{\"width\":110,\"height\":84},\"inPorts\":[\"\"],\"outPorts\":[\"\"],\"position\":{\"x\":395,\"y\":210},\"angle\":0,\"id\":\"165c0c5b-4c74-464c-8de8-c90611ab1303\",\"z\":1,\"attrs\":{\".label\":{\"text\":\"CommandLine-2\"},\"image\":{\"xlink:href\":\"assets/img/agents/CommandLine.png\"},\".inPorts>.port0>.port-label\":{\"text\":\"\"},\".inPorts>.port0>.port-body\":{\"port\":{\"id\":\"in29\",\"type\":\"in\"}},\".inPorts>.port0\":{\"ref\":\".body\",\"ref-y\":0.5},\".outPorts>.port0>.port-label\":{\"text\":\"\"},\".outPorts>.port0>.port-body\":{\"port\":{\"id\":\"out30\",\"type\":\"out\"}},\".outPorts>.port0\":{\"ref\":\".body\",\"ref-y\":0.5,\"ref-dx\":0}}},{\"type\":\"link\",\"source\":{\"id\":\"fd1000fc-11cc-4261-9dcd-b2b9a53a3131\",\"selector\":\"g:nth-child(1) > g:nth-child(5) > g:nth-child(1) > circle:nth-child(1)\",\"port\":\"out12\"},\"target\":{\"id\":\"26eeee6c-e333-46e5-8b7b-66448e1a2faa\",\"selector\":\"g:nth-child(1) > g:nth-child(4) > g:nth-child(1) > circle:nth-child(1)\",\"port\":\"in22\"},\"router\":{\"name\":\"manhattan\"},\"connector\":{\"name\":\"rounded\"},\"id\":\"3ec7b46b-666b-4ac3-a421-f324fe2762bb\",\"z\":2,\"attrs\":{}},{\"type\":\"link\",\"source\":{\"id\":\"26eeee6c-e333-46e5-8b7b-66448e1a2faa\",\"selector\":\"g:nth-child(1) > g:nth-child(5) > g:nth-child(1) > circle:nth-child(1)\",\"port\":\"out23\"},\"target\":{\"id\":\"165c0c5b-4c74-464c-8de8-c90611ab1303\",\"selector\":\"g:nth-child(1) > g:nth-child(4) > g:nth-child(1) > circle:nth-child(1)\",\"port\":\"in29\"},\"router\":{\"name\":\"manhattan\"},\"connector\":{\"name\":\"rounded\"},\"id\":\"9471fe33-4d81-4d9f-8e57-58fff76fb46b\",\"z\":3,\"attrs\":{}}]}",
          "nodes": {
            "Start": {
              "id": "fd1000fc-11cc-4261-9dcd-b2b9a53a3131",
              "name": "Start",
              "type": "startNode",
              "serverUrl": "",
              "attributes": {}
            },
            "CommandLine1": {
              "id": "26eeee6c-e333-46e5-8b7b-66448e1a2faa",
              "type": "CommandLine",
              "name": "CommandLine",
              "serverUrl": "localhost:8100",
              "attributes": {}
            },
            "CommandLine2": {
              "id": "165c0c5b-4c74-464c-8de8-c90611ab1303",
              "type": "CommandLine",
              "name": "CommandLine",
              "serverUrl": "localhost:8100",
              "attributes": {}
            }
          },
          "links": [
            {
              "id": "3ec7b46b-666b-4ac3-a421-f324fe2762bb",
              "sourceId": "fd1000fc-11cc-4261-9dcd-b2b9a53a3131",
              "targetId": "26eeee6c-e333-46e5-8b7b-66448e1a2faa",
              "processes": [
                {
                  "name": "aaaa",
                  "description": "asdsadf\nsdf\nasdf\nasdf",
                  "order": 0,
                  "default_execution": false,
                  "mandatory": false,
                  "actions": [
                    {
                      "server": {
                        "methods": [
                          {
                            "params": [
                              {
                                "name": "COMMANDS",
                                "viewName": "command",
                                "type": "string",
                                "method": "579dfe9a15c746a433e47296",
                                "options": [],
                                "createdAt": "2016-07-31T13:35:23.067Z",
                                "updatedAt": "2016-07-31T13:35:23.067Z",
                                "id": "579dfe9b15c746a433e4729c",
                                "text": "echo \"asdfsad\""
                              }
                            ],
                            "agent": "579dfe9a15c746a433e47295",
                            "name": "execute",
                            "viewName": "execute command",
                            "actionString": "COMMANDS",
                            "createdAt": "2016-07-31T13:35:22.964Z",
                            "updatedAt": "2016-07-31T13:35:23.052Z",
                            "id": "579dfe9a15c746a433e47296"
                          },
                          {
                            "params": [
                              {
                                "name": "COMMANDS",
                                "viewName": "command",
                                "type": "text",
                                "method": "579dfe9a15c746a433e47297",
                                "options": [],
                                "createdAt": "2016-07-31T13:35:23.139Z",
                                "updatedAt": "2016-07-31T13:35:23.139Z",
                                "id": "579dfe9b15c746a433e472a5"
                              }
                            ],
                            "agent": "579dfe9a15c746a433e47295",
                            "name": "execute commands",
                            "viewName": "execute multiple commands",
                            "actionString": "COMMANDS",
                            "createdAt": "2016-07-31T13:35:22.965Z",
                            "updatedAt": "2016-07-31T13:35:23.059Z",
                            "id": "579dfe9a15c746a433e47297"
                          },
                          {
                            "params": [
                              {
                                "name": "PATH",
                                "viewName": "path for script",
                                "type": "string",
                                "method": "579dfe9a15c746a433e47298",
                                "options": [],
                                "createdAt": "2016-07-31T13:35:23.150Z",
                                "updatedAt": "2016-07-31T13:35:23.150Z",
                                "id": "579dfe9b15c746a433e472a8"
                              }
                            ],
                            "agent": "579dfe9a15c746a433e47295",
                            "name": "executeFile",
                            "viewName": "execute file",
                            "actionString": "PATH",
                            "createdAt": "2016-07-31T13:35:22.966Z",
                            "updatedAt": "2016-07-31T13:35:23.119Z",
                            "id": "579dfe9a15c746a433e47298"
                          },
                          {
                            "params": [
                              {
                                "name": "KEY_PATH",
                                "viewName": "key path",
                                "type": "string",
                                "method": "579dfe9a15c746a433e47299",
                                "options": [],
                                "createdAt": "2016-07-31T13:35:23.127Z",
                                "updatedAt": "2016-07-31T13:35:23.127Z",
                                "id": "579dfe9b15c746a433e472a1"
                              },
                              {
                                "name": "REMOTE_USER",
                                "viewName": "remote user",
                                "type": "string",
                                "method": "579dfe9a15c746a433e47299",
                                "options": [],
                                "createdAt": "2016-07-31T13:35:23.131Z",
                                "updatedAt": "2016-07-31T13:35:23.131Z",
                                "id": "579dfe9b15c746a433e472a2"
                              },
                              {
                                "name": "REMOTE_ADDRESS",
                                "viewName": "remote address",
                                "type": "string",
                                "method": "579dfe9a15c746a433e47299",
                                "options": [],
                                "createdAt": "2016-07-31T13:35:23.131Z",
                                "updatedAt": "2016-07-31T13:35:23.131Z",
                                "id": "579dfe9b15c746a433e472a3"
                              },
                              {
                                "name": "COMMANDS",
                                "viewName": "command",
                                "type": "string",
                                "method": "579dfe9a15c746a433e47299",
                                "options": [],
                                "createdAt": "2016-07-31T13:35:23.132Z",
                                "updatedAt": "2016-07-31T13:35:23.132Z",
                                "id": "579dfe9b15c746a433e472a4"
                              }
                            ],
                            "agent": "579dfe9a15c746a433e47295",
                            "name": "remoteCommandExecute",
                            "viewName": "remote command execution",
                            "actionString": "ssh -i KEY_PATH REMOTE_USER@REMOTE_ADDRESS COMMANDS",
                            "createdAt": "2016-07-31T13:35:22.968Z",
                            "updatedAt": "2016-07-31T13:35:23.061Z",
                            "id": "579dfe9a15c746a433e47299"
                          },
                          {
                            "params": [
                              {
                                "name": "KEY_PATH",
                                "viewName": "key path",
                                "type": "string",
                                "method": "579dfe9a15c746a433e4729a",
                                "options": [],
                                "createdAt": "2016-07-31T13:35:23.073Z",
                                "updatedAt": "2016-07-31T13:35:23.073Z",
                                "id": "579dfe9b15c746a433e4729d"
                              },
                              {
                                "name": "REMOTE_ADDRESS",
                                "viewName": "remote address",
                                "type": "string",
                                "method": "579dfe9a15c746a433e4729a",
                                "options": [],
                                "createdAt": "2016-07-31T13:35:23.074Z",
                                "updatedAt": "2016-07-31T13:35:23.074Z",
                                "id": "579dfe9b15c746a433e4729f"
                              },
                              {
                                "name": "REMOTE_USER",
                                "viewName": "remote user",
                                "type": "string",
                                "method": "579dfe9a15c746a433e4729a",
                                "options": [],
                                "createdAt": "2016-07-31T13:35:23.073Z",
                                "updatedAt": "2016-07-31T13:35:23.073Z",
                                "id": "579dfe9b15c746a433e4729e"
                              },
                              {
                                "name": "SCRIPT_PATH",
                                "viewName": "script path on server",
                                "type": "string",
                                "method": "579dfe9a15c746a433e4729a",
                                "options": [],
                                "createdAt": "2016-07-31T13:35:23.075Z",
                                "updatedAt": "2016-07-31T13:35:23.075Z",
                                "id": "579dfe9b15c746a433e472a0"
                              }
                            ],
                            "agent": "579dfe9a15c746a433e47295",
                            "name": "remoteScriptExecution",
                            "viewName": "remote script execution",
                            "actionString": "ssh -i KEY_PATH REMOTE_USER@REMOTE_ADDRESS 'bash -s' < SCRIPT_PATH",
                            "createdAt": "2016-07-31T13:35:22.969Z",
                            "updatedAt": "2016-07-31T13:35:23.064Z",
                            "id": "579dfe9a15c746a433e4729a"
                          },
                          {
                            "params": [
                              {
                                "name": "command",
                                "viewName": "command",
                                "type": "string",
                                "method": "579dfe9a15c746a433e4729b",
                                "options": [],
                                "createdAt": "2016-07-31T13:35:23.139Z",
                                "updatedAt": "2016-07-31T13:35:23.139Z",
                                "id": "579dfe9b15c746a433e472a6"
                              },
                              {
                                "name": "paramsList",
                                "viewName": "list of params(multiple lists of params)",
                                "type": "string",
                                "method": "579dfe9a15c746a433e4729b",
                                "options": [],
                                "createdAt": "2016-07-31T13:35:23.140Z",
                                "updatedAt": "2016-07-31T13:35:23.140Z",
                                "id": "579dfe9b15c746a433e472a7"
                              }
                            ],
                            "agent": "579dfe9a15c746a433e47295",
                            "name": "executeMultiple",
                            "viewName": "execute command multiple times",
                            "createdAt": "2016-07-31T13:35:22.970Z",
                            "updatedAt": "2016-07-31T13:35:23.055Z",
                            "id": "579dfe9a15c746a433e4729b"
                          }
                        ],
                        "type": "CommandLine",
                        "imgUrl": "images/controls/CommandLine.png",
                        "api": "static",
                        "createdAt": "2016-07-31T13:35:22.822Z",
                        "updatedAt": "2016-07-31T13:35:22.891Z",
                        "id": "579dfe9a15c746a433e47295"
                      },
                      "method": {
                        "params": [
                          {
                            "name": "COMMANDS",
                            "viewName": "command",
                            "type": "string",
                            "method": "579dfe9a15c746a433e47296",
                            "options": [],
                            "createdAt": "2016-07-31T13:35:23.067Z",
                            "updatedAt": "2016-07-31T13:35:23.067Z",
                            "id": "579dfe9b15c746a433e4729c",
                            "text": "echo \"asdfsad\""
                          }
                        ],
                        "agent": "579dfe9a15c746a433e47295",
                        "name": "execute",
                        "viewName": "execute command",
                        "actionString": "COMMANDS",
                        "createdAt": "2016-07-31T13:35:22.964Z",
                        "updatedAt": "2016-07-31T13:35:23.052Z",
                        "id": "579dfe9a15c746a433e47296"
                      },
                      "params": {},
                      "name": "dddd",
                      "timeout": 0,
                      "timeunit": "1",
                      "retries": 0,
                      "mandatory": false,
                      "suspend": false,
                      "result": "",
                      "lastUpdate": "2016-09-13T05:52:51.568Z"
                    }
                  ],
                  "result": "",
                  "condition": false
                }
              ],
              "result": "",
              "condition": false
            },
            {
              "id": "9471fe33-4d81-4d9f-8e57-58fff76fb46b",
              "sourceId": "26eeee6c-e333-46e5-8b7b-66448e1a2faa",
              "targetId": "165c0c5b-4c74-464c-8de8-c90611ab1303",
              "processes": [
                {
                  "name": "ddd",
                  "description": "",
                  "order": 0,
                  "default_execution": false,
                  "mandatory": false,
                  "actions": [
                    {
                      "server": {
                        "methods": [
                          {
                            "params": [
                              {
                                "name": "COMMANDS",
                                "viewName": "command",
                                "type": "string",
                                "method": "579dfe9a15c746a433e47296",
                                "options": [],
                                "createdAt": "2016-07-31T13:35:23.067Z",
                                "updatedAt": "2016-07-31T13:35:23.067Z",
                                "id": "579dfe9b15c746a433e4729c",
                                "text": "echo \"aaaaa\""
                              }
                            ],
                            "agent": "579dfe9a15c746a433e47295",
                            "name": "execute",
                            "viewName": "execute command",
                            "actionString": "COMMANDS",
                            "createdAt": "2016-07-31T13:35:22.964Z",
                            "updatedAt": "2016-07-31T13:35:23.052Z",
                            "id": "579dfe9a15c746a433e47296"
                          },
                          {
                            "params": [
                              {
                                "name": "COMMANDS",
                                "viewName": "command",
                                "type": "text",
                                "method": "579dfe9a15c746a433e47297",
                                "options": [],
                                "createdAt": "2016-07-31T13:35:23.139Z",
                                "updatedAt": "2016-07-31T13:35:23.139Z",
                                "id": "579dfe9b15c746a433e472a5"
                              }
                            ],
                            "agent": "579dfe9a15c746a433e47295",
                            "name": "execute commands",
                            "viewName": "execute multiple commands",
                            "actionString": "COMMANDS",
                            "createdAt": "2016-07-31T13:35:22.965Z",
                            "updatedAt": "2016-07-31T13:35:23.059Z",
                            "id": "579dfe9a15c746a433e47297"
                          },
                          {
                            "params": [
                              {
                                "name": "PATH",
                                "viewName": "path for script",
                                "type": "string",
                                "method": "579dfe9a15c746a433e47298",
                                "options": [],
                                "createdAt": "2016-07-31T13:35:23.150Z",
                                "updatedAt": "2016-07-31T13:35:23.150Z",
                                "id": "579dfe9b15c746a433e472a8"
                              }
                            ],
                            "agent": "579dfe9a15c746a433e47295",
                            "name": "executeFile",
                            "viewName": "execute file",
                            "actionString": "PATH",
                            "createdAt": "2016-07-31T13:35:22.966Z",
                            "updatedAt": "2016-07-31T13:35:23.119Z",
                            "id": "579dfe9a15c746a433e47298"
                          },
                          {
                            "params": [
                              {
                                "name": "KEY_PATH",
                                "viewName": "key path",
                                "type": "string",
                                "method": "579dfe9a15c746a433e47299",
                                "options": [],
                                "createdAt": "2016-07-31T13:35:23.127Z",
                                "updatedAt": "2016-07-31T13:35:23.127Z",
                                "id": "579dfe9b15c746a433e472a1"
                              },
                              {
                                "name": "REMOTE_USER",
                                "viewName": "remote user",
                                "type": "string",
                                "method": "579dfe9a15c746a433e47299",
                                "options": [],
                                "createdAt": "2016-07-31T13:35:23.131Z",
                                "updatedAt": "2016-07-31T13:35:23.131Z",
                                "id": "579dfe9b15c746a433e472a2"
                              },
                              {
                                "name": "REMOTE_ADDRESS",
                                "viewName": "remote address",
                                "type": "string",
                                "method": "579dfe9a15c746a433e47299",
                                "options": [],
                                "createdAt": "2016-07-31T13:35:23.131Z",
                                "updatedAt": "2016-07-31T13:35:23.131Z",
                                "id": "579dfe9b15c746a433e472a3"
                              },
                              {
                                "name": "COMMANDS",
                                "viewName": "command",
                                "type": "string",
                                "method": "579dfe9a15c746a433e47299",
                                "options": [],
                                "createdAt": "2016-07-31T13:35:23.132Z",
                                "updatedAt": "2016-07-31T13:35:23.132Z",
                                "id": "579dfe9b15c746a433e472a4"
                              }
                            ],
                            "agent": "579dfe9a15c746a433e47295",
                            "name": "remoteCommandExecute",
                            "viewName": "remote command execution",
                            "actionString": "ssh -i KEY_PATH REMOTE_USER@REMOTE_ADDRESS COMMANDS",
                            "createdAt": "2016-07-31T13:35:22.968Z",
                            "updatedAt": "2016-07-31T13:35:23.061Z",
                            "id": "579dfe9a15c746a433e47299"
                          },
                          {
                            "params": [
                              {
                                "name": "KEY_PATH",
                                "viewName": "key path",
                                "type": "string",
                                "method": "579dfe9a15c746a433e4729a",
                                "options": [],
                                "createdAt": "2016-07-31T13:35:23.073Z",
                                "updatedAt": "2016-07-31T13:35:23.073Z",
                                "id": "579dfe9b15c746a433e4729d"
                              },
                              {
                                "name": "REMOTE_ADDRESS",
                                "viewName": "remote address",
                                "type": "string",
                                "method": "579dfe9a15c746a433e4729a",
                                "options": [],
                                "createdAt": "2016-07-31T13:35:23.074Z",
                                "updatedAt": "2016-07-31T13:35:23.074Z",
                                "id": "579dfe9b15c746a433e4729f"
                              },
                              {
                                "name": "REMOTE_USER",
                                "viewName": "remote user",
                                "type": "string",
                                "method": "579dfe9a15c746a433e4729a",
                                "options": [],
                                "createdAt": "2016-07-31T13:35:23.073Z",
                                "updatedAt": "2016-07-31T13:35:23.073Z",
                                "id": "579dfe9b15c746a433e4729e"
                              },
                              {
                                "name": "SCRIPT_PATH",
                                "viewName": "script path on server",
                                "type": "string",
                                "method": "579dfe9a15c746a433e4729a",
                                "options": [],
                                "createdAt": "2016-07-31T13:35:23.075Z",
                                "updatedAt": "2016-07-31T13:35:23.075Z",
                                "id": "579dfe9b15c746a433e472a0"
                              }
                            ],
                            "agent": "579dfe9a15c746a433e47295",
                            "name": "remoteScriptExecution",
                            "viewName": "remote script execution",
                            "actionString": "ssh -i KEY_PATH REMOTE_USER@REMOTE_ADDRESS 'bash -s' < SCRIPT_PATH",
                            "createdAt": "2016-07-31T13:35:22.969Z",
                            "updatedAt": "2016-07-31T13:35:23.064Z",
                            "id": "579dfe9a15c746a433e4729a"
                          },
                          {
                            "params": [
                              {
                                "name": "command",
                                "viewName": "command",
                                "type": "string",
                                "method": "579dfe9a15c746a433e4729b",
                                "options": [],
                                "createdAt": "2016-07-31T13:35:23.139Z",
                                "updatedAt": "2016-07-31T13:35:23.139Z",
                                "id": "579dfe9b15c746a433e472a6"
                              },
                              {
                                "name": "paramsList",
                                "viewName": "list of params(multiple lists of params)",
                                "type": "string",
                                "method": "579dfe9a15c746a433e4729b",
                                "options": [],
                                "createdAt": "2016-07-31T13:35:23.140Z",
                                "updatedAt": "2016-07-31T13:35:23.140Z",
                                "id": "579dfe9b15c746a433e472a7"
                              }
                            ],
                            "agent": "579dfe9a15c746a433e47295",
                            "name": "executeMultiple",
                            "viewName": "execute command multiple times",
                            "createdAt": "2016-07-31T13:35:22.970Z",
                            "updatedAt": "2016-07-31T13:35:23.055Z",
                            "id": "579dfe9a15c746a433e4729b"
                          }
                        ],
                        "type": "CommandLine",
                        "imgUrl": "images/controls/CommandLine.png",
                        "api": "static",
                        "createdAt": "2016-07-31T13:35:22.822Z",
                        "updatedAt": "2016-07-31T13:35:22.891Z",
                        "id": "579dfe9a15c746a433e47295"
                      },
                      "method": {
                        "params": [
                          {
                            "name": "COMMANDS",
                            "viewName": "command",
                            "type": "string",
                            "method": "579dfe9a15c746a433e47296",
                            "options": [],
                            "createdAt": "2016-07-31T13:35:23.067Z",
                            "updatedAt": "2016-07-31T13:35:23.067Z",
                            "id": "579dfe9b15c746a433e4729c",
                            "text": "echo \"aaaaa\""
                          }
                        ],
                        "agent": "579dfe9a15c746a433e47295",
                        "name": "execute",
                        "viewName": "execute command",
                        "actionString": "COMMANDS",
                        "createdAt": "2016-07-31T13:35:22.964Z",
                        "updatedAt": "2016-07-31T13:35:23.052Z",
                        "id": "579dfe9a15c746a433e47296"
                      },
                      "params": {},
                      "name": "qqq",
                      "timeout": 0,
                      "timeunit": "1",
                      "retries": 0,
                      "mandatory": false,
                      "suspend": false,
                      "result": "",
                      "lastUpdate": "2016-09-13T06:13:35.441Z"
                    }
                  ],
                  "result": "",
                  "condition": false
                }
              ],
              "result": "",
              "condition": false,
              "linkIndex": 1
            }
          ],
          "code": "",
          "attributes": []
        },
        "date": "2016-09-13T06:13:45.388Z"
      }
    };

    this.parseExecutionData(this.execution.resObj);
  }

  parseExecutionData(execution) {
    let processes = {};
    _.each(execution.resObj.agents, (agent, agentName) => {
      _.each(agent.processes, (proc) => {
        if (!processes[proc.name]) {
          processes[proc.name] = proc;
          processes[proc.name].status = proc.status;
          processes[proc.name].agents = [];
        }
        if (proc.status < 0) {
          processes[proc.name].status = proc.status;
        }
        processes[proc.name].agents.push({
          name: agentName,
          status: agent.status,
          result: agent.result
        });

      });
    });
    this.processes = _.map(processes, (proc) => { return proc; });
    console.log(this.processes);
  }

  closeWindow() {
    this.dialog.close();
  }

}
