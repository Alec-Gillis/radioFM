import { TestBed } from '@angular/core/testing';

import { SpotifyGeneralService } from './spotify-general.service';

describe('SpotifyGeneralService', () => {
  let service: SpotifyGeneralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpotifyGeneralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
