import { Component, OnInit } from '@angular/core';
import {LogInCheck} from '../../global-files/function/LogInCheck';
import {Router} from '@angular/router';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.scss']
})
export class AchievementComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
      LogInCheck('patient');
  }
    onRoute(route): void {
        this.router.navigate([route]);
    }
    onOff(): void {
        document.cookie = 'null; path=/';
        console.log(document.cookie);
    }
}
