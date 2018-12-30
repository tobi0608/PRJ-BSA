import { Component, OnInit } from '@angular/core';
import {USERS} from '../../mock-files/mock-user';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      USERS.find(function (tmp) {
          if (tmp.sv.toString() === document.cookie){
              console.log('ok Access', document.cookie);
              return true;
          } else {
              console.log('no access', document.cookie);
              document.getElementById('loginSite').style.display = 'none';
              document.getElementById('noAccess').style.display = 'block';
          }
      });
  }
    onOff(): void {
        document.cookie = 'null; path=/';
        console.log(document.cookie);
    }
}
