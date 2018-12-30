import {Component, OnInit, ViewChild} from '@angular/core';
import * as Highcharts from 'highcharts';
import {DATES} from '../../mock-files/mock-vital-parameter';
import {VitalParameter} from '../../mock-files/vital-parameter';
import {USERS} from '../../mock-files/mock-user';

const systoleValues = [];
const diastoleValues = [];
const heartRateValues = [];
DATES.forEach(function (value) {
    systoleValues.push([value.timestamp * 1000 , value.systole]);
    diastoleValues.push([value.timestamp * 1000 , value.diastole]);
    heartRateValues.push([value.timestamp * 1000 , value.heartbeat]);
});

@Component({
  selector: 'app-parameter-chart',
  templateUrl: './parameter-chart.component.html',
  styleUrls: ['./parameter-chart.component.scss']
})
export class ParameterChartComponent implements OnInit {
    @ViewChild('systole') systole;
    @ViewChild('diastole') diastole;
    @ViewChild('heartRate') heartRate;

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
    }

    onSend(): void {
        const timestamp = Date.now();
        const sv = 3198060896;
        const systole = this.systole.nativeElement.value;
        const diastole = this.diastole.nativeElement.value;
        const heartRate = this.heartRate.nativeElement.value;
        const tmp: VitalParameter = {
            sv: sv,
            systole: systole,
            diastole: diastole,
            heartbeat: heartRate,
            timestamp: timestamp
        };
        DATES.unshift(tmp);
    }

    onOff(): void {
        document.cookie = 'null; path=/';
        console.log(document.cookie);
    }
}
