import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'titlebar',
  templateUrl: 'titlebar.component.html',
  styleUrls: ['titlebar.component.scss']
})
export class TitlebarComponent implements OnInit {
  title = 'Reversi';

  constructor() { }

  ngOnInit() {
  }

}
