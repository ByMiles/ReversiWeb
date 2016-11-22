import { CellInfo } from './cellinfo';

export class CourtInfo{
  x: number;
  public cells;

  constructor(x: number){
    this.x = x;
    this.cells = [];
    for(let row: number = 0; row < x; row++)
    {
      this.cells[row] = [];
      for(let col: number = 0; col < x; col++){
        this.cells[row][col] = new CellInfo(row, col, 0)
      }
    }
  }
}
