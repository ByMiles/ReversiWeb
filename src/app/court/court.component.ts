import { Component, OnInit, Input } from '@angular/core';
import { CourtInfo } from 'app/courtinfo'
import { DisplayService } from 'app/display.service'

@Component({
  selector: 'court',
  templateUrl: './court.component.html',
  //template: '<pre>{{ display.round | json }}</pre>',
  styleUrls: ['./court.component.css'],
  providers: [DisplayService]
})
export class CourtComponent implements OnInit {

  courtInfo: CourtInfo;
  @Input() display: DisplayService;

  constructor() {

  }

  ngOnInit() {
    this.display.newGame();
  }

}
