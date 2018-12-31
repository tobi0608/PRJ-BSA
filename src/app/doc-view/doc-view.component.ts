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
  name = USERS[1].last_name;
  selectedPatient: Patient;
  messages = MESSAGES;

  constructor() {}

  ngOnInit() {}
}

