import {Component, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import {Router} from '@angular/router';
import {LogInCheck} from '../../global-funtions/LogInCheck';
import {MessageCounter} from '../../global-funtions/MessageCounter';
import {lastPatients} from './functions/lastPatients';
import {UserCounter} from './functions/UserCounter';

let user = [];

console.log();

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
      LogInCheck('doctor');
      this.name = user[3];
      this.messageCounter = MessageCounter('Termin');
      this.alertCounter = MessageCounter('Alert');
      this.users = lastPatients();
      this.patientChartOptions.series[0].data = UserCounter();
  }
    onSelect(patient): void {
        this.router.navigate(['doctor/patients/record/:' + patient.sv]);
    }
    onOff(): void {
        document.cookie = 'null; path=/';
    }
}

