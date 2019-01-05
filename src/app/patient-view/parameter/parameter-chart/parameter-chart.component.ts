import {Component, OnInit, ViewChild} from '@angular/core';
import * as Highcharts from 'highcharts';
import {DATES} from '../../../mock-files/mock-vital-parameter';
import {VitalParameter} from '../../../mock-files/vital-parameter';
import {USERS} from '../../../mock-files/mock-user';

let user = [];
let systoleValues = [];
let diastoleValues = [];
let heartRateValues = [];

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
            type: 'area',
            zoomType: 'x'
        },
        title: {
            text: null
        },
        series: [{
            data: [],
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
                data: [],
                name: 'Diastole (mmHg)',
                color: '#0406FF',
                zIndex: 2,
                fillOpacity: 1,
                fillColor: '#FFFFFF',
            },
            {
                data: [],
                name: 'Herzrate (Pro S)',
                color: '#FF0015',
                zIndex: 3,
                fillOpacity: 0,
            },
        ],
        legend: {
            enabled: false
        },
        tooltip: {
            headerFormat: '',
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
            min: 40,
            title: {
                text: null
            }
        }]
    };

    constructor() { }

    ngOnInit() {
        user = document.cookie.split(',');

        USERS.find(function (tmp) {
            if (tmp.sv.toString() === user[0] && tmp.type === 'patient') {
                return true;
            } else {
                document.getElementById('loginSite').style.display = 'none';
                document.getElementById('noAccess').style.display = 'block';
            }
        });

        systoleValues = [];
        diastoleValues = [];
        heartRateValues = [];
        DATES.forEach(function (value) {
            if (value.sv.toString() === user[0]) {
                    systoleValues.unshift([value.timestamp + 3600000, value.systole]);
                    diastoleValues.unshift([value.timestamp + 3600000, value.diastole]);
                    heartRateValues.unshift([value.timestamp + 3600000, value.heartbeat]);
            }
        });
        this.chartOptions.series[0].data = systoleValues;
        this.chartOptions.series[1].data = diastoleValues;
        this.chartOptions.series[2].data = heartRateValues;
    }

    onSend(): void {
        user = document.cookie.split(',');
        const timestamp = Date.now();
        const sv = parseInt(user[0], 10);
        const systole = parseInt(this.systole.nativeElement.value, 10);
        const diastole = parseInt(this.diastole.nativeElement.value, 10);
        const heartRate = parseInt(this.heartRate.nativeElement.value, 10);
        let iTen = ' ';
        if (systole > 140) {
            iTen = 'heart';
        }
        const tmp: VitalParameter = {
            sv: sv,
            systole: systole,
            diastole: diastole,
            heartbeat: heartRate,
            timestamp: timestamp,
            i10: iTen
        };
        if (systole && diastole && heartRate !== null) {
            DATES.unshift(tmp);
            alert('Ihre Werte wurden gespeichert');
            this.ngOnInit();
        }
    }

    onOff(): void {
        document.cookie = 'null; path=/';
        console.log(document.cookie);
    }
}
