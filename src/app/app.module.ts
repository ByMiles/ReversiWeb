import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule, JsonpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {MenubarComponent} from "./components/menubar/menubar.component";
import {ContentpaneComponent} from "./components/contentpane/contentpane.component";
import {TitlebarComponent} from "./components/titlebar/titlebar.component";
import {ActionbarComponent} from "./components/actionbar/actionbar.component";
import {CourtComponent} from "./components/court/court.component";
import {CellComponent} from "./components/cell/cell.component";
import {CoinComponent} from "./components/coin/coin.component";
import {ToFrontService} from "./services/toFront.service";
import {ToBackService} from "./services/toBack.service";

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    ContentpaneComponent,
    TitlebarComponent,
    ActionbarComponent,
    CourtComponent,
    CellComponent,
    CoinComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [
    ToFrontService,
    ToBackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
