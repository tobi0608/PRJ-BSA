import {Component, OnInit, ViewChild} from '@angular/core';
import {DATES} from '../../../mock-files/mock-vital-parameter';
import {VitalParameter} from '../../../mock-files/vital-parameter';
import {USERS} from '../../../mock-files/mock-user';

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
      USERS.find(function (tmp) {
          if (tmp.sv.toString() === document.cookie){
              console.log('ok Access', document.cookie);
              return true;
          } else {
              console.log('no access', document.cookie);
              document.getElementById('loginSite').style.display = 'none';
              document.getElementById('noAccess').style.display = 'block';
          }
      });
  }

  onSend(): void {
        const sv = 3198060896;
        const systole = this.systole.nativeElement.value;
        const diastole = this.diastole.nativeElement.value;
        const heartRate = this.heartRate.nativeElement.value;
        const timedate = Date.now();
        const tmp: VitalParameter = {
            sv: sv,
            systole: systole,
            diastole: diastole,
            heartbeat: heartRate,
            timestamp: timedate
        };
        DATES.unshift(tmp);
    }
    onOff(): void {
        document.cookie = 'null; path=/';
        console.log(document.cookie);
    }
}
