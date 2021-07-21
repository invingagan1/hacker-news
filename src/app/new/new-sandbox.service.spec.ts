import { TestBed } from '@angular/core/testing';

import { NewSandboxService } from './new-sandbox.service';

describe('NewSandboxService', () => {
  let service: NewSandboxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewSandboxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
