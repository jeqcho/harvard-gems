import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spring2023Component } from './spring2023.component';

describe('Spring2023Component', () => {
  let component: Spring2023Component;
  let fixture: ComponentFixture<Spring2023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Spring2023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Spring2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
