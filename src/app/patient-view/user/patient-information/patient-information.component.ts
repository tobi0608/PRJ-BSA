import { Component, OnInit } from '@angular/core';
import {LogInCheck} from '../../../global-files/function/LogInCheck';
import {GetDocDetails} from './functions/GetDocDetails';

@Component({
  selector: 'app-patient-information',
  templateUrl: './patient-information.component.html',
  styleUrls: ['./patient-information.component.scss']
})
export class PatientInformationComponent implements OnInit {
    doc;
    constructor() { }

  ngOnInit() {
      const sv = localStorage.getItem('sv');
      LogInCheck('patient');
      this.doc = GetDocDetails();
  }
}
