import {Component, OnInit, Input} from "@angular/core";


@Component({
  selector: 'coin',
  templateUrl: 'coin.component.html',
  styleUrls: ['coin.component.scss'],
})
export class CoinComponent implements OnInit {

  @Input() score: number;

  constructor() {
  }

  ngOnInit() {
  }

}
