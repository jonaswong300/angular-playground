import { TestBed } from '@angular/core/testing';

import { MockRouterService } from './mock-router.service';

describe('MockServerService', () => {
  let service: MockRouterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockRouterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
