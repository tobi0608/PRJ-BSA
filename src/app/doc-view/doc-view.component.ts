import {Component, OnInit, ViewChild} from '@angular/core';
import { Patient } from '../patients';
import { PATIENTS } from '../mock-patients';
import { MESSAGES} from '../mock-messages';
import { USERS } from '../mock-user';

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
  number_new_alerts = MESSAGES.length - USERS[0].last_seen_alerts;
  @ViewChild('newPatientSection') newPatientSection;
  @ViewChild('changeRecord') changeRecord;
  @ViewChild('defaultRecord') defaultRecord;

  constructor() {}

  ngOnInit() {}

  onAddBtn(): void {
    console.log('test');
      this.newPatientSection.nativeElement.style.display = 'block';
  }
  onChangeBtn(): void{
      this.changeRecord.nativeElement.style.display = 'block';
      this.defaultRecord.nativeElement.style.display = 'none';
  }
  onSelect(patient: Patient): void {
    this.selectedPatient = patient;
  }
}

