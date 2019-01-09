import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar-patients',
  templateUrl: './navbar-patients.component.html',
  styleUrls: ['./navbar-patients.component.scss']
})
export class NavbarPatientsComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
    onRoute(route): void {
        this.router.navigate([route]);
    }
    onOff(): void {
        localStorage.clear();
    }

}
