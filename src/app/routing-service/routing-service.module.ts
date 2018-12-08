import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {DocViewComponent} from '../doc-view/doc-view.component';
import {MessageListComponent} from '../doc-view/message-list/message-list.component';
import {PatientListComponent} from '../doc-view/patient-list/patient-list.component';

const routes: Routes = [
    { path: '', redirectTo: 'doctor/dashboard', pathMatch: 'full' },
    { path: 'doctor/dashboard', component: DocViewComponent },
    { path: 'doctor/messages', component: MessageListComponent },
    { path: 'doctor/patients', component: PatientListComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class RoutingServiceModule { }
