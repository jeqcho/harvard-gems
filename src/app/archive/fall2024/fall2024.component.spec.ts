import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fall2024Component } from './fall2024.component';

describe('Fall2024Component', () => {
  let component: Fall2024Component;
  let fixture: ComponentFixture<Fall2024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fall2024Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fall2024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
