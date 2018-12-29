import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighchartsChartModule } from 'highcharts-angular';

import { AppComponent } from './app.component';
import { DocViewComponent } from './doc-view/doc-view.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { PatientViewComponent } from './patient-view/patient-view.component';
import { RoutingServiceModule } from './routing-service/routing-service.module';
import { MessageListComponent } from './doc-view/message-list/message-list.component';
import { PatientListComponent } from './doc-view/patient-list/patient-list.component';
import { ParameterListComponent } from './patient-view/parameter-list/parameter-list.component';
import { AlertListComponent } from './patient-view/alert-list/alert-list.component';
import { AppointmentComponent } from './patient-view/alert-list/appointment/appointment.component';
import { ParameterChartComponent } from './patient-view/parameter-list/parameter-chart/parameter-chart.component';
import { PatientSettingsComponent } from './patient-view/patient-settings/patient-settings.component';
import { AchievementComponent } from './patient-view/achievement/achievement.component';

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
    AchievementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingServiceModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
