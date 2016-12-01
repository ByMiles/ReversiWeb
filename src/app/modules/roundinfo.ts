export class RoundInfo {

  constructor(private _round: boolean[][][], private _possible: boolean[][], private _possibles: boolean[], private _in_charge: boolean[], private _score: number[], private _undoable: boolean, private _won: number) {
    console.log(this._round);
  }

  get round(): boolean[][][] {
    return this._round;
  }

  get possible(): boolean[][] {
    return this._possible;
  }

  get possibles(): boolean[] {
    return this._possibles;
  }

  get in_charge(): boolean[] {
    return this._in_charge;
  }

  get score(): number[] {
    return this._score;
  }

  get undoable(): boolean {
    return this._undoable;
  }

  get won(): number {
    return this._won;
  }
}
