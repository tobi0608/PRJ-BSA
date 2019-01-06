import { Component, OnInit } from '@angular/core';
import {LogInCheck} from '../../../global-files/function/LogInCheck';
import {GetDocDetails} from './functions/GetDocDetails';
import {FilterMedication} from '../../../global-files/function/FilterMedication';
import {Router} from '@angular/router';
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
  constructor(public router: Router) { }

  ngOnInit() {
      user = document.cookie.split(',');
      LogInCheck('patient');
      this.user = user;
      this.doc = GetDocDetails();
      this.currentMeds = FilterMedication(user[0], 'fresh');
      this.usedMeds = FilterMedication(user[0], 'expired');
  }
    onRoute(route): void {
        this.router.navigate([route]);
    }
    onOff(): void {
        document.cookie = 'null; path=/';
        console.log(document.cookie);
    }
}
