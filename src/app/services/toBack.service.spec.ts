/* tslint:disable:no-unused-variable */
import {TestBed, inject} from "@angular/core/testing";
import {ToBackService} from "./toBack.service";

describe('ToBackService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToBackService]
    });
  });

  it('should ...', inject([ToBackService], (service: ToBackService) => {
    expect(service).toBeTruthy();
  }));
});
