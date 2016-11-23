import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { VboxComponent } from './vbox/vbox.component';
import { MenubarComponent } from './menubar/menubar.component';
import { ContentpaneComponent } from './contentpane/contentpane.component';
import { TitlebarComponent } from './titlebar/titlebar.component';
import { ActionbarComponent } from './actionbar/actionbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CourtComponent } from './court/court.component';
import { CellComponent } from './cell/cell.component';
import { CoinComponent } from './coin/coin.component';

import { DisplayService } from './display.service';

@NgModule({
  declarations: [
    AppComponent,
    VboxComponent,
    MenubarComponent,
    ContentpaneComponent,
    TitlebarComponent,
    ActionbarComponent,
    SidebarComponent,
    CourtComponent,
    CellComponent,
    CoinComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DisplayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
