import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServersService } from '../../shared/services/servers.service';

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

  constructor(private serverService: ServersService) { }

  ngOnInit() {
    this.search = {};
    this.interval = setInterval(this.getAgents(this), 5000);
    this.getAgents(this)();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  getAgents(serversComponent) {
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

}
