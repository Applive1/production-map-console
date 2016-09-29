import { Component, OnInit } from '@angular/core';
import { AgentsService } from '../../shared/services/agents.service';

import { overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';

import { AddDedicatedAgentComponentWindow, AddDedicatedAgentComponentWindowData } from './add-dedicated-agent/add-dedicated-agent.component';

@Component({
  selector: 'app-dedicated-agents',
  templateUrl: './dedicated-agents.component.html',
  styleUrls: ['./dedicated-agents.component.css'],
  providers: [AgentsService]
})
export class DedicatedAgentsComponent implements OnInit {

  agents: any[];

  constructor(public modal: Modal, private agentsService: AgentsService) { }

  ngOnInit() {
    this.agents = [];
    this.agentsService.all(false).subscribe((agentsData: any) => {
      this.agents = agentsData.servers;
    });
  }

  addAgent() {
    this.modal.open(AddDedicatedAgentComponentWindow, overlayConfigFactory(new AddDedicatedAgentComponentWindowData(), BSModalContext));
  }

}
