import { Component } from '@angular/core';
import { FORM_DIRECTIVES } from "@angular/common";

import {
  CalendarEvent, CalendarEventAction
} from "angular2-calendar";
import * as moment from 'moment';
import {UnitOfTime, Moment} from 'moment';
import {CalendarModule} from 'primeng/primeng';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'pm-calendar',
  templateUrl: 'calendar.component.html',
  styleUrls: ['calendar.component.css'],
  directives: [FORM_DIRECTIVES]
})
export class CalendarComponent {
  private view: UnitOfTime = 'month';
  private viewDate: Date = new Date();

  private actions: CalendarEventAction[] = [{
    label: '<i class="fa fa-fw fa-pencil"></i>',
    onClick: ({event}: {event: CalendarEvent}): void => {
      console.log('Edit event', event);
    }
  }, {
    label: '<i class="fa fa-fw fa-times"></i>',
    onClick: ({event}: {event: CalendarEvent}): void => {
      this.events = this.events.filter(iEvent => iEvent !== event);
    }
  }];

  private events: CalendarEvent[] = [{
    start: moment().startOf('day').subtract(1, 'day').toDate(),
    end: moment().add(1, 'day').toDate(),
    title: 'A 3 day event',
    color: colors.red,
    actions: this.actions
  }, {
    start: moment().startOf('day').toDate(),
    title: 'An event with no end date',
    color: colors.yellow,
    actions: this.actions
  }, {
    start: moment().endOf('month').subtract(3, 'days').toDate(),
    end: moment().endOf('month').add(3, 'days').toDate(),
    title: 'A long event that spans 2 months',
    color: colors.blue
  }];

  job = {
    type: 'repeated',
    hours: '0',
    minutes: '00',
    date: new Date()
  };

  constructor() {
  }

  incHours() {
    this.job.hours ++;
    if (this.job.hours > 23) this.job.hours = '0';
  }

  decHours() {
    this.job.hours --;
    if (this.job.hours < 0) this.job.hours = '0';
  }

  incMinutes() {
    this.job.minutes ++;
    if (this.job.minutes > 59) this.job.minutes = '00';
    else if (this.job.minutes < 10) this.job.minutes = '0' + this.job.minutes;
  }

  decMinutes() {
    this.job.minutes --;
    if (this.job.minutes < 0) this.job.minutes = '00';
    else if (this.job.minutes < 10) this.job.minutes = '0' + this.job.minutes;
  }

  ngOnInit() {
  }
}
