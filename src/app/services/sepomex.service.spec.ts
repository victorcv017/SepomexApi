import { TestBed, inject } from '@angular/core/testing';

import { SepomexService } from './sepomex.service';

describe('SepomexService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SepomexService]
    });
  });

  it('should be created', inject([SepomexService], (service: SepomexService) => {
    expect(service).toBeTruthy();
  }));
});
