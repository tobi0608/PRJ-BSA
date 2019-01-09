import { Component, OnInit } from '@angular/core';
import {LogInCheck} from '../../../global-files/function/LogInCheck';
import {GetUserData} from '../../../global-files/function/GetUserData';
import {GetDocDetails} from './functions/GetDocDetails';
import {FilterMedication} from '../../../global-files/function/FilterMedication';

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
      const sv = localStorage.getItem('sv');
      LogInCheck('patient');
      this.user = GetUserData(sv);
      this.doc = GetDocDetails();
      this.currentMeds = FilterMedication(sv, 'fresh');
      this.usedMeds = FilterMedication(sv, 'expired');
  }
}
