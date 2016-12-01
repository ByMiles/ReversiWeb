import {Component, OnInit} from "@angular/core";
import {ToFrontService} from "app/services/toFront.service";

@Component({
  selector: 'menubar',
  templateUrl: 'menubar.component.html',
  styleUrls: ['menubar.component.scss']
})
export class MenubarComponent implements OnInit {

  private courtsize: number;
  private variant: number;
  private beginner: number;

  private choosen_courtsize: string;
  private choosen_variant: string;
  private choosen_beginner: string;

  constructor(private _toFront: ToFrontService) {
    this.setCourtsize(8);
    this.setVariant(1);
    this.setBeginner(0);

  }

  ngOnInit() {
  }

  setCourtsize(courtsize: number) {
    this.courtsize = courtsize;
    this.choosen_courtsize = this.courtsize + " x " + this.courtsize;
  }

  setVariant(variant: number) {
    this.variant = variant;
    this.choosen_variant = "Variante " + this.variant;
  }

  setBeginner(beginner: number) {
    this.beginner = beginner;
    beginner = this.beginner + 1;
    this.choosen_beginner = "Spieler " + beginner;
  }

  newPvP() {
    this._toFront.newGame(this.courtsize, this.variant, this.beginner)
  }

  switchHint() {
    this._toFront.switchHint();
  }
}
