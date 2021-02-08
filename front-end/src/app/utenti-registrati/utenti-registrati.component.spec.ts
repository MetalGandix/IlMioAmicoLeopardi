import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtentiRegistratiComponent } from './utenti-registrati.component';

describe('UtentiRegistratiComponent', () => {
  let component: UtentiRegistratiComponent;
  let fixture: ComponentFixture<UtentiRegistratiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtentiRegistratiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtentiRegistratiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
