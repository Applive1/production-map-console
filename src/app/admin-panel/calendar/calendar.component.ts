import { Component, OnInit } from '@angular/core';

import { JobsService } from '../../shared/services/jobs.service';
import { ProjectService } from '../../shared/services/project.service';
import { AuthenticationService } from '../../shared/services/authentication.service';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [JobsService, ProjectService]
})
export class CalendarComponent implements OnInit {

  projects: any[];
  job: any;
  event: any;
  calendar: any;
  eventSources: any;
  cronJobs: any;

  constructor(private jobsService: JobsService, private projectService: ProjectService, private authenticationService: AuthenticationService) {
  }

  createJob() {
    this.job.version = this.job.Map.versions.length - 1;
    this.jobsService.addJob(this.job).subscribe((result) => {
      if (!this.job.isCron) {
        let job = result;
        let event = {
          title: this.job.Map.name,
          type: 'important',
          start: job.startAt,
          draggable: false,
          resizable: false,
          job: result
        };

        this.calendar.events.push(event);
      } else {
        this.cronJobs.push(result);
      }
      this.job = {
        startAt: new Date(),
        isCron: false
      };
    });
  }

  editJob(event) {
    this.event = event;
    this.job = event.job;
  }

  deleteJob(event) {
    let index = this.calendar.events.indexOf(event);
    if (index === -1) {
      return;
    }

    this.jobsService.deleteJob(event.job.id).subscribe((result) => {
      this.calendar.events.splice(index, 1);
    });
  }

  updateJob() {
    this.jobsService.updateJob(this.job).subscribe((result) => {
      let job = result;
      let event = {
        title: this.job.Map.name,
        type: 'important',
        startsAt: job.startAt,
        draggable: false,
        resizable: false,
        job: _.cloneDeep(this.job)
      };

      this.calendar.events.splice(this.calendar.events.indexOf(this.event), 1);

      this.calendar.events.push(event);

      this.job = {
        startAt: new Date()
      };
    })
  }

  ngOnInit() {

    let user = this.authenticationService.getCurrentUser();
    this.projectService.getJstreeProjectsByUser(user.id).subscribe((projects) => {
      this.projects = projects;
    },
      (error) => {
        console.log(error);
      });

    this.job = {
      startAt: new Date(),
      isCron: false,
      selectedProject: {
        maps: []
      }
    }
    this.event = {};
    this.calendar = {
      calendarDay: new Date(),
      isCellOpen: true,
      calendarView: 'month',
      events: []
    };
    this.eventSources = [];
    this.cronJobs = [];

    this.jobsService.getFutureJobs().subscribe((result) => {
      result.forEach((job) => {
        if (!job.isCron) {
          this.calendar.events.push(this.jobToEvent(job));
        } else {
          this.cronJobs.push(job);
        }
      });
    });

  }

  private jobToEvent(job) {
    return {
      title: job.Map.name,
      type: 'important',
      start: job.startAt,
      // endsAt: moment().startOf('week').add(1, 'week').add(9, 'hours').toDate(),
      draggable: false,
      resizable: false,
      job: job
    };
  }

}
