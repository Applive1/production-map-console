import { Component, OnInit, Input } from '@angular/core';
import { ConstsService } from '../../shared/services/consts.service';

import { DialogRef, ModalComponent } from 'angular2-modal';
import { overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';

import { MessagePopupComponent, MessagePopupComponentData } from './message-popup/message-popup.component';

declare const io: any;

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  @Input() messages: any = [];
  socket: any;

  constructor(private constsService: ConstsService, public modal: Modal) { }

  ngOnInit() {
    this.socket = io.sails.connect(this.constsService.getServerUrl());
    this.socket.on('update', (msg) => {
      this.messages.push({
        data: new Date(),
        content: msg
      });
    });

    this.socket.on('serverError', (msg) => {
      this.messages.push({
        data: new Date(),
        content: msg
      });
    });
  }

  openMessage(message) {
    this.modal.open(MessagePopupComponent, overlayConfigFactory(new MessagePopupComponentData(message.content), BSModalContext));
  }

  clearMessages() {
    this.messages.splice(0, this.messages.length);
  }

}
