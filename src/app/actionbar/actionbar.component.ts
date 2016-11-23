import { Component, OnInit} from '@angular/core';
import { DisplayService } from 'app/display.service';

@Component({
  selector: 'actionbar',
  templateUrl: './actionbar.component.html',
  styleUrls: ['./actionbar.component.css'],
})

export class ActionbarComponent implements OnInit {

  public display: DisplayService;

  constructor(display: DisplayService) {
    this.display = display;
  }

  ngOnInit() {
  }

  skipAction(){
    this.display.skipRound();
  }

  undoAction(){
    this.display.undoRound();
  }

}
