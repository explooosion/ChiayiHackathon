import { TestBed, inject } from '@angular/core/testing';

import { TempleService } from './temple.service';

describe('TempleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TempleService]
    });
  });

  it('should be created', inject([TempleService], (service: TempleService) => {
    expect(service).toBeTruthy();
  }));
});
