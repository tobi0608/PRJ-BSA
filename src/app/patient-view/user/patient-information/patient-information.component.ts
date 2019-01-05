import { Component, OnInit } from '@angular/core';
import {LogInCheck} from '../../../global-funtions/LogInCheck';
import {GetDocDetails} from './functions/GetDocDetails';
let user = [];

@Component({
  selector: 'app-patient-information',
  templateUrl: './patient-information.component.html',
  styleUrls: ['./patient-information.component.scss']
})
export class PatientInformationComponent implements OnInit {
  user;
  doc;
  constructor() { }

  ngOnInit() {
      user = document.cookie.split(',');
      LogInCheck('patient');
      this.user = user;
      this.doc = GetDocDetails();
  }

    onOff(): void {
        document.cookie = 'null; path=/';
        console.log(document.cookie);
    }
}
