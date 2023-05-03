import { TestBed } from '@angular/core/testing';

import { DummysService } from './dummys.service';

describe('DummysService', () => {
  let service: DummysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DummysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
