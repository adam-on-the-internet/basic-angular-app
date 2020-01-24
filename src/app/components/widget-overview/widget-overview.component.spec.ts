import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WidgetOverviewComponent } from "./widget-overview.component";
import { WidgetDisplayComponent } from "../widget-display/widget-display.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("WidgetOverviewComponent", () => {
  let component: WidgetOverviewComponent;
  let fixture: ComponentFixture<WidgetOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WidgetOverviewComponent, WidgetDisplayComponent],
      imports: [HttpClientTestingModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
