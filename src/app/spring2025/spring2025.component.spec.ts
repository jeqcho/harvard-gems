import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spring2025Component } from './spring2025.component';

describe('Spring2025Component', () => {
  let component: Spring2025Component;
  let fixture: ComponentFixture<Spring2025Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Spring2025Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Spring2025Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
