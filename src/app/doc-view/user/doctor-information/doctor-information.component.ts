import { Component, OnInit } from '@angular/core';
import {LogInCheck} from '../../../global-files/function/LogInCheck';

@Component({
  selector: 'app-doctor-information',
  templateUrl: './doctor-information.component.html',
  styleUrls: ['./doctor-information.component.scss']
})
export class DoctorInformationComponent implements OnInit {
  constructor() { }

  ngOnInit() {
      LogInCheck('doctor');
  }
}
