import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-navbar-parameter',
    templateUrl: './navbar-parameter.component.html',
    styleUrls: ['./navbar-parameter.component.scss']
})
export class NavbarParameterComponent implements OnInit {
    /**
     * Für das highlighten des derzeitigen Component
     */
    @ViewChild('nav') nav;
    @ViewChild('navMobile') navMobile;

    constructor(private route: ActivatedRoute, public router: Router) {
    }

    ngOnInit() {
        const route = this.route.snapshot.routeConfig.path;
        this.nav.nativeElement.childNodes.forEach(function (tmp) {
            if (tmp.attributes.routerLink.value === '/' + route) {
                tmp.classList.value = 'navParameter--nav-active';
            }
        });
        this.navMobile.nativeElement.childNodes.forEach(function (tmp) {
            if (tmp.attributes.value.value === route) {
                tmp.selected = true;
            }
        });
    }

    /**
     * Leitet dich zum gewünschten Component weiter
     * @param route gewähltes Component
     */
    onRoute(route): void {
        this.router.navigate([route]);
    }
}
