import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {DocViewComponent} from '../doc-view/doc-view.component';
import {MessageListComponent} from '../doc-view/message-list/message-list.component';
import {PatientListComponent} from '../doc-view/patient-list/patient-list.component';
import {HomeViewComponent} from '../home-view/home-view.component';
import {PatientViewComponent} from '../patient-view/dashboard/patient-view.component';
import {ParameterListComponent} from '../patient-view/parameter/parameter-list/parameter-list.component';
import {AlertListComponent} from '../patient-view/contact/alert-list/alert-list.component';
import {AppointmentComponent} from '../patient-view/contact/appointment/appointment.component';
import {ParameterChartComponent} from '../patient-view/parameter/parameter-chart/parameter-chart.component';
import {PatientSettingsComponent} from '../patient-view/user/patient-settings/patient-settings.component';
import {AchievementComponent} from '../patient-view/achievement/achievement.component';
import {DocAlertListComponent} from '../doc-view/message-list/doc-alert-list/doc-alert-list.component';
import {DoctorSettingsComponent} from '../doc-view/doctor-settings/doctor-settings.component';
import {PatientRecordComponent} from '../doc-view/patient-list/patient-record/patient-record.component';
import {PatientInformationComponent} from '../patient-view/user/patient-information/patient-information.component';

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
    { path: 'patient/parameter/chart', component: ParameterChartComponent },
    { path: 'patient/parameter/list', component: ParameterListComponent },
    { path: 'patient/contact/appointment', component: AppointmentComponent },
    { path: 'patient/contact/alert', component: AlertListComponent },
    { path: 'patient/achievement', component: AchievementComponent },
    { path: 'patient/user/settings', component: PatientSettingsComponent },
    { path: 'patient/user/information', component: PatientInformationComponent }

];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class RoutingServiceModule { }
