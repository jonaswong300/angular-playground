import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lazyloaded1Component } from './lazyloaded1.component';

describe('Lazyloaded1Component', () => {
  let component: Lazyloaded1Component;
  let fixture: ComponentFixture<Lazyloaded1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Lazyloaded1Component]
    });
    fixture = TestBed.createComponent(Lazyloaded1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
