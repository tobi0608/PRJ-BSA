import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PATIENTS} from '../../../mock-files/mock-patients';
import {Patient} from '../../../mock-files/patients';
import {MEDICATION} from '../../../mock-files/mock-medication';
import * as Highcharts from 'highcharts';
import NoDataToDisplay from 'highcharts/modules/no-data-to-display';
import HighchartsMore from 'highcharts/highcharts-more.src.js';
import {Medication} from '../../../mock-files/medication';
import {Message} from '../../../mock-files/messages';
import {MESSAGES} from '../../../mock-files/mock-messages';
import {LogInCheck} from '../../../global-files/function/LogInCheck';
import {SectionSelection} from './functions/SectionSelection';
import {PushData} from '../../../global-files/function/PushData';
import {ShowPatient} from './functions/ShowPatient';
import {FilterMedication} from '../../../global-files/function/FilterMedication';
NoDataToDisplay(Highcharts);
HighchartsMore(Highcharts);

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
            type: 'arearange',
            zoomType: 'x'
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
    constructor(private route: ActivatedRoute, public router: Router) { }

    ngOnInit() {
        LogInCheck('doctor');
        const sv = this.route.snapshot.paramMap.get('sv').replace(':', '');
        SectionSelection(sv);
        this.chartOptions.series[0].data = PushData(sv, 'bloodPressure');
        this.chartOptions.series[1].data = PushData(sv, 'heartbeat');
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
        const alert: Message = {
            svFrom: parseInt(localStorage.getItem('sv'), 10),
            svTo: svnr,
            first_name: localStorage.getItem('lastName'),
            last_name: localStorage.getItem('firstName'),
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
        const alert: Message = {
            svFrom: parseInt(localStorage.getItem('sv'), 10),
            svTo: meds.sv,
            first_name: localStorage.getItem('lastName'),
            last_name: localStorage.getItem('firstName'),
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
        const alert: Message = {
            svFrom: parseInt(localStorage.getItem('sv'), 10),
            svTo: meds.sv,
            first_name: localStorage.getItem('lastName'),
            last_name: localStorage.getItem('firstName'),
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
         const svnr =  this.svnr.nativeElement.value;
         const firstName = this.first_name.nativeElement.value;
         const lastName = this.last_name.nativeElement.value;
         const age = this.age.nativeElement.value;
         const tmp: Patient = {
            sv: parseInt(svnr, 10),
            first_name: firstName,
            last_name: lastName,
            gender: this.gender.nativeElement.value,
            age: parseInt(age, 10),
            registered: Date.now(),
            last_visit: Date.now(),
            assignedDoc: parseInt(localStorage.getItem('sv'), 10)
        };
        if (svnr !== '' && firstName !== '' && lastName !== '' && age !== '') {
            PATIENTS.unshift(tmp);
            this.router.navigate(['doctor/patients/list']);
        }
    }
}

