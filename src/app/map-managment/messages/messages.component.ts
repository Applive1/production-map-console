import { Component, OnInit, Input } from '@angular/core';
import { ConstsService } from '../../shared/services/consts.service';

declare const io: any;

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  @Input() messages: any = [];
  socket: any;

  constructor(private constsService: ConstsService) { }

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

  clearMessages() {
    this.messages.splice(0, this.messages.length);
  }

}
