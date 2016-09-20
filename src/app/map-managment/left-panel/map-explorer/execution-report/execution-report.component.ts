import { OnInit, Component, ViewEncapsulation, ViewChild, AfterViewInit } from '@angular/core';

import { DialogRef, ModalComponent } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { Modal } from 'angular2-modal/plugins/bootstrap';

import * as _ from 'lodash';
import 'chart.js';

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

  constructor(public dialog: DialogRef<ExecutionReportComponentWindowData>, public modal: Modal) {
    this.context = dialog.context;
    this.map = this.context.map;
  }

  ngOnInit() {
    this.execIndex = this.map.versions[this.map.versionIndex].executions.length - 1;
    this.execution = this.map.versions[this.map.versionIndex].executions[this.execIndex]; /* get last element from execution array */
    this.parseExecutionData(this.execution.resObj);
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

  parseExecutionData(execution) {
    this.actions = [];
    this.processes = [];
    this.processes = _.map(execution.links, (link: any) => { return this.first(link.processes); });
    this.initStatusChart();
  }

  chooseProcess(process) {
    this.actions = _.map(process.actions, (action) => { return action; });
  }

  closeWindow() {
    this.dialog.close();
  }

  chooseNextExecution() {
    if ((this.execIndex + 1) > (this.map.versions[this.map.versionIndex].executions.length - 1)) {
      return;
    }

    this.execIndex++;
    this.execution = this.map.versions[this.map.versionIndex].executions[this.execIndex]; /* get last element from execution array */
    this.parseExecutionData(this.execution.resObj);
  }

  choosePreviousExecution() {
    if ((this.execIndex - 1) < 0) {
      return;
    }

    this.execIndex--;
    this.execution = this.map.versions[this.map.versionIndex].executions[this.execIndex]; /* get last element from execution array */
    this.parseExecutionData(this.execution.resObj);
  }

  private first(obj: any) {
    for (let a in obj) {
      return obj[a];
    }
  }


}


