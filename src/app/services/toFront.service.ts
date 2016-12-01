import {Injectable} from "@angular/core";
import {CellInfo} from "../modules/cellinfo";
import {RoundInfo} from "../modules/roundinfo";
import {ToBackService} from "./toBack.service";

@Injectable()
export class ToFrontService {

  private in_charge : boolean[];

  private possible : boolean[][];

  private possibles : boolean[];

  private score: number[];

  round : boolean[][][];

  private x : number;

  public cells;

  private labelText: string;

  private hint: boolean;

  private _undoable: boolean;
  private _skipable: boolean;

  private roundInfo: RoundInfo;

  private won: number;

  private errorMessage: string;

  constructor(private _toBack: ToBackService) {
    this.x = 8;
    this.cells = [];
    this.newCells();
    this.hint = true;
    this.score = [2, 2, 60];
    this.possibles = [false, false];
    this.in_charge = [true, false];
    this.won = 0;
    this._toBack.startGame(this.x, 1, 0)
      .subscribe(
        (value) => this.newRound(value),

        error => this.errorMessage = <any>error,

        () => {
        }
      );
  }

  newGame(x: number, variant: number, beginner: number){
    this.x = x;
    this.newCells();
    this.hint = true;
    this._toBack.newPvp(this.x, variant, beginner)
      .subscribe(
        (value) => this.newRound(value),

        error => this.errorMessage = <any>error,

        () => {
        }
      );
  }

  endRound(row: number, col: number) {
    this._toBack.endRound(row, col)
      .subscribe(
        (value) => this.newRound(value),

        error => this.errorMessage = <any>error,

        () => {
        }
      );
  }

  skipRound() {
    this._toBack.doAction(true, false)
      .subscribe(
        (value) => this.newRound(value),

        error => this.errorMessage = <any>error,

        () => {
        }
      );
  }

  undoRound() {
    this._toBack.doAction(false, true)
      .subscribe(
        (value) => this.newRound(value),

        error => this.errorMessage = <any>error,

        () => {
        }
      );
  }

  newRound(value: RoundInfo) {


    this.roundInfo = value;
    this.in_charge = this.roundInfo.in_charge;
    this.possible = this.roundInfo.possible;
    this.possibles = this.roundInfo.possibles;
    this._skipable = this.possibles[0];
    this.round = this.roundInfo.round;
    this.score = this.roundInfo.score;
    this._undoable = this.roundInfo.undoable;
    this.won = this.roundInfo.won;

    this.showCourt();
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

  get skipable(): boolean {
    return this._skipable;
  }

  get undoable(): boolean {
    return !this._undoable;
  }

  getCells(){
    return this.cells;
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

  getHint(){
    return this.hint;
  }

  switchHint(){
    this.hint = !this.hint;
  }

  checkWin(){
    if (this.won != 0) {
      this.possibles[0] = true;
      this._undoable = false;
      this._skipable = true;

      switch (this.won)
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
