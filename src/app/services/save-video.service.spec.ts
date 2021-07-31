import { TestBed } from '@angular/core/testing';

import { SaveVideoService } from './save-video.service';

describe('SaveVideoService', () => {
  let service: SaveVideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveVideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
