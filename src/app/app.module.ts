import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DocViewComponent } from './doc-view/doc-view.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { PatientViewComponent } from './patient-view/patient-view.component';

@NgModule({
  declarations: [
    AppComponent,
    DocViewComponent,
    HomeViewComponent,
    PatientViewComponent
  ],
  imports: [
    BrowserModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
