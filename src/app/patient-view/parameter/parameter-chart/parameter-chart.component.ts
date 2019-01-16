import {Component, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import NoDataToDisplay from 'highcharts/modules/no-data-to-display';
import HighchartsMore from 'highcharts/highcharts-more.src.js';
import {PushData} from '../../../global-files/function/PushData';
import {LogInCheck} from '../../../global-files/function/LogInCheck';

NoDataToDisplay(Highcharts);
HighchartsMore(Highcharts);

@Component({
    selector: 'app-parameter-chart',
    templateUrl: './parameter-chart.component.html',
    styleUrls: ['./parameter-chart.component.scss']
})
export class ParameterChartComponent implements OnInit {
    Highcharts = Highcharts;
    chartOptions = {
        chart: {
            type: 'arearange',
            zoomType: 'x'
        },
        loading: false,
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
                name: 'Herzrate (Pro M)',
                color: '#B2101D',
                zIndex: 3,
                fillOpacity: 0,
                lineWidth: 3.5
            }
        ],
        lang: {
            noData: 'Es wurden noch keine Daten hinzugefügt!'
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
        const sv = localStorage.getItem('sv');
        LogInCheck('patient');
        this.chartOptions.series[0].data = PushData(sv, 'bloodPressure');
        this.chartOptions.series[1].data = PushData(sv, 'heartbeat');
    }
}
