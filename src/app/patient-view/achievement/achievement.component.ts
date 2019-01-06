import { Component, OnInit } from '@angular/core';
import {LogInCheck} from '../../global-files/function/LogInCheck';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.scss']
})
export class AchievementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      LogInCheck('patient');
  }
    onOff(): void {
        document.cookie = 'null; path=/';
        console.log(document.cookie);
    }
}
