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
          serversComponent.agents = serversComponent.filterServers(serversComponent.search, agents);
        }, (err) => {
          console.log(err);
        });
      });
    };
  }

  clearFilter(search: any) {
    search.type = 0;
  }

  filterServers(search: any, servers: any[]): any {
    if (search.type === 0 || !search.text || search.text === '') {
      return servers;
    }

    let filteredServers = [];
    let filterTerm: string;
    if (search.type === 1) {
      filterTerm = 'name';
    }

    if (search.type === 2) {
      filterTerm = 'arch';
    }

    if (search.type === 3) {
      filteredServers = this.filterByAttribute(search.attrName, search.text, servers);
    } else {
      filteredServers = this.filterByTerm(filterTerm, search.text, servers);
    }

    this.agents = filteredServers;
    return filteredServers;
  }

  filterByAttribute(attr: string, searchString: string, servers: any[]) {
    let filteredServers = [];
    _.each(servers, (server) => {
      if (!server.attributes || server.attributes.length === 0) {
        return;
      } else {
        _.each(server.attributes, (attribute) => {
          if (attribute.name.includes(attr) && attribute.value.includes(searchString)) {
            filteredServers.push(server);
          }
        });
      }
    });
    return filteredServers;
  }

  filterByTerm(filterTerm: string, searchString: string, servers: any[]) {
    let filteredServers = [];
    _.each(servers, (server) => {
      if (!server[filterTerm]) {
        return;
      } else if (server[filterTerm].includes(searchString)) {
        filteredServers.push(server);
      }
    });
    return filteredServers;
  }

}
