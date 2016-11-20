import { Cell } from './court.cells';

export class CourtCourt{
  private _cells: Cell[];
  constructor(_x: number){
    this._cells = new Cell[_x];
    for (let row: number = 0; row < _x; row++) {
  this._cells[row] = new Cell[_x];
  for (let col: number = 0; col < _x; col++) {
    this._cells[row][col] = new Cell(row, col, [false, false, false])
  }
}
  }

  getStats(row: number, col: number){
    return this._cells[row][col].getStats();
  }
  getCells() {
    return this._cells;
  }
}
