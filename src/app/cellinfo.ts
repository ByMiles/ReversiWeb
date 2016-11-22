
export class CellInfo{
  row: number;
  col: number;
  state: number;

  constructor(row: number, col: number, state: number)
  {
    this.row = row;
    this.col = col;
    this.state = state;
  }

  setState(state:number){
    this.state = state;
  }

  getState(){
    return this.state;
  }
}
