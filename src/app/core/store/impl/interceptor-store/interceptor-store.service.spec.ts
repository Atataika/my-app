import { TestBed } from '@angular/core/testing';

import { InterceptorStoreService } from './interceptor-store.service';

describe('InterceptorStoreService', () => {
  let service: InterceptorStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterceptorStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
