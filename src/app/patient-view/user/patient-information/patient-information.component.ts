import { Component, OnInit } from '@angular/core';
import {LogInCheck} from '../../../global-files/function/LogInCheck';
import {GetDocDetails} from './functions/GetDocDetails';
import {FilterMedication} from '../../../global-files/function/FilterMedication';
import {GetOpenHours} from '../../../global-files/function/GetOpenHours';

@Component({
  selector: 'app-patient-information',
  templateUrl: './patient-information.component.html',
  styleUrls: ['./patient-information.component.scss']
})
export class PatientInformationComponent implements OnInit {
    doc;
    currentMeds;
    usedMeds;
    openhours;
    constructor() { }

  ngOnInit() {
      const sv = localStorage.getItem('sv');
      LogInCheck('patient');
      this.doc = GetDocDetails();
      this.currentMeds = FilterMedication(sv, 'fresh');
      this.usedMeds = FilterMedication(sv, 'expired');
      this.openhours = GetOpenHours('patient');
  }
}
