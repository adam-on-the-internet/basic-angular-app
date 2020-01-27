import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WidgetFormComponent } from "./widget-form.component";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe("WidgetFormComponent", () => {
  let component: WidgetFormComponent;
  let fixture: ComponentFixture<WidgetFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WidgetFormComponent],
      imports: [RouterTestingModule, HttpClientTestingModule]
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
