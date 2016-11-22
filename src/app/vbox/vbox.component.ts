import { Component, OnInit } from '@angular/core';
import { DisplayService } from 'app/display.service';
import {CourtInfo} from 'app/courtinfo';

@Component({
  selector: 'vbox',
  templateUrl: './vbox.component.html',
  styleUrls: ['./vbox.component.css'],
})
export class VboxComponent implements OnInit {

  display: DisplayService;

  constructor() {
    this.display = new DisplayService(new CourtInfo(8));
  }

  ngOnInit() {
  }

}
