import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar-parameter',
  templateUrl: './navbar-parameter.component.html',
  styleUrls: ['./navbar-parameter.component.scss']
})
export class NavbarParameterComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
    onRoute(route): void {
        this.router.navigate([route]);
    }
}
