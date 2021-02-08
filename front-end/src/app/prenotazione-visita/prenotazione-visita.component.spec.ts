import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrenotazioneVisitaComponent } from './prenotazione-visita.component';

describe('PrenotazioneVisitaComponent', () => {
  let component: PrenotazioneVisitaComponent;
  let fixture: ComponentFixture<PrenotazioneVisitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrenotazioneVisitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrenotazioneVisitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
