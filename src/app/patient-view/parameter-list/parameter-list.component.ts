import {Component, OnInit, ViewChild} from '@angular/core';
import {DATES} from '../../mock-files/mock-vital-parameter';
import {VitalParameter} from '../../mock-files/vital-parameter';

@Component({
  selector: 'app-parameter-list',
  templateUrl: './parameter-list.component.html',
  styleUrls: ['./parameter-list.component.scss']
})
export class ParameterListComponent implements OnInit {
  dates = DATES;
  @ViewChild('systole') systole;
  @ViewChild('diastole') diastole;
  @ViewChild('heartRate') heartRate;

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
        DATES.push(tmp);
    }
}
