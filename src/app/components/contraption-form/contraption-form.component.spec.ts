import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ContraptionFormComponent } from "./contraption-form.component";

describe("ContraptionFormComponent", () => {
  let component: ContraptionFormComponent;
  let fixture: ComponentFixture<ContraptionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContraptionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContraptionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
