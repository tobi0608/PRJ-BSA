import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LogInCheck} from '../../../global-funtions/LogInCheck';
import {MessageFilter} from '../../../global-funtions/MessageFilter';

@Component({
  selector: 'app-doc-alert-list',
  templateUrl: './doc-alert-list.component.html',
  styleUrls: ['./doc-alert-list.component.scss']
})
export class DocAlertListComponent implements OnInit {
    alerts;

  constructor(public router: Router) { }

  ngOnInit() {
      LogInCheck('doctor');
      this.alerts = MessageFilter('Bluthochdruck');
  }
    onSelect(patient): void {
        this.router.navigate(['doctor/patients/record/:' + patient]);
    }

    onSeen(alert): void {
        alert.seen = ' ';
    }

    onOff(): void {
        document.cookie = 'null; path=/';
        console.log(document.cookie);
    }
}
