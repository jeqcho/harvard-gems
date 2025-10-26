import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fall2025Component } from './fall2025.component';

describe('Fall2025Component', () => {
  let component: Fall2025Component;
  let fixture: ComponentFixture<Fall2025Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fall2025Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fall2025Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
