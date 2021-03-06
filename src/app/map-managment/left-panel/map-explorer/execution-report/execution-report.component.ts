import { OnInit, Component, ViewEncapsulation, ViewChild, AfterViewInit } from '@angular/core';

import { DialogRef, ModalComponent } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { Modal } from 'angular2-modal/plugins/bootstrap';

import * as _ from 'lodash';
import 'chart.js';

export class ExecutionReportComponentWindowData extends BSModalContext {
  map: any;

  constructor(map: any, public execution: string) {
    super();
    this.size = 'lg';
    this.map = map;
  }
}

@Component({
  selector: 'app-execution-report',
  templateUrl: './execution-report.component.html',
  styleUrls: ['./execution-report.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ExecutionReportComponent implements OnInit, AfterViewInit {

  context: ExecutionReportComponentWindowData;
  @ViewChild('aggStatusChart') aggStatusChart;
  aggeregatedStatusData: any[] = [];
  red: string = '#f85656';
  yellow: string = '#eab839';
  green: string = '#44bb75';
  blue: string = '#00a8e9';

  map: any = {};
  execution: any = {
    processes: [1, 2, 3]
  };
  execIndex = 0;

  actions: any;
  processes: any;

  user: any = { username: 'test' }

  private processesChunks: any;
  private procIndex = 0;
  private actionsChunks: any;
  private actionIndex = 0;
  private executions = [];

  constructor(public dialog: DialogRef<ExecutionReportComponentWindowData>, public modal: Modal) {
    this.context = dialog.context;
    this.map = this.context.map;
    this.execution = this.context.execution;
  }

  ngOnInit() {
    this.executions = _.flatMap(this.map.versions, (version: any) => {
      return version.executions;
    });
    if (this.execution === null) {
      this.execIndex = this.executions.length - 1;
      this.execution = this.executions[this.execIndex]; /* get last element from execution array */
      this.parseExecutionData(this.execution.resObj);
    } else {
      this.execIndex = _.findIndex(this.executions, (ei) => {
        return ei.date === this.execution.date;
      });
      if (this.execIndex > 0) {
        this.execution = this.executions[this.execIndex]; /* get last element from execution array */
        this.parseExecutionData(this.execution.resObj);
      }
    }
  }

  ngAfterViewInit() {
    this.initStatusChart();
  }


  initStatusChart() {

    let successNum = 0;
    let failNum = 0;
    let partialNum = 0;
    let didntRunNum = 0;

    _.each(this.execution.resObj.agents, (agent: any) => {
      if (agent.status < 0) {
        failNum++;
      } else {
        successNum++;
      }
    });
    this.aggeregatedStatusData = [
      successNum,
      partialNum,
      failNum,
      didntRunNum
    ];



    let backColors = [
      this.green,
      this.yellow,
      this.red,
      this.blue
    ];

    /* Init status chart */
    let StatusData = {
      labels: [
        'Success',
        'Partial',
        'Failed',
        "Didn't Run"
      ],
      datasets: [
        {
          data: this.aggeregatedStatusData,
          backgroundColor: backColors,
          borderWidth: 0,
          hoverBackgroundColor: backColors
        }]
    };

    let statusCtx = this.aggStatusChart.nativeElement.getContext('2d');
    new Chart(statusCtx, {
      type: 'doughnut',
      data: StatusData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        }
      }
    });
  }

  groupByChunks(data: any[]) {
    return this.groupBy(data, (element, index) => {
      let n = 3;
      return Math.floor(index / n);
    });
  }

  parseExecutionData(execution) {
    this.actions = [];
    this.processes = [];
    let allProcesses = _.map(execution.links, (link: any) => { return this.first(link.processes); });
    this.processesChunks = this.groupByChunks(allProcesses);
    this.procIndex = 0;
    this.processes = this.processesChunks[this.procIndex];
    this.initStatusChart();
  }

  nextProcesses() {
    if ((this.procIndex + 1) >= this.processesChunks.length ) {
      return;
    }
    this.procIndex++;
    this.processes = this.processesChunks[this.procIndex];
  }

  previousProcesses() {
    if ((this.procIndex - 1) < 0) {
      return;
    }
    this.procIndex--;
    this.processes = this.processesChunks[this.procIndex];
  }

  nextActions() {
    if ((this.actionIndex + 1) >= this.actionsChunks.length) {
      return;
    }
    this.actionIndex++;
    this.actions = this.actionsChunks[this.actionIndex];
  }

  previousActions() {
    if ((this.actionIndex - 1) < 0) {
      return;
    }
    this.actionIndex--;
    this.actions = this.actionsChunks[this.actionIndex];
  }


  chooseProcess(process) {
    this.actions = [];
    let allActions = _.map(process.actions, (action) => { return action; });
    this.actionsChunks = this.groupByChunks(allActions);
    this.actionIndex = 0;
    this.actions = this.actionsChunks[this.actionIndex];
  }

  closeWindow() {
    this.dialog.close();
  }

  chooseNextExecution() {
    if ((this.execIndex + 1) > (this.executions.length - 1)) {
      return;
    }

    this.execIndex++;
    this.execution = this.executions[this.execIndex]; /* get last element from execution array */
    this.parseExecutionData(this.execution.resObj);
  }

  choosePreviousExecution() {
    if ((this.execIndex - 1) < 0) {
      return;
    }

    this.execIndex--;
    this.execution = this.executions[this.execIndex]; /* get last element from execution array */
    this.parseExecutionData(this.execution.resObj);
  }

  private first(obj: any) {
    for (let a in obj) {
      return obj[a];
    }
  }

  private groupBy(arr: any[], func) {
    let groupObj: any = {};
    _.forEach(arr, (data, index) => {
      let grpIndex = func(data, index);
      if (!groupObj[grpIndex]) {
        groupObj[grpIndex] = [];
      }
      groupObj[grpIndex].push(data);
    });
    return _.toArray(groupObj);

  }

}


