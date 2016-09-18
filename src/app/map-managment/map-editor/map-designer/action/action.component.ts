import { OnInit, Component, ViewEncapsulation } from '@angular/core';

import { DialogRef, ModalComponent } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap/index';
import { Modal } from 'angular2-modal/plugins/bootstrap';

import { AgentsService } from '../../../../shared/services/agents.service';

import * as _ from 'lodash';

export class ActionsComponentWindowData extends BSModalContext {
  constructor(public action: any, public serverType: any) {
    super();
    this.size = 'lg';
  }
}

/**
 * A Sample of how simple it is to create a new window, with its own injects.
 */
@Component({
  selector: 'modal-content',
  styleUrls: ['action.component.css'],
  templateUrl: 'action.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [AgentsService]
})
export class ActionsComponentWindow implements ModalComponent<ActionsComponentWindowData>, OnInit {
  context: ActionsComponentWindowData;
  action: any = {};

  constructor(public dialog: DialogRef<ActionsComponentWindowData>,
    public modal: Modal,
    private agentsService: AgentsService) {
    this.context = dialog.context;
    this.action = this.context.action;
  }

  ngOnInit() {
    console.log("action on init");
    console.log(this.action);
    console.log(this.context.serverType);
    this.agentsService.all(false).subscribe((res) => {
      if (_.isEmpty(this.action.server)) {
        this.action.server = _.cloneDeep(this.agentsService.get(this.context.serverType));
        console.log(this.action.server);
      }
    });
  }

  closeWindow() {
    let now = new Date();
    this.action.lastUpdate = now;
    this.dialog.close();
  }
}
