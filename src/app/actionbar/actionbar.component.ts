import { Component, OnInit, Input } from '@angular/core';
import { DisplayService } from 'app/display.service';

@Component({
  selector: 'actionbar',
  templateUrl: './actionbar.component.html',
  styleUrls: ['./actionbar.component.css'],
  providers: [DisplayService]
})
export class ActionbarComponent implements OnInit {

  @Input() display: DisplayService;

  constructor() { }

  ngOnInit() {
  }

  skipAction(){
    this.display.skipRound();
  }

  undoAction(){
    this.display.undoRound();
  }

}
