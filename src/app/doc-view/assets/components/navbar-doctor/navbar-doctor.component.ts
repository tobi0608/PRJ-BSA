import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-navbar-doctor',
    templateUrl: './navbar-doctor.component.html',
    styleUrls: ['./navbar-doctor.component.scss']
})
export class NavbarDoctorComponent implements OnInit {
    /**
     * Für das highlighten des derzeitigen Component
     */
    @ViewChild('nav') nav;
    @ViewChild('navMobile') navMobile;

    constructor(private route: ActivatedRoute, public router: Router) {
    }

    ngOnInit() {
        const route = this.route.snapshot.routeConfig.path.split('/');
        this.nav.nativeElement.childNodes.forEach(function (tmp) {
            if (tmp.attributes.name.value === route[1]) {
                tmp.classList.value = 'nav--nav-active';
            }
        });
        this.navMobile.nativeElement.childNodes.forEach(function (tmp) {
            if (tmp.attributes.value.value.split('/')[1] === route[1]) {
                tmp.selected = true;
            }
        });
    }

    /**
     * Leitet dich zum gewünschten Component weiter oder zur onOff-Funktion
     * @param route gewähltes Component
     */
    onRoute(route): void {
        if (route !== ' ') {
            this.router.navigate([route]);
        } else {
            this.onOff();
        }
    }

    /**
     * Löscht LocalStorage und leitet dich zum LogIn weiter
     */
    onOff(): void {
        if (confirm('Bei Bestätigung melden Sie sich von Ihrem Profil ab')) {
            localStorage.clear();
            this.router.navigate(['home']);
        } else {
            this.ngOnInit();
        }
    }
}
