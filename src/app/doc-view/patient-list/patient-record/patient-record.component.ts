import {Component, OnInit, ViewChild} from '@angular/core';
import {USERS} from '../../../mock-files/mock-user';
import {ActivatedRoute, Router} from '@angular/router';
import {PATIENTS} from '../../../mock-files/mock-patients';
import {Patient} from '../../../mock-files/patients';
import {MEDICATION} from '../../../mock-files/mock-medication';
import * as Highcharts from 'highcharts';
import {DATES} from '../../../mock-files/mock-vital-parameter';
import {Medication} from '../../../mock-files/medication';

let user = [];
let patient = [];
let currentMedication = [];
let usedMedication = [];
let systoleValues = [];
let diastoleValues = [];
let heartRateValues = [];


@Component({
    selector: 'app-patient-record',
    templateUrl: './patient-record.component.html',
    styleUrls: ['./patient-record.component.scss']
})
export class PatientRecordComponent implements OnInit {
    selectedPatient: Patient;
    currentMeds;
    usedMeds;
    @ViewChild('first_name') first_name;
    @ViewChild('last_name') last_name;
    @ViewChild('svnr') svnr;
    @ViewChild('age') age;
    @ViewChild('gender') gender;

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
        user = document.cookie.split(',');
        let count = 0;
        USERS.find(function (tmp) {
            count++;
            if (tmp.sv.toString() === user[0] && tmp.type === 'doctor') {
                return true;
            } else {
                if (count === USERS.length) {
                    document.getElementById('loginSite').style.display = 'none';
                    document.getElementById('noAccess').style.display = 'block';
                    return true;
                }
            }
        });

        const sv = this.route.snapshot.paramMap.get('sv').replace(':', '');
        if (sv === 'new') {
            document.getElementById('newPatient').style.display = 'block';
            document.getElementById('noSelectedPatient').style.display = 'none';
            document.getElementById('selectedPatient').style.display = 'none';
        } else if (sv === 'sv') {
            document.getElementById('newPatient').style.display = 'none';
            document.getElementById('noSelectedPatient').style.display = 'block';
            document.getElementById('selectedPatient').style.display = 'none';
        } else {
            document.getElementById('newPatient').style.display = 'none';
            document.getElementById('noSelectedPatient').style.display = 'none';
            document.getElementById('selectedPatient').style.display = 'block';
        }

        systoleValues = [];
        diastoleValues = [];
        heartRateValues = [];
        DATES.forEach(function (value) {
            if (value.sv.toString() === sv) {
                systoleValues.unshift([value.timestamp + 3600000, value.systole]);
                diastoleValues.unshift([value.timestamp + 3600000, value.diastole]);
                heartRateValues.unshift([value.timestamp + 3600000, value.heartbeat]);
            }
        });
        this.chartOptions.series[0].data = systoleValues;
        this.chartOptions.series[1].data = diastoleValues;
        this.chartOptions.series[2].data = heartRateValues;

        count = 0;
        patient = [];
        PATIENTS.forEach(function (value) {
            count++;
            if (value.sv.toString() === sv) {
                patient = [];
                patient.push(value);
            } else {
                if (count === PATIENTS.length && patient.length < 1) {
                    const tmp: Patient = {
                        sv: null,
                        first_name: null,
                        last_name: null,
                        gender: null,
                        age: null,
                        registered: null,
                        last_visit: null,
                        assignedDoc: null
                    };
                    patient.push(tmp);
                }
            }
        });
        this.selectedPatient = patient[0];

        currentMedication = [];
        usedMedication = [];
        count = 0;
        MEDICATION.forEach(function (value) {
            count++;
            if (value.sv.toString() === sv && value.fresh === true) {
                currentMedication.push(value);
            } else if (value.sv.toString() === sv && value.fresh === false) {
                usedMedication.push(value);
            } else {
                if (count === MEDICATION.length && usedMedication.length < 1) {
                    document.getElementById('usedMed').innerHTML = 'Noch keine probierten Medikammente';
                }
                if (count === MEDICATION.length && currentMedication.length < 1) {
                    document.getElementById('currentMed').innerHTML = 'Keine verschriebene Medikation';
                }
            }
        });
        this.currentMeds = currentMedication;
        this.usedMeds = usedMedication;
    }

    onHere(pat): void {
        pat.last_visit = Date.now();
    }
    onSend(): void {
        const med = this.med.nativeElement.value;
        const intervall = this.intervall.nativeElement.value;
        const tmp: Medication = {
            sv: this.route.snapshot.paramMap.get('sv').replace(':', ''),
            medication: med,
            intervall: intervall,
            timestampFrom: Date.now(),
            timestampTo: 1,
            fresh: true
        };

        if (med && intervall !== null) {
            MEDICATION.unshift(tmp);
        }
        this.ngOnInit();
    }
    onDelete(meds): void {
        meds.fresh = false;
        meds.timestampTo = Date.now();
        this.ngOnInit();
    }
    onEdit(meds): void {
        document.getElementById(meds.medication).style.display = 'none';
        document.getElementById(meds.medication + '-form').style.display = 'block';
    }
    onSave(meds): void {
        document.getElementById(meds.medication).style.display = 'block';
        document.getElementById(meds.medication + '-form').style.display = 'none';
    }
    onSavePatient(): void {
        user = document.cookie.split(',');
        const tmp: Patient = {
            sv: this.svnr.nativeElement.value,
            first_name: this.first_name.nativeElement.value,
            last_name: this.last_name.nativeElement.value,
            gender: this.gender.nativeElement.value,
            age: this.age.nativeElement.value,
            registered: Date.now(),
            last_visit: Date.now(),
            assignedDoc: user[0]
        };
        if (true) {
            PATIENTS.unshift(tmp);
            this.router.navigate(['doctor/patients/record/:' + tmp.sv]);
        }
        this.ngOnInit();
    }
    onOff(): void {
        document.cookie = 'null; path=/';
        console.log(document.cookie);
    }
}

