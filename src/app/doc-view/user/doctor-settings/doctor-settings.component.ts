import {Component, OnInit, ViewChild} from '@angular/core';
import {USERS} from '../../../mock-files/mock-user';
let user = [];
@Component({
  selector: 'app-doctor-settings',
  templateUrl: './doctor-settings.component.html',
  styleUrls: ['./doctor-settings.component.scss']
})
export class DoctorSettingsComponent implements OnInit {
    @ViewChild('oldPW') oldPW;
    @ViewChild('newPW') newPW;
    @ViewChild('repeatPW') repeatPW;
    user;
  constructor() { }

  ngOnInit() {
      user = document.cookie.split(',');
      let count = 0;
      USERS.find(function (tmp) {
          count++;
          if (tmp.sv.toString() === user[0] && tmp.type === 'doctor') {
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
  }
    newPassword(): void {
        user = document.cookie.split(',');
        const newPW =  this.newPW.nativeElement.value;
        const oldPW = this.oldPW.nativeElement.value;
        const repeatPW = this.repeatPW.nativeElement.value;
        USERS.find(function (tmp) {
            if (tmp.sv.toString() === user[0]) {
                if (tmp.password === oldPW) {
                    if (newPW === repeatPW && newPW !== '' && repeatPW !== '') {
                        tmp.password = newPW;
                        return true;
                    }
                }
            }
        });
    }
    onOff(): void {
        document.cookie = 'null; path=/';
        console.log(document.cookie);
    }
}
