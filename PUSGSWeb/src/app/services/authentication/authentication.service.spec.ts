import { TestBed } from '@angular/core/testing';

import { AuthenticatService } from './authentication.service';

describe('AuthenticatService', () => {
  let service: AuthenticatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
