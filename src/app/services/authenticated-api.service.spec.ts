import { TestBed } from '@angular/core/testing';

import { AuthenticatedApiService } from './authenticated-api.service';

describe('AuthenticatedApiService', () => {
  let service: AuthenticatedApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticatedApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
