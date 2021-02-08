import { TestBed } from '@angular/core/testing';

import { DiventaSocioService } from './diventa-socio.service';

describe('DiventaSocioService', () => {
  let service: DiventaSocioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiventaSocioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
