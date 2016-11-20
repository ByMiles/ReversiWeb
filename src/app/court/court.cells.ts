export class Cell{
  constructor(private _row: number, private _col: number, private _stats: boolean[])
  {}

  getStats(){
    return this._stats;
  }
  setStats(stats: boolean[]){
    this._stats = stats;
  }
  getRow(){
    return this._row;
  }
  getCol(){
    return this._col;
  }
}
