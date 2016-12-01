import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";
import {RoundInfo} from "../modules/roundinfo";
import {RoundAction} from "../modules/roundAction";
import {EndRound} from "../modules/endRound";
import {PvpAction} from "../modules/pvpAction";

@Injectable()
export class ToBackService {

  private startURL = 'http://localhost:8080/Reversi/start';
  private actionURL = 'http://localhost:8080/Reversi/action';
  private endRoundURL = 'http://localhost:8080/Reversi/endRound';
  private newPvpURL = 'http://localhost:8080/Reversi/newPvp';

  constructor(private http: Http) {
  }

  public startGame(x: number, variation: number, beginner: number): Observable<RoundInfo> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    let newPvp = new PvpAction(x, variation, beginner);
    let body = JSON.stringify(newPvp);

    return this.http.post(this.startURL, body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  public newPvp(x: number, variation: number, beginner: number): Observable<RoundInfo> {

    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    let newPvp = new PvpAction(x, variation, beginner);
    let body = JSON.stringify(newPvp);
    console.log(body);

    return this.http.post(this.newPvpURL, body, options)
      .map(this.extractData)
      .catch(this.handleError);

  }

  public endRound(row: number, col: number): Observable<RoundInfo> {

    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    let endRound = new EndRound(row, col);
    let body = JSON.stringify(endRound);

    return this.http.post(this.endRoundURL, body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  public doAction(skipable: boolean, undoable: boolean): Observable<RoundInfo> {

    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    let roundAction = new RoundAction(skipable, undoable);
    let body = JSON.stringify(roundAction);

    return this.http.post(this.actionURL, body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body;

  }

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }


}
