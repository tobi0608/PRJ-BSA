import {Component, OnInit, ViewChild} from '@angular/core';
import { USERS } from '../mock-files/mock-user';
import { MESSAGES } from '../mock-files/mock-messages';
import { DATES } from '../mock-files/mock-vital-parameter';
import { VitalParameter } from '../mock-files/vital-parameter';
import * as Highcharts from 'highcharts';

const systoleValues = [];
const diastoleValues = [];
const heartRateValues = [];


DATES.find(function (value) {
    if (value.timestamp < Date.now() - 345600001) { // letzten 3 Tage
        if (systoleValues.length === 0) {
            console.log('no values the last 3 days');
            document.getElementById('noValues').style.display = 'block';
        }
        return true;
    } else {
        systoleValues.unshift([value.timestamp + 3600000, value.systole]);
        diastoleValues.unshift([value.timestamp + 3600000, value.diastole]);
        heartRateValues.unshift([value.timestamp + 3600000, value.heartbeat]);
    }});

@Component({
  selector: 'app-patient-view',
  templateUrl: './patient-view.component.html',
  styleUrls: ['./patient-view.component.scss']
})

export class PatientViewComponent implements OnInit {
  name = USERS[0].name;
  number_new_alerts = MESSAGES.length - USERS[0].last_seen_alerts;
  @ViewChild('systole') systole;
  @ViewChild('diastole') diastole;
  @ViewChild('heartRate') heartRate;

  messages = MESSAGES;

  Highcharts = Highcharts;
  chartOptions = {
        chart: {
            type: 'area'
        },
        title: {
            text: null
        },
        series: [{
                data: systoleValues,
                name: 'Systole (mmHg)',
                color: '#0406FF',
                fillColor: '#41ACFF',
                zIndex: 1,
            zones: [
                {
                    value: 69,
                    color: '#FF0000',
                    fillColor: '#FF0000'
                },
                {
                    value: 141,
                },
                {
                    value: 300,
                    color: '#FF0000',
                    fillColor: '#FF0000',
                }]
            },
            {
                data: diastoleValues,
                name: 'Diastole (mmHg)',
                color: '#0406FF',
                zIndex: 2,
                fillOpacity: 1,
                fillColor: '#FFFFFF',
            },
            {
                data: heartRateValues,
                name: 'Herzrate (Pro S)',
                color: '#FF0015',
                zIndex: 3,
                fillOpacity: 0
            }
        ],
        tooltip: {
            shared: true,
            crosshairs: true
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: {
                hour: '%H:%M',
                day: '%e. %b',
                week: '%e. %b',
                month: '%b \'%y',
                year: '%Y'
            }
        },
        yAxis: [{
           max: 250,
           min: 60,
            title: {
                text: null
            }
        }]
    };

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

        if (DATES[0].systole < 140 && DATES[1].systole < 140 && DATES[2].systole < 140) {
            console.log('case 1', DATES[0].systole, DATES[1].systole, DATES[2].systole);
        } else if (DATES[0].systole < 140 && DATES[1].systole < 140) {
          console.log('case 2', DATES[0].systole, DATES[1].systole, DATES[2].systole);
      } else if (DATES[1].systole < 140 && DATES[2].systole < 140) {
          console.log('case 2', DATES[0].systole, DATES[1].systole, DATES[2].systole);
      } else if (DATES[0].systole < 140 && DATES[2].systole < 140) {
          console.log('case 2', DATES[0].systole, DATES[1].systole, DATES[2].systole);
      } else {
            console.log('case 3', DATES[0].systole, DATES[1].systole, DATES[2].systole);
        }
  }

    onSend(): void {
        const timestamp = Date.now();
        const sv = parseInt(document.cookie, 10);
        const systole = parseInt(this.systole.nativeElement.value, 10);
        const diastole = parseInt(this.diastole.nativeElement.value, 10);
        const heartRate = parseInt(this.heartRate.nativeElement.value, 10);
        const tmp: VitalParameter = {
        sv: sv,
        systole: systole,
        diastole: diastole,
        heartbeat: heartRate,
        timestamp: timestamp
      };
        if (systole && diastole && heartRate !== null) {
            DATES.unshift(tmp);
        }
  }

  onOff(): void {
        document.cookie = 'null; path=/';
        console.log(document.cookie);
    }
}