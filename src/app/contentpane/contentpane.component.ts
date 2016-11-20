import { Component, OnInit } from '@angular/core';
import { ActionbarComponent } from 'app/actionbar/actionbar.component';
import { SidebarComponent } from 'app/sidebar/sidebar.component';
import { TitlebarComponent } from 'app/titlebar/titlebar.component';
import { CourtComponent } from 'app/court/court.component';

@Component({
  selector: 'contentpane',
  templateUrl: './contentpane.component.html',
  styleUrls: ['./contentpane.component.css']
})
export class ContentpaneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
