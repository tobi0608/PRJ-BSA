import {Component, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import NoDataToDisplay from 'highcharts/modules/no-data-to-display';
import {PushData} from '../../../global-files/function/PushData';
import {LogInCheck} from '../../../global-files/function/LogInCheck';
NoDataToDisplay(Highcharts);

@Component({
  selector: 'app-parameter-chart',
  templateUrl: './parameter-chart.component.html',
  styleUrls: ['./parameter-chart.component.scss']
})
export class ParameterChartComponent implements OnInit {
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
        lang: {
            noData: 'Bis jetzt noch keine Werte eingetragen!'
        },
        noData: {
            style: {
                fontWeight: 'bold',
                fontSize: '1.5rem',
                color: '#B2101D'
            }
        },
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

    constructor() {
    }

    ngOnInit() {
        const sv = localStorage.getItem('sv');
        LogInCheck('patient');
        this.chartOptions.series[0].data = PushData(sv, 'systole');
        this.chartOptions.series[1].data = PushData(sv, 'diastole');
        this.chartOptions.series[2].data = PushData(sv, 'heartbeat');
    }
}
