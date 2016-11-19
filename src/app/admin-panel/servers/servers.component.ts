import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServersService } from '../../shared/services/servers.service';

import { overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';

import { EditAgentComponentWindow, EditAgentComponentWindowData } from './edit-agent/edit-agent.component';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  providers: [ServersService]
})
export class ServersComponent implements OnInit, OnDestroy {

  agents: any[] = [];
  search: any;
  interval: any;

  constructor(public modal: Modal, private serverService: ServersService) { }

  ngOnInit() {
    this.search = {
      type: 0
    };
    this.interval = setInterval(this.getAgents(this), 5000);
    this.getAgents(this)();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  editAgent(agent) {
    this.modal.open(EditAgentComponentWindow, overlayConfigFactory(new EditAgentComponentWindowData(agent), BSModalContext));
  }

  // this bevabiour is not supported in this version
  deleteAgent(ind) {
    // this.serverService.deleteAgent();
  }

  getAgents(serversComponent: ServersComponent) {
    return () => {
      let agentsArray = [];
      serversComponent.serverService.getAgents().subscribe((res) => {
        let agents = res;
        serversComponent.serverService.getStatus().subscribe((resp) => {
          agentsArray = resp;
          _.each(agents, (agent: any) => {
            for(let key in agentsArray[agent.key]) {
              agent[key] = agentsArray[agent.key][key];
            }
          });
          serversComponent.agents = agents;
        }, (err) => {
          console.log(err);
        });
      });
    };
  }

  clearFilter(search: any) {
    search.type = 0;
  }

}
