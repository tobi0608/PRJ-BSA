import {Component, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import NoDataToDisplay from 'highcharts/modules/no-data-to-display';
import HighchartsMore from 'highcharts/highcharts-more.src.js';
import {LogInCheck} from '../../global-files/function/LogInCheck';
import {MessageCounter} from '../../global-files/function/MessageCounter';
import {ThreeDaysList} from './functions/ThreeDaysList';
import {StatusCheck} from './functions/StatusCheck';

NoDataToDisplay(Highcharts);
HighchartsMore(Highcharts);

@Component({
    selector: 'app-patient-view',
    templateUrl: './patient-view.component.html',
    styleUrls: ['./patient-view.component.scss']
})

export class PatientViewComponent implements OnInit {
    name = ' ';
    status = ' ';
    messageCounter = ' ';
    updateFlag = true;
    Highcharts = Highcharts;
    chartOptions = {
        chart: {
            type: 'arearange'
        },
        title: {
            text: null
        },
        series: [{
            data: [],
            name: 'Blutdruck (mmHg)',
            color: '#0011ff',
            fillColor: '#41ACFF',
            lineWidth: 3,
            zIndex: 1,
            zones: [
                {
                    value: 69,
                    color: '#0011ff',
                    fillColor: '#FF0000'
                },
                {
                    value: 141,
                },
                {
                    value: 300,
                    color: '#0011ff',
                    fillColor: '#FF0000',
                }]
        },
            {
                type: 'area',
                data: [],
                name: 'Herzrate (Pro S)',
                color: '#B2101D',
                zIndex: 3,
                fillOpacity: 0,
                lineWidth: 5
            }
        ],
        lang: {
            noData: 'Keine Werte in den letzten 3 Tagen'
        },
        noData: {
            style: {
                fontWeight: 'bold',
                fontSize: '1.5rem',
                color: '#B2101D'
            }
        },
        tooltip: {
            xDateFormat: '%d.%m.%Y %H:%M',
            headerFormat: '<span style="font-weight: bold">{point.key}</span><br>',
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
            title: {
                text: null
            }
        }]
    };

    constructor() {
    }

    ngOnInit() {
        LogInCheck('patient');
        if (localStorage.length > 1) {
            this.name = localStorage.getItem('firstName');
            this.messageCounter = MessageCounter('Message');
            this.chartOptions.series[0].data = ThreeDaysList('bloodPressure');
            this.chartOptions.series[1].data = ThreeDaysList('heartbeat');
            this.status = StatusCheck();
        }
    }
}
