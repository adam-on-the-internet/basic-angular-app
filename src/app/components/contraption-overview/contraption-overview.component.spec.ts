import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ContraptionOverviewComponent } from "./contraption-overview.component";

describe("ContraptionOverviewComponent", () => {
  let component: ContraptionOverviewComponent;
  let fixture: ComponentFixture<ContraptionOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContraptionOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContraptionOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
