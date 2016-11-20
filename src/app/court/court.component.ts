import { Component, OnInit } from '@angular/core';
import { CourtCourt } from './court.court'

@Component({
  selector: 'court',
  templateUrl: './court.component.html',
  styleUrls: ['./court.component.css']
})
export class CourtComponent implements OnInit {
  round: CourtCourt;
  constructor() { }

  ngOnInit() {
    this.round = new CourtCourt(8);
  }

}
