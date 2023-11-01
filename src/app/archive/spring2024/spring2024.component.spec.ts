import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spring2024Component } from './spring2024.component';

describe('Spring2024Component', () => {
  let component: Spring2024Component;
  let fixture: ComponentFixture<Spring2024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Spring2024Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Spring2024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
