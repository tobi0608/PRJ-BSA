import {Component, OnInit, ViewChild} from '@angular/core';
import {DATES} from '../../../mock-files/mock-vital-parameter';
import {VitalParameter} from '../../../mock-files/vital-parameter';
import {LogInCheck} from '../../../global-files/function/LogInCheck';
import {PushData} from '../../../global-files/function/PushData';
import {Message} from '../../../mock-files/messages';
import {MESSAGES} from '../../../mock-files/mock-messages';
import {Router} from '@angular/router';

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

  constructor(public router: Router) { }

  ngOnInit() {
      user = document.cookie.split(',');
      LogInCheck('patient');
      this.dates = PushData(user[0], 'all');
  }
    onRoute(route): void {
        this.router.navigate([route]);
    }
    onSend(): void {
        user = document.cookie.split(',');
        const systole = parseInt(this.systole.nativeElement.value, 10);
        const diastole = parseInt(this.diastole.nativeElement.value, 10);
        const heartRate = parseInt(this.heartRate.nativeElement.value, 10);
        let iTen = ' ';
        if (systole > 140) {
            iTen = 'heart';
        }
        const tmp: VitalParameter = {
            sv: parseInt(user[0], 10),
            systole: systole,
            diastole: diastole,
            heartbeat: heartRate,
            timestamp: Date.now(),
            i10: iTen
        };

        if (systole && diastole && heartRate !== null) {
            if (systole > 140) {
                const msg: Message = {
                    svFrom: parseInt(user[0], 10),
                    svTo: parseInt(user[4], 10),
                    first_name: user[2],
                    last_name: user[3],
                    type: 'Bluthochdruck',
                    text: 'Bluthochdruck! ' + systole + '/' + diastole + '/' + heartRate + '!',
                    timestamp: Date.now(),
                    seen: 'bell',
                    check: ' ',
                    times: ' '
                };
                MESSAGES.unshift(msg);
            }
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
