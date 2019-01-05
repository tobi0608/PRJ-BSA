import { Component, OnInit } from '@angular/core';
import {USERS} from '../../../mock-files/mock-user';
let user = [];
let doc;

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
      let count = 0;
      USERS.find(function (tmp) {
          count++;
          if (tmp.sv.toString() === user[0] && tmp.type === 'patient') {
              return true;
          } else {
              if (count === USERS.length) {
                  document.getElementById('loginSite').style.display = 'none';
                  document.getElementById('noAccess').style.display = 'block';
                  return true;
              }
          }
      });
      this.user = user;
      USERS.find(function (tmp) {
          if (tmp.sv.toString() === user[4]) {
              doc = 'Dr.' + ' '  + tmp.last_name + ' ' + tmp.first_name;
              console.log(doc);
              return true;
          }
      });
      this.doc = doc;
  }

    onOff(): void {
        document.cookie = 'null; path=/';
        console.log(document.cookie);
    }
}
