import { Component, OnInit } from '@angular/core';
import {DisplayService} from 'app/display.service';

@Component({
  selector: 'menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  showNewMenu: boolean;
  constructor(private _display: DisplayService) {
    this.showNewMenu = false;
  }

  newMenu(){
    this.showNewMenu = !this.showNewMenu;
  }

  pvpMenu(){
  }

  pvcMenu(){

  }

  ngOnInit() {
  }

}
