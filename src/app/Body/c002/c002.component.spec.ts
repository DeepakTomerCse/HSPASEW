import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C002Component } from './c002.component';

describe('C002Component', () => {
  let component: C002Component;
  let fixture: ComponentFixture<C002Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C002Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
