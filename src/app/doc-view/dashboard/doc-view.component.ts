import {Component, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import NoDataToDisplay from 'highcharts/modules/no-data-to-display';
import {Router} from '@angular/router';
import {LogInCheck} from '../../global-files/function/LogInCheck';
import {MessageCounter} from '../../global-files/function/MessageCounter';
import {lastPatients} from './functions/lastPatients';
import {UserCounter} from './functions/UserCounter';

NoDataToDisplay(Highcharts);

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
        lang: {
            noData: 'Kein Patientenzuwachs in der letzten Woche'
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

    constructor(public router: Router) {
    }

    ngOnInit() {
        LogInCheck('doctor');
        this.name = localStorage.getItem('lastName');
        this.messageCounter = MessageCounter('Termin');
        this.alertCounter = MessageCounter('Alert');
        this.users = lastPatients();
        this.patientChartOptions.series[0].data = UserCounter();
    }

    onSelect(patient): void {
        this.router.navigate(['doctor/patients/record/:' + patient.sv]);
    }
}

