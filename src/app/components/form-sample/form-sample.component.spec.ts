import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FormSampleComponent } from "./form-sample.component";
import { FormsModule } from "@angular/forms";

describe("FormSampleComponent", () => {
  let component: FormSampleComponent;
  let fixture: ComponentFixture<FormSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormSampleComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
