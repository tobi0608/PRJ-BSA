import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighchartsChartModule } from 'highcharts-angular';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { DocViewComponent } from './doc-view/dashboard/doc-view.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { PatientViewComponent } from './patient-view/dashboard/patient-view.component';
import { RoutingServiceModule } from './routing-service/routing-service.module';
import { MessageListComponent } from './doc-view/message/message-list/message-list.component';
import { PatientListComponent } from './doc-view/patient/patient-list/patient-list.component';
import { ParameterListComponent } from './patient-view/parameter/parameter-list/parameter-list.component';
import { AlertListComponent } from './patient-view/contact/alert-list/alert-list.component';
import { AppointmentComponent } from './patient-view/contact/appointment/appointment.component';
import { ParameterChartComponent } from './patient-view/parameter/parameter-chart/parameter-chart.component';
import { PatientSettingsComponent } from './patient-view/user/patient-settings/patient-settings.component';
import { AchievementComponent } from './patient-view/achievement/achievement.component';
import { DocAlertListComponent } from './doc-view/message/doc-alert-list/doc-alert-list.component';
import { DoctorSettingsComponent } from './doc-view/user/doctor-settings/doctor-settings.component';
import { PatientRecordComponent } from './doc-view/patient/patient-record/patient-record.component';
import { PatientInformationComponent } from './patient-view/user/patient-information/patient-information.component';
import { DoctorInformationComponent } from './doctor-information/doctor-information.component';

@NgModule({
  declarations: [
    AppComponent,
    DocViewComponent,
    HomeViewComponent,
    PatientViewComponent,
    MessageListComponent,
    PatientListComponent,
    ParameterListComponent,
    AlertListComponent,
    AppointmentComponent,
    ParameterChartComponent,
    PatientSettingsComponent,
    AchievementComponent,
    DocAlertListComponent,
    DoctorSettingsComponent,
    PatientRecordComponent,
    PatientInformationComponent,
    DoctorInformationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingServiceModule,
    HighchartsChartModule,
      AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
