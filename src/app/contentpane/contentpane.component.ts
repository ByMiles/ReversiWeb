import { Component, OnInit, Input } from '@angular/core';
import { DisplayService } from 'app/display.service'

@Component({
  selector: 'contentpane',
  templateUrl: './contentpane.component.html',
  styleUrls: ['./contentpane.component.css'],
  providers: [DisplayService]
})
export class ContentpaneComponent implements OnInit {

  @Input() display: DisplayService;

  constructor() { }

  ngOnInit() {
  }

}
