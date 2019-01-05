import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PATIENTS} from '../../../mock-files/mock-patients';
import {Patient} from '../../../mock-files/patients';
import {MEDICATION} from '../../../mock-files/mock-medication';
import * as Highcharts from 'highcharts';
import {Medication} from '../../../mock-files/medication';
import {Message} from '../../../mock-files/messages';
import {MESSAGES} from '../../../mock-files/mock-messages';
import {LogInCheck} from '../../../global-funtions/LogInCheck';
import {SectionSelection} from './functions/SectionSelection';
import {PushData} from '../../../global-funtions/PushData';
import {ShowPatient} from './functions/ShowPatient';
import {FilterMedication} from './functions/FilterMedication';

let user = [];

@Component({
    selector: 'app-patient-record',
    templateUrl: './patient-record.component.html',
    styleUrls: ['./patient-record.component.scss']
})
export class PatientRecordComponent implements OnInit {
    selectedPatient;
    currentMeds;
    usedMeds;
    @ViewChild('first_name') first_name;
    @ViewChild('last_name') last_name;
    @ViewChild('svnr') svnr;
    @ViewChild('age') age;
    @ViewChild('gender') gender;
    @ViewChild('med') med;
    @ViewChild('intervall') intervall;

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
    constructor(private route: ActivatedRoute, public router: Router) { }

    ngOnInit() {
        LogInCheck('doctor');
        const sv = this.route.snapshot.paramMap.get('sv').replace(':', '');
        SectionSelection(sv);
        this.chartOptions.series[0].data = PushData(sv, 'systole');
        this.chartOptions.series[1].data = PushData(sv, 'diastole');
        this.chartOptions.series[2].data = PushData(sv, 'heartbeat');
        this.selectedPatient = ShowPatient(sv);
        this.currentMeds = FilterMedication(sv, 'fresh');
        this.usedMeds = FilterMedication(sv, 'expired');
    }

    onHere(pat): void {
        pat.last_visit = Date.now();
    }
    onSend(): void {
        const med = this.med.nativeElement.value;
        const intervall = this.intervall.nativeElement.value;
        const svnr = parseInt(this.route.snapshot.paramMap.get('sv').replace(':', ''), 10);
        const tmp: Medication = {
            sv: svnr,
            medication: med,
            intervall: intervall,
            timestampFrom: Date.now(),
            timestampTo: 1,
            fresh: true
        };

        if (med && intervall !== null) {
            MEDICATION.unshift(tmp);
        }
        user = document.cookie.split(',');
        const alert: Message = {
            svFrom: parseInt(user[0], 10),
            svTo: svnr,
            first_name: user[2],
            last_name: user[3],
            type: 'Med',
            text: 'Ihre Medikation wurde umgestellt!',
            timestamp: Date.now(),
            seen: 'bell',
            check: ' ',
            times: ' '
        };
        MESSAGES.unshift(alert);
        this.ngOnInit();
    }
    onDelete(meds): void {
        meds.fresh = false;
        meds.timestampTo = Date.now();
        user = document.cookie.split(',');
        const alert: Message = {
            svFrom: parseInt(user[0], 10),
            svTo: meds.sv,
            first_name: user[2],
            last_name: user[3],
            type: 'Med',
            text: 'Ihre Medikation wurde umgestellt!',
            timestamp: Date.now(),
            seen: 'bell',
            check: ' ',
            times: ' '
        };
        MESSAGES.unshift(alert);
        this.ngOnInit();
    }
    onEdit(meds): void {
        document.getElementById(meds.medication).style.display = 'none';
        document.getElementById(meds.medication + '-form').style.display = 'block';
    }
    onSave(meds): void {
        document.getElementById(meds.medication).style.display = 'block';
        document.getElementById(meds.medication + '-form').style.display = 'none';
        user = document.cookie.split(',');
        const alert: Message = {
            svFrom: parseInt(user[0], 10),
            svTo: meds.sv,
            first_name: user[2],
            last_name: user[3],
            type: 'Med',
            text: 'Ihre Medikation wurde umgestellt!',
            timestamp: Date.now(),
            seen: 'bell',
            check: ' ',
            times: ' '
        };
        MESSAGES.unshift(alert);
    }
    onSavePatient(): void {
        user = document.cookie.split(',');
         const svnr =  this.svnr.nativeElement.value;
         const firstName = this.first_name.nativeElement.value;
         const lastName = this.last_name.nativeElement.value;
         const gender = this.gender.nativeElement.value;
         const age = this.age.nativeElement.value;
         const tmp: Patient = {
            sv: parseInt(svnr, 10),
            first_name: firstName,
            last_name: lastName,
            gender: gender,
            age: parseInt(age, 10),
            registered: Date.now(),
            last_visit: Date.now(),
            assignedDoc: user[0]
        };
        if (svnr !== '' && firstName !== '' && lastName !== '' && age !== '') {
            PATIENTS.unshift(tmp);
            this.router.navigate(['doctor/patients/']);
        }
    }
    onOff(): void {
        document.cookie = 'null; path=/';
        console.log(document.cookie);
    }
}

