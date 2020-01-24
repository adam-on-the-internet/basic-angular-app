import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DoodadOverviewComponent } from "./doodad-overview.component";
import { DoodadDisplayComponent } from "../doodad-display/doodad-display.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("DoodadOverviewComponent", () => {
  let component: DoodadOverviewComponent;
  let fixture: ComponentFixture<DoodadOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DoodadOverviewComponent, DoodadDisplayComponent],
      imports: [HttpClientTestingModule],
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
