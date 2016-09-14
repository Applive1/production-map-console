import { Component, OnInit, Input } from '@angular/core';
import {
  msgContentComponentWindowData,
  msgContentComponentWindow
} from "./msg-content-popup/msg-content-popup.component";
import { Modal } from 'angular2-modal/plugins/bootstrap';

declare const io: any;

@Component({
  moduleId: module.id,
  selector: 'pm-messages',
  templateUrl: 'messages.component.html',
  styleUrls: ['messages.component.css']
})
export class MessagesComponent implements OnInit {
  @Input() messages: any = [];
  socket: any;
  SERVER_URL: string = 'http://localhost:8080/';

  constructor(public modal: Modal) {}

  ngOnInit() {
    this.socket = io.sails.connect(this.SERVER_URL);
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

  openMsgPopup(msg) {
    this.modal.open(msgContentComponentWindow, new msgContentComponentWindowData(msg));
  }

  clearMessages() {
    this.messages.splice(0, this.messages.length);
  }
}
