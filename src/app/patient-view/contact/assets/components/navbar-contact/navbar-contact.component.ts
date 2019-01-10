import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-navbar-contact',
  templateUrl: './navbar-contact.component.html',
  styleUrls: ['./navbar-contact.component.scss']
})
export class NavbarContactComponent implements OnInit {
    @ViewChild('nav') nav;
    @ViewChild('navMobile') navMobile;
    constructor(private route: ActivatedRoute, public router: Router) { }

    ngOnInit() {
        const route = this.route.snapshot.routeConfig.path;
        this.nav.nativeElement.childNodes.forEach(function (tmp) {
            if (tmp.attributes.routerLink.value === '/' + route) {
                tmp.classList.value = 'navContact--nav-active';
            }
        });
        this.navMobile.nativeElement.childNodes.forEach(function (tmp) {
            if (tmp.attributes.value.value === route) {
                tmp.selected = true;
            }
        });
    }
    onRoute(route): void {
        this.router.navigate([route]);
    }
}
