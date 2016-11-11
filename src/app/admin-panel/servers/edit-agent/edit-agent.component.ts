import { Component, ViewEncapsulation } from '@angular/core';

import { DialogRef, ModalComponent } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { ConstsService } from '../../../shared/services/consts.service';
import { ServersService } from '../../../shared/services/servers.service';


import * as _ from 'lodash';

export class EditAgentComponentWindowData extends BSModalContext {
  agent: any;

  constructor(agent: any) {
    super();
    this.isBlocking = true;
    this.showClose = true;
    this.keyboard = 27; /* close on escape */
    this.agent = agent;
  }
}

@Component({
  selector: 'modal-content',
  templateUrl: './edit-agent.component.html',
  styleUrls: ['./edit-agent.component.css'],
  providers: [ServersService]
})
export class EditAgentComponentWindow implements ModalComponent<EditAgentComponentWindowData> {
  context: EditAgentComponentWindowData;
  agent: any;
  updatingAgent: boolean;

  constructor(public dialog: DialogRef<EditAgentComponentWindowData>, public modal: Modal, private constsService: ConstsService, private serversService: ServersService) {
    this.context = dialog.context;
    this.agent = this.context.agent;
    this.updatingAgent = false;
  }

  addAttribute() {
    let attribute = {
      type: 'String',
      name: '',
      value: ''
    };
    if (!this.agent.attributes) {
      this.agent.attributes = [];
    }
    this.agent.attributes.push(attribute);
  }

  deleteAttribute($event, index) {
    this.agent.attributes.splice(index, 1);
  }

  updateAgent(agent) {
    this.updatingAgent = true;
    this.serversService.updateAgent(agent).subscribe((res) => {
      this.updatingAgent = false;
      this.dialog.close();
    });
  }

  closeWindow() {
    this.dialog.close();
  }

}
