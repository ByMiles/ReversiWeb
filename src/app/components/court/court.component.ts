import {Component, OnInit} from "@angular/core";
import {ToFrontService} from "app/services/toFront.service";

@Component({
  selector: 'court',
  templateUrl: 'court.component.html',
  styleUrls: ['court.component.scss'],
})
export class CourtComponent implements OnInit {

  constructor(private _toFront: ToFrontService) {
  }

  ngOnInit() {
  }

}
