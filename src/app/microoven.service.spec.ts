import { TestBed } from '@angular/core/testing';

import { MicroovenService } from './microoven.service';

describe('MicroovenService', () => {
  let service: MicroovenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MicroovenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
