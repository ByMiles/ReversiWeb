import { Component, OnInit } from '@angular/core';
import { CourtInfo } from 'app/courtinfo'

@Component({
  selector: 'court',
  templateUrl: './court.component.html',
  //template: '<pre>{{ round.cells | json }}</pre>',
  styleUrls: ['./court.component.css']
})
export class CourtComponent implements OnInit {
  round: CourtInfo;
  constructor() {this.round = new CourtInfo(8); }

  ngOnInit() {

  }

}
