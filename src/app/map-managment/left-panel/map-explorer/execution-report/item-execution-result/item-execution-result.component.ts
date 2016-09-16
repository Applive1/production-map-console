import { OnInit, Component, Input, ViewEncapsulation } from '@angular/core';

import * as _ from 'lodash';

@Component({
  selector: 'app-item-execution-result',
  templateUrl: './item-execution-result.component.html',
  styleUrls: ['./item-execution-result.component.css']
})
export class ItemExecutionResultComponent implements OnInit {

  map: any = {};
  @Input() process: any = {};
  tab: number;

  // Doughnut
  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType: string = 'doughnut';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  constructor() {
  }

  ngOnInit() {
    this.tab = 1; /* 1 = the status view */
  }


}
