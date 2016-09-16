import { Component, OnInit, Input } from '@angular/core';

declare const io: any;

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  @Input() messages: any = [];
  socket: any;
  SERVER_URL: string = 'http://localhost:8080/';

  constructor() { }

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

  clearMessages() {
    this.messages.splice(0, this.messages.length);
  }

}
