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
      USERS.find(function (tmp) {
          if (tmp.sv.toString() === document.cookie) {
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
        const date = this.date.nativeElement.value;
        const time = this.time.nativeElement.value;
        const type = this.type.nativeElement.value;
        const tmp: Message = {
            sv: parseInt(document.cookie, 10),
            sv_doc: parseInt(document.cookie, 10),
            first_name: 'test',
            last_name: 'test',
            type: 'Termin',
            text: date + ' - ' + time + ': ' + type,
            timestamp: Date.now(),
            from: 'Pat',
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
