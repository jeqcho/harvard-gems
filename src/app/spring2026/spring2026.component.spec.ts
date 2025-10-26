import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spring2026Component } from './spring2026.component';

describe('Spring2026Component', () => {
  let component: Spring2026Component;
  let fixture: ComponentFixture<Spring2026Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Spring2026Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Spring2026Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
