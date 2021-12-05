import { TestBed } from '@angular/core/testing';

import { LotoService } from './loto.service';

describe('LotoService', () => {
  let service: LotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
