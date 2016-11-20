import { Component, OnInit } from '@angular/core';
import { CourtInfo } from 'app/courtinfo'

@Component({
  selector: 'court',
  templateUrl: './court.component.html',
  styleUrls: ['./court.component.css']
})
export class CourtComponent implements OnInit {
  round: CourtInfo;
  name: string = "23";
  constructor() { }

  ngOnInit() {
    this.round = new CourtInfo(8);
    this.name = "14";
  }

}
