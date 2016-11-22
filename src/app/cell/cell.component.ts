import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
  @Input() row: number;
  @Input() col: number;

  p1: boolean = false;
  p2: boolean = false;
  prev1: boolean = false;
  prev2: boolean = false;
  noCirc: boolean = true;

  state: number = 0;

  constructor() {

  }

  setState(state: number){
    switch (state){
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

  switchState(){
    this.state = (this.state + 1)% 5;
    this.setState(this.state);
  }

  ngOnInit() {
  }



}
