import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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
import {calcAge} from './functions/calcAge';
import {USERS} from '../../../mock-files/mock-user';
import {User} from '../../../mock-files/user';

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
    age;
    @ViewChild('changeMedForm') changeMedForm;

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

    constructor(private route: ActivatedRoute, public router: Router) {
    }

    ngOnInit() {
        LogInCheck('doctor');
        const sv = this.route.snapshot.paramMap.get('sv').replace(':', '');
        SectionSelection(sv);
        this.chartOptions.series[0].data = PushData(sv, 'bloodPressure');
        this.chartOptions.series[1].data = PushData(sv, 'heartbeat');
        this.selectedPatient = ShowPatient(sv);
        this.currentMeds = FilterMedication(sv, 'fresh');
        if (this.currentMeds.length === 0) {
            document.getElementById('currentMed').style.display = 'block';
        } else {
            document.getElementById('currentMed').style.display = 'none';
        }
        this.usedMeds = FilterMedication(sv, 'expired');
        if (this.usedMeds.length === 0) {
            document.getElementById('usedMed').style.display = 'block';
        } else {
            document.getElementById('usedMed').style.display = 'none';
        }
        this.age = parseInt(calcAge(sv), 10);
    }

    onHere(pat): void {
        pat.last_visit = Date.now();
    }

    onSend(array): void {
        const svnr = parseInt(this.route.snapshot.paramMap.get('sv').replace(':', ''), 10);
        const tmp: Medication = {
            sv: svnr,
            medication: array.medikament,
            intervall: array.intervall,
            timestampFrom: Date.now(),
            timestampTo: 1,
            fresh: true
        };
        MEDICATION.unshift(tmp);
        const msg: Message = {
            svFrom: parseInt(localStorage.getItem('sv'), 10),
            svTo: svnr,
            first_name: localStorage.getItem('lastName'),
            last_name: localStorage.getItem('firstName'),
            type: 'Med',
            text: 'Ihre Medikation wurde umgestellt!',
            timestamp: Date.now(),
            seen: 'bell',
            check: ' ',
            times: ' ',
            info: ' '
        };
        MESSAGES.unshift(msg);
        this.ngOnInit();
        alert('Medikament hinzugefügt!');
    }

    onDelete(meds): void {
        if (confirm('Bei Bestätigung wird das Medikament entfernt')) {
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
                times: ' ',
                info: ' '
            };
            MESSAGES.unshift(alert);
            this.ngOnInit();
        }
    }

    onEdit(meds): void {
        document.getElementById(meds.timestampFrom).style.display = 'none';
        document.getElementById(meds.timestampFrom + '-form').style.display = 'block';
    }

    onSave(meds): void {
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
            times: ' ',
            info: ' '
        };
        MESSAGES.unshift(alert);
        if (this.changeMedForm.form.valid) {
            document.getElementById(meds.timestampFrom).style.display = 'block';
            document.getElementById(meds.timestampFrom + '-form').style.display = 'none';
        }
        this.ngOnInit();
    }

    onSavePatient(array): void {
        const tmp: User = {
            sv: parseInt(array.sv, 10),
            password: 'root',
            type: 'patient',
            first_name: array.firstName,
            last_name: array.lastName,
            gender: array.gender,
            email: array.email,
            registered: Date.now(),
            last_visit: Date.now(),
            assignedDoc: parseInt(localStorage.getItem('sv'), 10)
        };
        USERS.unshift(tmp);
        this.router.navigate(['doctor/patients/list']);
    }
}

