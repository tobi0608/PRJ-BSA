import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-navbar-message',
    templateUrl: './navbar-message.component.html',
    styleUrls: ['./navbar-message.component.scss']
})
export class NavbarMessageComponent implements OnInit {
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
                tmp.classList.value = 'navMessage--nav-active';
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
