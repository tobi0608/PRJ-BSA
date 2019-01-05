import { Component, OnInit } from '@angular/core';
import {LogInCheck} from '../../../global-funtions/LogInCheck';

let user = [];

@Component({
  selector: 'app-doctor-information',
  templateUrl: './doctor-information.component.html',
  styleUrls: ['./doctor-information.component.scss']
})
export class DoctorInformationComponent implements OnInit {
    user;
  constructor() { }

  ngOnInit() {
      user = document.cookie.split(',');
      LogInCheck('doctor');
      this.user = user;
  }
    onOff(): void {
        document.cookie = 'null; path=/';
        console.log(document.cookie);
    }

}
