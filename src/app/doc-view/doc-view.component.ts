import {Component, OnInit} from '@angular/core';
import { USERS } from '../mock-files/mock-user';
import * as Highcharts from 'highcharts';
import {NEWUSERSCOUNT} from '../mock-files/mock-counter';

let user = [];
let newUsers = [];
const newUsersCount = [];
NEWUSERSCOUNT.forEach(function (value) {
            newUsersCount.push([value.date, value.users]);
});


@Component({
  selector: 'app-doc-view',
  templateUrl: './doc-view.component.html',
  styleUrls: ['./doc-view.component.scss']
})

export class DocViewComponent implements OnInit {
  name;
  users;

    patientChart = Highcharts;
    patientChartOptions = {
        chart: {
            type: 'column'
        },
        title: {
            text: null
        },
        series: [{
            data: newUsersCount,
            name: 'Users',
            color: '#B2101D'
        }],
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: {
                day: '%e. %b'
            }
        },
        yAxis: [{
            title: {
                text: 'Anzahl der Patienten'
            }
        }]
    };

  constructor() {}

  ngOnInit() {
      user = document.cookie.split(',');
      this.name = user[3];
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
      newUsers = [];
      USERS.forEach(function (value) {
          if (value.doctor_sv.toString() === user[0]) {
              newUsers.push(value);
          }
      });
      this.users = newUsers;
  }
    onOff(): void {
        document.cookie = 'null; path=/';
        console.log(document.cookie);
    }
}

