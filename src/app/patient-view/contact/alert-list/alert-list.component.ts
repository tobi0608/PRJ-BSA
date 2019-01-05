import { Component, OnInit } from '@angular/core';
import {LogInCheck} from '../../../global-funtions/LogInCheck';
import {MessageFilter} from '../../../global-funtions/MessageFilter';

@Component({
  selector: 'app-alert-list',
  templateUrl: './alert-list.component.html',
  styleUrls: ['./alert-list.component.scss']
})
export class AlertListComponent implements OnInit {
  messages;
  constructor() { }

  ngOnInit() {
      LogInCheck('patient');
      this.messages  = MessageFilter('Pat');
  }
    onSeen(message): void {
        message.seen = ' ';
    }
    onOff(): void {
        document.cookie = 'null; path=/';
        console.log(document.cookie);
    }
}
