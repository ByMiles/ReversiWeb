import { Injectable } from '@angular/core';


@Injectable()
export class RulesService {

  stats : Rules.Stats;

  private in_charge : boolean[];

  private possible : boolean[][];

  private possibles : boolean[];

  private round : boolean[][][];

  private undo : boolean;

  private x : number;

  constructor(x : number, letiation : number, beginns : number) {
    this.x = x;
    this.possibles = [false, true];
    this.round = <any> (function(dims) { let allocate = function(dims) { if(dims.length==0) { return undefined; } else { let array = []; for(let i = 0; i < dims[0]; i++) { array.push(allocate(dims.slice(1))); } return array; }}; return allocate(dims);})([x, x, 2]);
    this.undo = true;

    for(let row: number = 0; row < this.x; row++ ){
      for(let col: number = 0; col < this.x; col++){
        this.round[row][col][0] = false;
        this.round[row][col][1] = false;
      }
    }

    switch((letiation)) {
      case 2:
        this.round[(x / 2|0) - 1][(x / 2|0) - 1][0] = true;
        this.round[(x / 2|0) - 1][(x / 2|0)][1] = true;
        this.round[(x / 2|0)][(x / 2|0) - 1][1] = true;
        this.round[(x / 2|0)][(x / 2|0)][0] = true;
        break;
      case 3:
        this.round[(x / 2|0) - 1][(x / 2|0) - 1][1] = true;
        this.round[(x / 2|0) - 1][(x / 2|0)][0] = true;
        this.round[(x / 2|0)][(x / 2|0) - 1][1] = true;
        this.round[(x / 2|0)][(x / 2|0)][0] = true;
        break;
      default:
        this.round[(x / 2|0) - 1][(x / 2|0) - 1][1] = true;
        this.round[(x / 2|0) - 1][(x / 2|0)][1] = true;
        this.round[(x / 2|0)][(x / 2|0) - 1][0] = true;
        this.round[(x / 2|0)][(x / 2|0)][0] = true;
    }
    this.in_charge = [false, false];
    this.in_charge[beginns] = true;
    this.stats = new Rules.Stats(this, x, this.round);
  }

  getRound() : boolean[][][] {
    return this.round;
  }

  getPossible() : boolean[][] {
    return this.possible;
  }

  getPossibles() : boolean[] {
    return this.possibles;
  }

  getIn_charge() : boolean[] {
    return this.in_charge;
  }

  newRound() {
    this.round = this.stats.getCurrentRound();
    this.showPossible();
  }

  showPossible() {
    if(!this.possibles[0]) this.possibles[1] = false;
    this.possibles[0] = false;
    this.possible = <any> (function(dims) { let allocate = function(dims) { if(dims.length==0) { return undefined; } else { let array = []; for(let i = 0; i < dims[0]; i++) { array.push(allocate(dims.slice(1))); } return array; }}; return allocate(dims);})([this.x, this.x]);
    for(let row : number = 0; row < this.x; row++) {
      for(let col : number = 0; col < this.x; col++) {
        if(!this.round[row][col][0] && !this.round[row][col][1]) {
          for(let row_change : number = -1; row_change <= 1; row_change++) {
            for(let col_change : number = -1; col_change <= 1; col_change++) {
              if(this.checkPossible(row, col, row_change, col_change)) this.possibles[0] = true;
            }
          }
        }
      }
    }
    if(this.possibles[0]) {
      this.possibles[1] = true;
    }
  }

  checkPossible(row : number, col : number, row_change : number, col_change : number) : boolean {
    let new_row : number = row + row_change;
    let new_col : number = col + col_change;
    if(new_row !== -1 && new_row !== this.x && new_col !== -1 && new_col !== this.x) {
      if(this.round[new_row][new_col][0] !== this.in_charge[0] && this.round[new_row][new_col][1] !== this.in_charge[1]) {
        new_row += row_change;
        new_col += col_change;
        while((new_row !== -1 && new_row !== this.x && new_col !== -1 && new_col !== this.x)){
          if(!this.round[new_row][new_col][0] && !this.round[new_row][new_col][1]) {
            return false;
          }
          if(this.round[new_row][new_col][0] === this.in_charge[0] && this.round[new_row][new_col][1] === this.in_charge[1]) {
            this.possible[row][col] = true;
            return true;
          }
          new_row += row_change;
          new_col += col_change;
        }
      }
    }
    return false;
  }

  checkWin() : boolean {
    return ((!this.possibles[0] && !this.possibles[1]) || this.stats.getEmptySum() === 0);
  }

  endRound(row : number, col : number) {
    this.round[row][col][0] = this.in_charge[0];
    this.round[row][col][1] = this.in_charge[1];
    this.switchCoins(row, col);
    this.stats.addNextRound(this.round);
    this.switchPlayer();
    this.undo = false;
  }

