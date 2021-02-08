import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiazzuolaSabatoDelVillaggioComponent } from './piazzuola-sabato-del-villaggio.component';

describe('PiazzuolaSabatoDelVillaggioComponent', () => {
  let component: PiazzuolaSabatoDelVillaggioComponent;
  let fixture: ComponentFixture<PiazzuolaSabatoDelVillaggioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiazzuolaSabatoDelVillaggioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiazzuolaSabatoDelVillaggioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
