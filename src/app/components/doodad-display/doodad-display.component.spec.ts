import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoodadDisplayComponent } from './doodad-display.component';

describe('DoodadDisplayComponent', () => {
  let component: DoodadDisplayComponent;
  let fixture: ComponentFixture<DoodadDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoodadDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoodadDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
