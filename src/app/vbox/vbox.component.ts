import { Component, OnInit } from '@angular/core';
import { DisplayService } from 'app/display.service';

@Component({
  selector: 'vbox',
  templateUrl: './vbox.component.html',
  styleUrls: ['./vbox.component.css'],
})
export class VboxComponent implements OnInit {

  constructor(private _display: DisplayService) {}

  ngOnInit() {
  }

}
