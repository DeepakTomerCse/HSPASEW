import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C003Component } from './c003.component';

describe('C003Component', () => {
  let component: C003Component;
  let fixture: ComponentFixture<C003Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C003Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
