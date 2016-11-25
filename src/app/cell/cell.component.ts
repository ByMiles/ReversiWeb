import {Component, OnInit, Input} from '@angular/core';
import {DisplayService} from 'app/display.service'

@Component({
  selector: 'cell',
  templateUrl: './cell.component.html',
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
  zonk: number = 2;


  constructor(private _display: DisplayService) {
    this.zonk = 2;
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
    console.log(this.zonk);
    if(this.state == 3 || this.state == 4){
      this._display.endRound(this.row, this.col);
    }
    else{
      this.zonk = 1;
      console.log(this.zonk);
      setTimeout(function() {
        this.zonk = 2;
      }, 1000);
      console.log(this.zonk);
    }
  }

  ngOnInit() {
  }



}
