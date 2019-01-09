import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar-user-patient',
  templateUrl: './navbar-user-patient.component.html',
  styleUrls: ['./navbar-user-patient.component.scss']
})
export class NavbarUserPatientComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
    onRoute(route): void {
        this.router.navigate([route]);
    }
}
