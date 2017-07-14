import { TestBed, inject } from '@angular/core/testing';

import { YearStructureService } from './year-structure.service';

describe('YearStructureService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YearStructureService]
    });
  });

  it('should be created', inject([YearStructureService], (service: YearStructureService) => {
    expect(service).toBeTruthy();
  }));
});
