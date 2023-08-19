import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lazyloaded2Component } from './lazyloaded2.component';

describe('Lazyloaded2Component', () => {
  let component: Lazyloaded2Component;
  let fixture: ComponentFixture<Lazyloaded2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Lazyloaded2Component]
    });
    fixture = TestBed.createComponent(Lazyloaded2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