  switchPlayer() {
    this.in_charge[0] = !this.in_charge[0];
    this.in_charge[1] = !this.in_charge[1];
  }

  switchCoins(row : number, col : number) {
    for(let row_change : number = -1; row_change <= 1; row_change++) {
      for(let col_change : number = -1; col_change <= 1; col_change++) {
        this.checkCoins(row, col, row_change, col_change);
      }
    }
  }

  checkCoins(row : number, col : number, row_change : number, col_change : number) {
    let new_row : number = row + row_change;
    let new_col : number = col + col_change;
    if(new_row !== -1 && new_row !== this.x && new_col !== -1 && new_col !== this.x) {
      let switchies : number[][] = <any> (function(dims) { let allocate = function(dims) { if(dims.length==0) { return undefined; } else { let array = []; for(let i = 0; i < dims[0]; i++) { array.push(allocate(dims.slice(1))); } return array; }}; return allocate(dims);})([this.x - 1, 2]);
      let switched : number = 0;
      if(this.round[new_row][new_col][0] !== this.in_charge[0] && this.round[new_row][new_col][1] !== this.in_charge[1]) {
        while((new_row !== -1 && new_row !== this.x && new_col !== -1 && new_col !== this.x)){
          if(!this.round[new_row][new_col][0] && !this.round[new_row][new_col][1]) {
            return;
          }
          if(this.round[new_row][new_col][0] !== this.in_charge[0] && this.round[new_row][new_col][1] !== this.in_charge[1]) {
            switchies[switched][0] = new_row;
            switchies[switched][1] = new_col;
            switched++;
          }
          if(this.round[new_row][new_col][0] === this.in_charge[0] && this.round[new_row][new_col][1] === this.in_charge[1]) {
            for(let k : number = 0; k < switched; k++) {
              this.round[switchies[k][0]][switchies[k][1]][0] = !this.round[switchies[k][0]][switchies[k][1]][0];
              this.round[switchies[k][0]][switchies[k][1]][1] = !this.round[switchies[k][0]][switchies[k][1]][1];
            }
            return;
          }
          new_row += row_change;
          new_col += col_change;
        }
      }
    }
  }

  skipRound() {
    this.stats.addNextRound(this.round);
    this.switchPlayer();
  }

  undoRound(){
    this.stats.undoRound();
    this.switchPlayer();
    this.undo = (this.stats.getCurrent() == 0);
  }

  gameOver() : number {
    this.undo = true;
    if(this.stats.getP1Sum() > this.stats.getP2Sum()) return 1;
    if(this.stats.getP1Sum() < this.stats.getP2Sum()) return 2;
    return 3;
  }

  undoable() : boolean{
    return this.undo;
  }
}

export namespace Rules {

  export class Stats {
    public __parent: any;
    x : number;

    current : number;

    rounds : boolean[][][][];

    sums : number[];

    constructor(__parent: any, x : number, start_up : boolean[][][]) {
      this.__parent = __parent;
      this.x = 0;
      this.current = 0;
      this.x = x;
      this.current = 0;
      this.rounds = [];
      this.beginn(start_up);
    }

    beginn(start_up : boolean[][][]) {
      this.rounds.push(start_up);
    }

    getCurrentRound() : boolean[][][] {
      let round : boolean[][][] = <any> (function(dims) { let allocate = function(dims) { if(dims.length==0) { return undefined; } else { let array = []; for(let i = 0; i < dims[0]; i++) { array.push(allocate(dims.slice(1))); } return array; }}; return allocate(dims);})([this.x, this.x, 2]);
      for(let i : number = 0; i < this.x; i++) {
        for(let j : number = 0; j < this.x; j++) {
          round[i][j][0] = this.rounds[this.current][i][j][0];
          round[i][j][1] = this.rounds[this.current][i][j][1];
        }
      }
      this.calcSums();
      return round;
    }

    addNextRound(round : boolean[][][]) {
      this.rounds.push(round);
      this.current++;
    }

    undoRound() : boolean {
      if(this.current === 0) return false;
      this.rounds.splice(this.current,1);
      this.current--;
      return true;
    }

    getCurrent() : number {
      return this.current;
    }

    calcSums() {
      this.sums = [0, 0, 0];
      for(let i : number = 0; i < this.x; i++) {
        for(let j : number = 0; j < this.x; j++) {
          if(this.rounds[this.current][i][j][0] && !this.rounds[this.current][i][j][1]) this.sums[0]++; else if(this.rounds[this.current][i][j][1] && !this.rounds[this.current][i][j][0]) this.sums[1]++; else this.sums[2]++;
        }
      }
    }

    getP1Sum() : number {
      return this.sums[0];
    }

    getP2Sum() : number {
      return this.sums[1];
    }

    getEmptySum() : number {
      return this.sums[2];
    }

  }
}


