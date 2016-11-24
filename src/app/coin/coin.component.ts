import { Component, OnInit, Input } from '@angular/core';
import { DisplayService } from 'app/display.service';


@Component({
  selector: 'coin',
  templateUrl: './coin.component.html',
  styleUrls: ['coin.component.scss'],
})
export class CoinComponent implements OnInit {

  @Input() score: number;
  constructor(private _display: DisplayService) { }

  ngOnInit() {
  }

}
