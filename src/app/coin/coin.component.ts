import { Component, OnInit, Input } from '@angular/core';
import { DisplayService } from 'app/display.service';


@Component({
  selector: 'coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.css'],
  providers: [DisplayService]
})
export class CoinComponent implements OnInit {

  @Input() display: DisplayService;
  @Input() score: number;
  constructor() { }

  ngOnInit() {
  }

}
