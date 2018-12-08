import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {DocViewComponent} from '../doc-view/doc-view.component';
import {MessageListComponent} from '../doc-view/message-list/message-list.component';
import {PatientListComponent} from '../doc-view/patient-list/patient-list.component';
import {HomeViewComponent} from '../home-view/home-view.component';
import {PatientViewComponent} from '../patient-view/patient-view.component';
import {ParameterListComponent} from '../patient-view/parameter-list/parameter-list.component';
import {AlertListComponent} from '../patient-view/alert-list/alert-list.component';

const routes: Routes = [
    { path: '', redirectTo: 'patient/dashboard', pathMatch: 'full' },
    { path: 'home', component: HomeViewComponent },
    { path: 'doctor/dashboard', component: DocViewComponent },
    { path: 'doctor/messages', component: MessageListComponent },
    { path: 'doctor/patients', component: PatientListComponent },
    { path: 'patient/dashboard', component: PatientViewComponent },
    { path: 'patient/parameter', component: ParameterListComponent },
    { path: 'patient/alerts', component: AlertListComponent }

];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class RoutingServiceModule { }
