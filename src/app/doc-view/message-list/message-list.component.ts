import { Component, OnInit } from '@angular/core';
import {MESSAGES} from '../../mock-files/mock-messages';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {
  messages = MESSAGES;
  messageCount = MESSAGES.length;

  constructor() { }

  ngOnInit() {
  }

}
