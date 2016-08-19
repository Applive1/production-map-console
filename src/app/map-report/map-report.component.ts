import { OnInit, Component, ViewEncapsulation } from '@angular/core';

import { DialogRef, ModalComponent } from '../../../node_modules/angular2-modal';
import { BSModalContext } from '../../../node_modules/angular2-modal/plugins/bootstrap/index';
import { Modal } from 'angular2-modal/plugins/bootstrap';

import { AgentsService } from '../shared/services/agents.service';

import * as _ from 'lodash';

export class MapReportComponentWindowData extends BSModalContext {
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
    styleUrls: ['map-report.component.css'],
    templateUrl: 'map-report.component.html'
})
export class MapReportComponentWindow implements ModalComponent<MapReportComponentWindowData>, OnInit {
    context: MapReportComponentWindowData;
    action: any = {};

    constructor(public dialog: DialogRef<MapReportComponentWindowData>, public modal: Modal, private agentsService: AgentsService) {
        this.context = dialog.context;
    }

    ngOnInit() {
    }

    closeWindow() {
        this.dialog.close();
    }
}
