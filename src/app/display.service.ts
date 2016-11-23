import {Injectable} from '@angular/core';
import { RulesService } from './rules.service';
import {CourtInfo } from './courtinfo';

@Injectable()
export class DisplayService {

  private courtInfo: CourtInfo;

  private rules: RulesService;

  private in_charge : boolean[];

  private possible : boolean[][];

  private possibles : boolean[];

  private score: number[];

  round : boolean[][][];

  private x : number;

  private labelText: string;

  constructor(courtInfo: CourtInfo ) {
    this.courtInfo = courtInfo;
  }

  newGame(){
    this.x = 8;
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
    console.log(this.courtInfo.cells.toString());
    for(let row: number = 0; row < this.x; row++){
      for(let col: number = 0; col < this.x; col++){
        if(!this.round[row][col][0] && !this.round[row][col][1]){
          if(this.possible[row][col]){
            if(this.in_charge[0]){
              this.courtInfo.cells[row][col].setState(3);
            }
            else{
              this.courtInfo.cells[row][col].setState(4);
            }
          }
          else{
            this.courtInfo.cells[row][col].setState(0);
          }
        }
        else if(this.round[row][col][0]){
          this.courtInfo.cells[row][col].setState(1);
        }
        else {this.courtInfo.cells[row][col].setState(2);
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
    return this.courtInfo.cells;
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

}
