import {Component, OnInit} from '@angular/core';
import { Patient } from '../mock-files/patients';
import { PATIENTS } from '../mock-files/mock-patients';
import { MESSAGES} from '../mock-files/mock-messages';
import { USERS } from '../mock-files/mock-user';

@Component({
  selector: 'app-doc-view',
  templateUrl: './doc-view.component.html',
  styleUrls: ['./doc-view.component.scss']
})

export class DocViewComponent implements OnInit {
  name = USERS[1].name;
  patients = PATIENTS;
  selectedPatient: Patient;
  messages = MESSAGES;
  number_new_alerts = MESSAGES.length - USERS[1].last_seen_alerts;

  constructor() {}

  ngOnInit() {}

  onSelect(patient: Patient): void {
    this.selectedPatient = patient;
  }
}

