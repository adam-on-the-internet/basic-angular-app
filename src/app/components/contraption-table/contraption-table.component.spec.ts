import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ContraptionTableComponent } from "./contraption-table.component";

describe("ContraptionTableComponent", () => {
  let component: ContraptionTableComponent;
  let fixture: ComponentFixture<ContraptionTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContraptionTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContraptionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
