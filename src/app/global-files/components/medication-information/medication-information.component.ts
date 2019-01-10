import { Component, OnInit } from '@angular/core';
import {FilterMedication} from '../../function/FilterMedication';

@Component({
  selector: 'app-medication-information',
  templateUrl: './medication-information.component.html',
  styleUrls: ['./medication-information.component.scss']
})
export class MedicationInformationComponent implements OnInit {
    currentMeds;
    usedMeds;
    constructor() { }

    ngOnInit() {
        const sv = localStorage.getItem('sv');
        this.currentMeds = FilterMedication(sv, 'fresh');
        this.usedMeds = FilterMedication(sv, 'expired');
    }
}
