import { TestBed } from '@angular/core/testing';

import { GestioneUtenteService } from './gestione-utente.service';

describe('GestioneUtenteService', () => {
  let service: GestioneUtenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestioneUtenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
