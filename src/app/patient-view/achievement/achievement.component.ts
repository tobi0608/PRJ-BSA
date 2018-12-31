import { Component, OnInit } from '@angular/core';
import {USERS} from '../../mock-files/mock-user';

let user = document.cookie.split(',');

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.scss']
})
export class AchievementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      user = document.cookie.split(',');
      console.log(user);

      USERS.find(function (tmp) {
          if (tmp.sv.toString() === user[0] && tmp.type === 'patient') {
              return true;
          } else {
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
