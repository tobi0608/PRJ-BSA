import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DocViewComponent } from './doc-view/doc-view.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { PatientViewComponent } from './patient-view/patient-view.component';
import { RoutingServiceModule } from './routing-service/routing-service.module';
import { MessageListComponent } from './doc-view/message-list/message-list.component';
import { PatientListComponent } from './doc-view/patient-list/patient-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DocViewComponent,
    HomeViewComponent,
    PatientViewComponent,
    MessageListComponent,
    PatientListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
