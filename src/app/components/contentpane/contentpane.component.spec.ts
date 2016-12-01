/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {ContentpaneComponent} from "./contentpane.component";

describe('ContentpaneComponent', () => {
  let component: ContentpaneComponent;
  let fixture: ComponentFixture<ContentpaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentpaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentpaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
