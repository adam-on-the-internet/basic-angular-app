import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DoodadFormComponent } from "./doodad-form.component";

describe("DoodadFormComponent", () => {
  let component: DoodadFormComponent;
  let fixture: ComponentFixture<DoodadFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoodadFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoodadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
