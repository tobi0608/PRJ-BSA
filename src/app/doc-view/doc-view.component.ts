import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-view',
  templateUrl: './doc-view.component.html',
  styleUrls: ['./doc-view.component.scss']
})

export class DocViewComponent implements OnInit {
  name = 'Mayer';
  number_new_alerts = '5';

  constructor() {}

  ngOnInit() {}
}
