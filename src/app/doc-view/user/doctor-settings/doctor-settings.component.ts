import {Component, OnInit} from '@angular/core';
import {LogInCheck} from '../../../global-files/function/LogInCheck';
import {GetOpenHours} from '../../../global-files/function/GetOpenHours';
import {OPENHOURS} from '../../../mock-files/mock-openhours';

@Component({
  selector: 'app-doctor-settings',
  templateUrl: './doctor-settings.component.html',
  styleUrls: ['./doctor-settings.component.scss']
})
export class DoctorSettingsComponent implements OnInit {
    address;
    mon;
    tues;
    wed;
    thues;
    fri;
    sat;
    sun;
  constructor() { }

  ngOnInit() {
      LogInCheck('doctor');
      const information = GetOpenHours('doctor');
      this.address = information.address;
      this.mon = information.mon;
      this.tues = information.tues;
      this.wed = information.wed;
      this.thues = information.thues;
      this.fri = information.fri;
      this.sat = information.sat;
      this.sun = information.sun;
  }

    saveInformation(filter, array): void {
        const openhours = OPENHOURS.find(function (tmp) {
            return tmp.sv.toString() === localStorage.getItem('sv');
        });
        switch (filter) {
            case 'address':
                openhours.address = array.address;
                alert('Ihre Ordinations Adresse wurden geändert!');
                break;
            case 'openhours':
                openhours.mon = array.mon;
                openhours.tues = array.tues;
                openhours.wed = array.wed;
                openhours.thues = array.thues;
                openhours.fri = array.fri;
                openhours.sat = array.sat;
                openhours.sun = array.sun;
                alert('Ihre Ordinations Zeiten wurden geändert!');
                break;
        }
    }
}
