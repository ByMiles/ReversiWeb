/* tslint:disable:no-unused-variable */
import {TestBed, inject} from "@angular/core/testing";
import {ToFrontService} from "./toFront.service";

describe('ToFrontService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToFrontService]
    });
  });

  it('should ...', inject([ToFrontService], (service: ToFrontService) => {
    expect(service).toBeTruthy();
  }));
});
