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
      let servers = [];
      let serverList = [];

      if (!serversComponent.map || !serversComponent.map.activeServers) {
          return;
      }
      serversComponent.serverService.getAgents().subscribe((res) => {
        servers = res;
        serversComponent.serverService.getStatus().subscribe((resp) => {
          let serversArray = resp;
          _.each(servers, (server: any) => {
            for(let key in serversArray[server.key]) {
              server[key] = serversArray[server.key][key];
            }
          });
          _.each(servers, (server: any) => {
            if (!serversComponent.map.activeServers[server.id]) {
              server.active = false;
            }  else {
              server.active = serversComponent.map.activeServers[server.id].active;
            }
            serversComponent.map.activeServers[server.id] = server;
            serverList.push(serversComponent.map.activeServers[server.id]);
          });
          serversComponent.servers = serverList;
        }, (err) => {
          console.log(err);
        });
      });
    };
  }

  changeServerStatus(server) {
    server.active = !server.active;
  }

}
