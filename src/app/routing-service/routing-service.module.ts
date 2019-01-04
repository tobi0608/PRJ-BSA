import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {DocViewComponent} from '../doc-view/doc-view.component';
import {MessageListComponent} from '../doc-view/message-list/message-list.component';
import {PatientListComponent} from '../doc-view/patient-list/patient-list.component';
import {HomeViewComponent} from '../home-view/home-view.component';
import {PatientViewComponent} from '../patient-view/patient-view.component';
import {ParameterListComponent} from '../patient-view/parameter-chart/parameter-list/parameter-list.component';
import {AlertListComponent} from '../patient-view/appointment/alert-list/alert-list.component';
import {AppointmentComponent} from '../patient-view/appointment/appointment.component';
import {ParameterChartComponent} from '../patient-view/parameter-chart/parameter-chart.component';
import {PatientSettingsComponent} from '../patient-view/patient-settings/patient-settings.component';
import {AchievementComponent} from '../patient-view/achievement/achievement.component';
import {DocAlertListComponent} from '../doc-view/message-list/doc-alert-list/doc-alert-list.component';
import {DoctorSettingsComponent} from '../doc-view/doctor-settings/doctor-settings.component';
import {PatientRecordComponent} from '../doc-view/patient-list/patient-record/patient-record.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeViewComponent },
    { path: 'doctor/dashboard', component: DocViewComponent },
    { path: 'doctor/messages', component: MessageListComponent },
    { path: 'doctor/alerts', component: DocAlertListComponent },
    { path: 'doctor/patients', component: PatientListComponent },
    { path: 'doctor/patients/record/:sv', component: PatientRecordComponent },
    { path: 'doctor/settings', component: DoctorSettingsComponent},
    { path: 'patient/dashboard', component: PatientViewComponent },
    { path: 'patient/parameter-chart', component: ParameterChartComponent },
    { path: 'patient/parameter-chart/list', component: ParameterListComponent },
    { path: 'patient/appointment', component: AppointmentComponent },
    { path: 'patient/appointment/alert', component: AlertListComponent },
    { path: 'patient/settings', component: PatientSettingsComponent },
    { path: 'patient/achievement', component: AchievementComponent }

];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class RoutingServiceModule { }
