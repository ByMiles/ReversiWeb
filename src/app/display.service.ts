import {Injectable} from '@angular/core';
import { RulesService } from './rules.service';
import {CellInfo} from './cellinfo';

@Injectable()
export class DisplayService {

  private rules: RulesService;

  private in_charge : boolean[];

  private possible : boolean[][];

  private possibles : boolean[];

  private score: number[];

  round : boolean[][][];

  private x : number;

  public cells;

  private labelText: string;

  constructor() {
    this.x = 8;
    this.cells = [];
    this.newCells();
  }

  newGame(){
    this.x = 8;
    this.newCells();
    this.rules = new RulesService(this.x, 2 , 0);
    this.newRound();
  }

  newRound(){
    this.rules.newRound();
    this.in_charge = this.rules.getIn_charge();
    this.possible = this.rules.getPossible();
    this.possibles = this.rules.getPossibles();
    this.round = this.rules.getRound();
    this.showCourt();
    this.setScore();
    this.setLabelText();
    this.checkWin();
  }

  showCourt(){
    for(let row: number = 0; row < this.x; row++){
      for(let col: number = 0; col < this.x; col++){
        if(!this.round[row][col][0] && !this.round[row][col][1]){
          if(this.possible[row][col]){
            if(this.in_charge[0]){
              this.cells[row][col].setState(3);
            }
            else{
              this.cells[row][col].setState(4);
            }
          }
          else{
            this.cells[row][col].setState(0);
          }
        }
        else if(this.round[row][col][0]){
          this.cells[row][col].setState(1);
        }
        else {this.cells[row][col].setState(2);
        }
      }
    }
  }

  endRound(row: number, col: number){
    this.rules.endRound(row, col);
    this.newRound();
  }

  skipRound(){
    this.rules.skipRound();
    this.newRound();
  }

  skipable(){
    return this.possibles[0];
  }

  undoRound(){
    this.rules.undoRound();
    this.newRound();
  }

  undoable(){
    return this.rules.undoable();
  }

  getCells(){
    return this.cells;
  }

  setScore(){
    this.score = [this.rules.stats.getP1Sum(), this.rules.stats.getP2Sum(), this.rules.stats.getEmptySum()];
  }

  getScoreP1(){
    return this.score[0];
  }

  getScoreP2(){
    return this.score[1];
  }

  getIn_charge(){
    return this.in_charge;
  }

  setLabelText(){
    if(this.in_charge[0]){
      this.labelText = 'Spieler 1';
    }
    else{
      this.labelText = 'Spieler 2';
    }
  }

  getLabelText(){
    return this.labelText;
  }

  checkWin(){
    if(this.rules.checkWin()){
      this.possibles[0] = true;

      switch(this.rules.gameOver())
      {
        case 1:
          this.labelText = '<< Sieg';
          this.in_charge = [true, false];
          break;
        case 2:
          this.labelText = 'Sieg >>';
          this.in_charge = [false, true];
          break;
        case 3:
          this.labelText = 'unentschieden';
          break;
      }
    }
  }

  newCells(){
    this.cells.length = 0;
    for(let row: number = 0; row < this.x; row++)
    {
      this.cells[row] = [];
      for(let col: number = 0; col < this.x; col++){
        this.cells[row][col] = new CellInfo(row, col, 0)
      }
    }
  }

}
