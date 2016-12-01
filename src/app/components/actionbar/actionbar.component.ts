import {Component, OnInit} from "@angular/core";
import {ToFrontService} from "app/services/toFront.service";

@Component({
  selector: 'actionbar',
  templateUrl: 'actionbar.component.html',
  styleUrls: ['actionbar.component.scss'],
})

export class ActionbarComponent implements OnInit {

  public toFront: ToFrontService;

  constructor(toFront: ToFrontService) {
    this.toFront = toFront;
  }

  ngOnInit() {
  }

  skipAction(){
    this.toFront.skipRound();
  }

  undoAction(){
    this.toFront.undoRound();
  }

}
