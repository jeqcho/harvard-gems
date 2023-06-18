import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fall2023Component } from './fall2023.component';

describe('Fall2023Component', () => {
  let component: Fall2023Component;
  let fixture: ComponentFixture<Fall2023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fall2023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fall2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
