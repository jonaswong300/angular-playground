import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lazyloaded3Component } from './lazyloaded3.component';

describe('Lazyloaded3Component', () => {
  let component: Lazyloaded3Component;
  let fixture: ComponentFixture<Lazyloaded3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Lazyloaded3Component]
    });
    fixture = TestBed.createComponent(Lazyloaded3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
