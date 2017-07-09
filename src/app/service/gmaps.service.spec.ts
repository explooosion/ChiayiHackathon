import { TestBed, inject } from '@angular/core/testing';

import { GMapsService } from './gmaps.service';

describe('GMapsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GMapsService]
    });
  });

  it('should be created', inject([GMapsService], (service: GMapsService) => {
    expect(service).toBeTruthy();
  }));
});
