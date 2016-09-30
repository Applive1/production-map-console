import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServersService } from '../../shared/services/servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  providers: [ServersService]
})
export class ServersComponent implements OnInit, OnDestroy {

  agentsArray: any[] = [];
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
      serversComponent.serverService.getAgents().subscribe((res) => {
        serversComponent.agents = res;
        serversComponent.serverService.getStatus().subscribe((resp) => {
          serversComponent.agentsArray = resp;
        }, (err) => {
          console.log(err);
        });
      });
    };
  }

}
