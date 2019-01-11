import {Component, OnInit} from '@angular/core';
import {LogInCheck} from '../../../global-files/function/LogInCheck';

@Component({
  selector: 'app-doctor-settings',
  templateUrl: './doctor-settings.component.html',
  styleUrls: ['./doctor-settings.component.scss']
})
export class DoctorSettingsComponent implements OnInit {
  constructor() { }

  ngOnInit() {
      LogInCheck('doctor');
  }
}
