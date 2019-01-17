import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    /**
     * Name der Header Überschrift für den Desktop
     * @type {string}
     */
    title = 'RivaRocciPass';
    /**
     * Name der Header Überschrift für Mobile Geräte
     * @type {string}
     */
    title_md = 'RRP';
}
