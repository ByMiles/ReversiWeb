import { CellInfo } from './cellinfo';

export class CourtInfo{
  x: number;
  public cells: CellInfo[];

  constructor(x: number){
    this.x = x;
    this.cells = new CellInfo[x];
    for(let row: number = 0; row < x; row++)
    {
      this.cells[row] = new CellInfo[x];
      for(let col: number = 0; col < x; col++){
        this.cells[row][col] = new CellInfo(row, col, [false, false, false])
      }
    }
  }
}
