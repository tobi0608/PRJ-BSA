import { Component, OnInit } from '@angular/core';
import {DATES} from '../../mock-files/mock-vital-parameter';

@Component({
  selector: 'app-parameter-list',
  templateUrl: './parameter-list.component.html',
  styleUrls: ['./parameter-list.component.scss']
})
export class ParameterListComponent implements OnInit {
  dates = DATES;

  constructor() { }

  ngOnInit() {
  }

}
