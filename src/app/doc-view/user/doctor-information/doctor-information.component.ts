import {Component, OnInit} from '@angular/core';
import {LogInCheck} from '../../../global-files/function/LogInCheck';
import {GetOpenHours} from '../../../global-files/function/GetOpenHours';

@Component({
    selector: 'app-doctor-information',
    templateUrl: './doctor-information.component.html',
    styleUrls: ['./doctor-information.component.scss']
})
export class DoctorInformationComponent implements OnInit {
    openhours;

    constructor() {
    }

    ngOnInit() {
        LogInCheck('doctor');
        this.openhours = GetOpenHours('doctor');
    }
}
