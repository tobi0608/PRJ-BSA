import { Component, OnInit } from '@angular/core';
import {MESSAGES} from '../../mock-files/mock-messages';

@Component({
  selector: 'app-alert-list',
  templateUrl: './alert-list.component.html',
  styleUrls: ['./alert-list.component.scss']
})
export class AlertListComponent implements OnInit {

  messages = MESSAGES;
  constructor() { }

  ngOnInit() {
  }

}
