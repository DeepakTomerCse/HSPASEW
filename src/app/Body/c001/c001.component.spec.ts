import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C001Component } from './c001.component';

describe('C001Component', () => {
  let component: C001Component;
  let fixture: ComponentFixture<C001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C001Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
