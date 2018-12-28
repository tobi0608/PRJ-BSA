import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'angular-highcharts';

import { AppComponent } from './app.component';
import { DocViewComponent } from './doc-view/doc-view.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { PatientViewComponent } from './patient-view/patient-view.component';
import { RoutingServiceModule } from './routing-service/routing-service.module';
import { MessageListComponent } from './doc-view/message-list/message-list.component';
import { PatientListComponent } from './doc-view/patient-list/patient-list.component';
import { ParameterListComponent } from './patient-view/parameter-list/parameter-list.component';
import { AlertListComponent } from './patient-view/alert-list/alert-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DocViewComponent,
    HomeViewComponent,
    PatientViewComponent,
    MessageListComponent,
    PatientListComponent,
    ParameterListComponent,
    AlertListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingServiceModule,
    ChartModule // add ChartModule to your imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
