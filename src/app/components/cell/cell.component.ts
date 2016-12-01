import {Component, OnInit, Input} from "@angular/core";
import {ToFrontService} from "app/services/toFront.service";

@Component({
  selector: 'cell',
  templateUrl: 'cell.component.html',
  styleUrls: ['cell.component.scss'],
})
export class CellComponent implements OnInit {
  @Input() row: number;
  @Input() col: number;
  @Input() state: number;

  p1: boolean = false;
  p2: boolean = false;
  prev1: boolean = false;
  prev2: boolean = false;
  noCirc: boolean = true;
  cellcolor: string;


  constructor(private _toFront: ToFrontService) {
    this.cellcolor = '#27ae60';
  }

  setState(){
    switch (this.state){
      case 1:
        this.p1 = true;
        this.p2 = false;
        this.prev1 = false;
        this.prev2 = false;
        this.noCirc = false;
        break;
      case 2:
        this.p1 = false;
        this.p2 = true;
        this.prev1 = false;
        this.prev2 = false;
        this.noCirc = false;
        break;
      case 3:
        this.p1 = false;
        this.p2 = false;
        this.prev1 = true;
        this.prev2 = false;
        this.noCirc = false;
        break;
      case 4:
        this.p1 = false;
        this.p2 = false;
        this.prev1 = false;
        this.prev2 = true;
        this.noCirc = false;
        break;
      default:
        this.p1 = false;
        this.p2 = false;
        this.prev1 = false;
        this.prev2 = false;
        this.noCirc = true;
    }
  }

  doAction(){
    if(this.state == 3 || this.state == 4){
      this._toFront.endRound(this.row, this.col);
    }
    else {
      this.cellcolor = 'firebrick';
      setTimeout(() => this.cellcolor = '#27ae60', 1000);
    }
  }

  ngOnInit() {
  }



}
