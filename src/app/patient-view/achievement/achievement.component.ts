import { Component, OnInit } from '@angular/core';
import {USERS} from '../../mock-files/mock-user';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.scss']
})
export class AchievementComponent implements OnInit {

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
