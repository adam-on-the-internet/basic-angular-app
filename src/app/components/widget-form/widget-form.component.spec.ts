import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WidgetFormComponent } from "./widget-form.component";
import { RouterTestingModule } from "@angular/router/testing";

describe("WidgetFormComponent", () => {
  let component: WidgetFormComponent;
  let fixture: ComponentFixture<WidgetFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WidgetFormComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
