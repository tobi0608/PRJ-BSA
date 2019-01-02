import {Component, OnInit, ViewChild} from '@angular/core';
import {USERS} from '../../mock-files/mock-user';
import {Message} from '../../mock-files/messages';
import {MESSAGES} from '../../mock-files/mock-messages';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
    @ViewChild('time') time;
    @ViewChild('date') date;
    @ViewChild('type') type;

  constructor() { }

  ngOnInit() {
      const user = document.cookie.split(',');

      USERS.find(function (tmp) {
          if (tmp.sv.toString() === user[0] && tmp.type === 'patient') {
              return true;
          } else {
              document.getElementById('loginSite').style.display = 'none';
              document.getElementById('noAccess').style.display = 'block';
          }
      });
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
            text: date + ' - ' + time + ': ' + type,
            timestamp: Date.now(),
            seen: 'bell'
        };
        if (date && time && type !== null) {
            MESSAGES.unshift(tmp);
        }
    }
    onOff(): void {
        document.cookie = 'null; path=/';
        console.log(document.cookie);
    }
}
