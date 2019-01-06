import {Component, OnInit, ViewChild} from '@angular/core';
import {Message} from '../../../mock-files/messages';
import {MESSAGES} from '../../../mock-files/mock-messages';
import {LogInCheck} from '../../../global-files/function/LogInCheck';
import {Router} from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
    @ViewChild('time') time;
    @ViewChild('date') date;
    @ViewChild('type') type;

  constructor(public router: Router) { }

  ngOnInit() {
      LogInCheck('patient');
  }
    onRoute(route): void {
        this.router.navigate([route]);
    }
    onSend(): void {
        const user = document.cookie.split(',');
        const date = this.date.nativeElement.value;
        const time = this.time.nativeElement.value;
        const type = this.type.nativeElement.value;
        const tmp: Message = {
            svFrom: parseInt(user[0], 10),
            svTo: parseInt(user[4], 10),
            first_name: user[2],
            last_name: user[3],
            type: 'Termin',
            text: 'Termin für ' + type + ' am ' + date + ' - ' + ' um ' +  time,
            timestamp: Date.now(),
            seen: 'bell',
            check: 'check',
            times: 'times'
        };
        if (date && time && type !== null) {
            MESSAGES.unshift(tmp);
            alert('Ihr Terminvorschlag wurde abgeschickt und wird demnächst bearbeitet!');
        }
    }
    onOff(): void {
        document.cookie = 'null; path=/';
        console.log(document.cookie);
    }
}
