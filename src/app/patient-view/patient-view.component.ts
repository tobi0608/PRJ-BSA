import { Component, OnInit } from '@angular/core';
import { USERS } from '../mock-files/mock-user';
import { MESSAGES } from '../mock-files/mock-messages';
import { DATES } from '../mock-files/mock-vital-parameter';

@Component({
  selector: 'app-patient-view',
  templateUrl: './patient-view.component.html',
  styleUrls: ['./patient-view.component.scss']
})
export class PatientViewComponent implements OnInit {
  name = USERS[0].name;
  number_new_alerts = MESSAGES.length - USERS[0].last_seen_alerts;

  messages = MESSAGES;
  dates = DATES;

  constructor() { }

  ngOnInit() {
  }
}
