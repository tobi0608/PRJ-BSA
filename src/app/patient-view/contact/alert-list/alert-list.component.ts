import { Component, OnInit } from '@angular/core';
import {LogInCheck} from '../../../global-files/function/LogInCheck';
import {MessageFilter} from '../../../global-files/function/MessageFilter';
import {Router} from '@angular/router';

@Component({
  selector: 'app-alert-list',
  templateUrl: './alert-list.component.html',
  styleUrls: ['./alert-list.component.scss']
})
export class AlertListComponent implements OnInit {
  messages;
  constructor(public router: Router) { }

  ngOnInit() {
      LogInCheck('patient');
      this.messages  = MessageFilter('Pat');
  }
    onRoute(route): void {
        this.router.navigate([route]);
    }
    onSeen(message): void {
        message.seen = ' ';
    }
    onOff(): void {
        document.cookie = 'null; path=/';
        console.log(document.cookie);
    }
}
