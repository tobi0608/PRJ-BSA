import {Component, OnInit} from '@angular/core';
import { USERS } from '../../mock-files/mock-user';
import * as Highcharts from 'highcharts';
import {NEWUSERSCOUNT} from '../../mock-files/mock-counter';
import {MESSAGES} from '../../mock-files/mock-messages';
import {Router} from '@angular/router';

let user = [];

@Component({
  selector: 'app-doc-view',
  templateUrl: './doc-view.component.html',
  styleUrls: ['./doc-view.component.scss']
})

export class DocViewComponent implements OnInit {
  name;
  users;
  messageCounter;
  alertCounter;

    patientChart = Highcharts;
    patientChartOptions = {
        chart: {
            type: 'column'
        },
        title: {
            text: null
        },
        series: [{
            data: [],
            name: 'Users',
            color: '#B2101D'
        }],
        legend: {
            enabled: false
        },
        tooltip: {
            headerFormat: ''
        },
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

  constructor(public router: Router) {}

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

      let countMessage = 0;
      let messageTxt;
      MESSAGES.forEach(function (value) {
          if (value.svTo.toString() === user[0] && value.type === 'Termin' && value.seen === 'bell') {
              countMessage++;
          }
          if (countMessage === 1 ) {
              messageTxt = countMessage.toString() + ' neue Terminanfrage';
          } else if (countMessage > 1 ) {
              messageTxt = countMessage.toString() + ' neue Terminanfragen';
          } else {
              messageTxt = 'keine neue  Terminanfrage';
          }
      });
      this.messageCounter = messageTxt;

      let countAlert = 0;
      let alertTxt;
      MESSAGES.forEach(function (value) {
          if (value.svTo.toString() === user[0] && value.type === 'Bluthochdruck' && value.seen === 'bell') {
              countAlert++;
          }
          if (countAlert === 1 ) {
              alertTxt = countMessage.toString() + ' neuen Alert';
          } else if (countAlert > 1 ) {
              alertTxt = countMessage.toString() + ' neue Alerts';
          } else {
              alertTxt = 'keinen neuen Alert';
          }
      });
      this.alertCounter = alertTxt;

      const newUsers = [];
      USERS.forEach(function (value) {
          if (value.doctor_sv.toString() === user[0]) {
              newUsers.push(value);
          }
      });
      this.users = newUsers;

      const newUsersCount = [];
      NEWUSERSCOUNT.forEach(function (value) {
          newUsersCount.push([value.date, value.users]);
      });
      this.patientChartOptions.series[0].data = newUsersCount;
  }
    onSelect(patient): void {
        this.router.navigate(['doctor/patients/record/:' + patient.sv]);
    }

    onOff(): void {
        document.cookie = 'null; path=/';
        console.log(document.cookie);
    }
}

