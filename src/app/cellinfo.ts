
export class CellInfo{
  row: number;
  col: number;
  stats: boolean[];

  constructor(row: number, col: number, stats: boolean[])
  {
    this.row = row;
    this.col = col;
    this.stats = stats;

  }
}
