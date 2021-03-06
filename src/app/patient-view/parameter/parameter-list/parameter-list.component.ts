import {Component, OnInit} from '@angular/core';
import {LogInCheck} from '../../../global-files/function/LogInCheck';
import {PushData} from '../../../global-files/function/PushData';

@Component({
    selector: 'app-parameter-list',
    templateUrl: './parameter-list.component.html',
    styleUrls: ['./parameter-list.component.scss']
})
export class ParameterListComponent implements OnInit {
    /**
     * Objekt mit den Vitalwerten
     */
    dates;

    constructor() {
    }

    ngOnInit() {
        const sv = localStorage.getItem('sv');
        LogInCheck('patient');
        this.dates = PushData(sv, 'all');
    }

    /**
     * Refresht das Component nach dem hinzufügen von Werten
     */
    onSend(): void {
        this.ngOnInit();
    }
}
