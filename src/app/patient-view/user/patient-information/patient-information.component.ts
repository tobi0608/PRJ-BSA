import { Component, OnInit } from '@angular/core';
import {LogInCheck} from '../../../global-funtions/LogInCheck';
import {GetDocDetails} from './functions/GetDocDetails';
import {FilterMedication} from '../../../global-funtions/FilterMedication';
let user = [];

@Component({
  selector: 'app-patient-information',
  templateUrl: './patient-information.component.html',
  styleUrls: ['./patient-information.component.scss']
})
export class PatientInformationComponent implements OnInit {
  user;
  doc;
  currentMeds;
  usedMeds;
  constructor() { }

  ngOnInit() {
      user = document.cookie.split(',');
      LogInCheck('patient');
      this.user = user;
      this.doc = GetDocDetails();
      this.currentMeds = FilterMedication(user[0], 'fresh');
      this.usedMeds = FilterMedication(user[0], 'expired');
  }

    onOff(): void {
        document.cookie = 'null; path=/';
        console.log(document.cookie);
    }
}
