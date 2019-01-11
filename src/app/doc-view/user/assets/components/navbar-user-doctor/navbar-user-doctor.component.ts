import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-navbar-user-doctor',
  templateUrl: './navbar-user-doctor.component.html',
  styleUrls: ['./navbar-user-doctor.component.scss']
})
export class NavbarUserDoctorComponent implements OnInit {
    @ViewChild('nav') nav;
    @ViewChild('navMobile') navMobile;
    constructor(private route: ActivatedRoute, public router: Router) { }

    ngOnInit() {
        const route = this.route.snapshot.routeConfig.path;
        this.nav.nativeElement.childNodes.forEach(function (tmp) {
            if (tmp.attributes.routerLink.value === '/' + route) {
                tmp.classList.value = 'navUsers--nav-active';
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
