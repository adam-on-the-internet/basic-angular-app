import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DoodadOverviewComponent } from "./doodad-overview.component";

describe("DoodadOverviewComponent", () => {
  let component: DoodadOverviewComponent;
  let fixture: ComponentFixture<DoodadOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoodadOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoodadOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
