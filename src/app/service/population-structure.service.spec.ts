import { TestBed, inject } from '@angular/core/testing';

import { PopulationStructureService } from './population-structure.service';

describe('PopulationStructureService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PopulationStructureService]
    });
  });

  it('should be created', inject([PopulationStructureService], (service: PopulationStructureService) => {
    expect(service).toBeTruthy();
  }));
});
