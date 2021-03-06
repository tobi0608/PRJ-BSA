import {Component, OnInit} from '@angular/core';
import {GetUserData} from '../../function/GetUserData';

@Component({
    selector: 'app-user-information',
    templateUrl: './user-information.component.html',
    styleUrls: ['./user-information.component.scss']
})
export class UserInformationComponent implements OnInit {
    /**
     * Objekt mit den Informationen des angemeldeten Users
     */
    user;

    constructor() {
    }

    ngOnInit() {
        const sv = localStorage.getItem('sv');
        this.user = GetUserData(sv);
    }
}
