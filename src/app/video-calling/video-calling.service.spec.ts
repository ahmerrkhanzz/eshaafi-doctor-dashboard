import { TestBed } from '@angular/core/testing';

import { VideoCallingService } from './video-calling.service';

describe('VideoCallingService', () => {
  let service: VideoCallingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoCallingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
