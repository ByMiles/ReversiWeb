import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'actionbar',
  templateUrl: './actionbar.component.html',

  styleUrls: ['./actionbar.component.css']
})
export class ActionbarComponent implements OnInit {
  action: string = "action";
  constructor() { }

  ngOnInit() {
  }

}
