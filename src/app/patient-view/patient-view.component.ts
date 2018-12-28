import {Component, OnInit, ViewChild} from '@angular/core';
import { USERS } from '../mock-files/mock-user';
import { MESSAGES } from '../mock-files/mock-messages';
import { DATES } from '../mock-files/mock-vital-parameter';
import { VitalParameter } from '../mock-files/vital-parameter';


@Component({
  selector: 'app-patient-view',
  templateUrl: './patient-view.component.html',
  styleUrls: ['./patient-view.component.scss']
})
export class PatientViewComponent implements OnInit {
  name = USERS[0].name;
  number_new_alerts = MESSAGES.length - USERS[0].last_seen_alerts;
  @ViewChild('systole') systole;
  @ViewChild('diastole') diastole;
  @ViewChild('heartRate') heartRate;

  messages = MESSAGES;

  constructor() { }

  ngOnInit() {
  }
  onSend(): void {
    const sv = 3198060896;
    const systole = this.systole.nativeElement.value;
    const diastole = this.diastole.nativeElement.value;
    const heartRate = this.heartRate.nativeElement.value;
    const time = '12:00';
    const date = '10.12.2018';
    const tmp: VitalParameter = {
        sv: sv,
        systole: systole,
        diastole: diastole,
        heartbeat: heartRate,
        date: date,
        time: time
      };
    DATES.unshift(tmp);
  }
}
