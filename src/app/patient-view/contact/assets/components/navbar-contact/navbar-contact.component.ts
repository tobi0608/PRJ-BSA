import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar-contact',
  templateUrl: './navbar-contact.component.html',
  styleUrls: ['./navbar-contact.component.scss']
})
export class NavbarContactComponent implements OnInit {

    constructor(public router: Router) { }

    ngOnInit() {
    }
    onRoute(route): void {
        this.router.navigate([route]);
    }
}
