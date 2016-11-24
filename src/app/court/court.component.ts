import { Component, OnInit} from '@angular/core';
import { DisplayService } from 'app/display.service'

@Component({
  selector: 'court',
  templateUrl: './court.component.html',
  //template: '<pre>{{ display.round | json }}</pre>',
  styleUrls: ['court.component.scss'],
})
export class CourtComponent implements OnInit {

  constructor(private _display: DisplayService) {
  }

  ngOnInit() {
    this._display.newGame();
  }

}
