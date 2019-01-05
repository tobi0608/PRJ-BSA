import {Component, OnInit, ViewChild} from '@angular/core';
import {DATES} from '../../../mock-files/mock-vital-parameter';
import {VitalParameter} from '../../../mock-files/vital-parameter';
import {LogInCheck} from '../../../global-funtions/LogInCheck';
import {PushData} from '../../../global-funtions/PushData';

let user = [];

@Component({
  selector: 'app-parameter-list',
  templateUrl: './parameter-list.component.html',
  styleUrls: ['./parameter-list.component.scss']
})
export class ParameterListComponent implements OnInit {
  dates;
  @ViewChild('systole') systole;
  @ViewChild('diastole') diastole;
  @ViewChild('heartRate') heartRate;

  constructor() { }

  ngOnInit() {
      user = document.cookie.split(',');
      LogInCheck('patient');
      this.dates = PushData(user[0], 'all');
  }

    onSend(): void {
        user = document.cookie.split(',');
        const sv = parseInt(user[0], 10);
        const systole = parseInt(this.systole.nativeElement.value, 10);
        const diastole = parseInt(this.diastole.nativeElement.value, 10);
        const heartRate = parseInt(this.heartRate.nativeElement.value, 10);
        const timeDate = Date.now();
        let iTen = ' ';
        if (systole > 140) {
            iTen = 'heart';
        }
        const tmp: VitalParameter = {
            sv: sv,
            systole: systole,
            diastole: diastole,
            heartbeat: heartRate,
            timestamp: timeDate,
            i10: iTen
        };
      if (systole && diastole && heartRate !== null) {
          DATES.unshift(tmp);
          alert('Ihre Werte wurden gespeichert');
          this.ngOnInit();
      }
    }
    onOff(): void {
        document.cookie = 'null; path=/';
        console.log(document.cookie);
    }
}
