import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ServersService } from '../../../shared/services/servers.service';

@Component({
  selector: 'app-map-servers',
  templateUrl: './map-servers.component.html',
  styleUrls: ['./map-servers.component.css'],
  providers: [ServersService]
})
export class MapServersComponent implements OnInit, OnDestroy {

  servers: any[] = [];
  search: any;
  interval: any;
  @Input() map: any;

  constructor(private serverService: ServersService) { }

  ngOnInit() {
    this.search = {};
    this.interval = setInterval(this.getServers(this), 5000);
    this.getServers(this)();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  getServers(serversComponent: MapServersComponent) {
    return () => {
      serversComponent.serverService.getAgents().subscribe((res) => {
        let servers = res;
        let serverList = [];
        if (!serversComponent.map || !serversComponent.map.activeServers) {
          return;
        }
        _.each(servers, (server) => {
          if (!serversComponent.map.activeServers[server.id]) {
            server.active = false;
            serversComponent.map.activeServers[server.id] = server;
          }
          serverList.push(serversComponent.map.activeServers[server.id]);
        });
        serversComponent.servers = serverList;
      });
    };
  }

  changeServerStatus(server) {
    server.active = !server.active;
  }

}
