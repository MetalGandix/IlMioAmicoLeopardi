import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoesiaSpecificaComponent } from './poesia-specifica.component';

describe('PoesiaSpecificaComponent', () => {
  let component: PoesiaSpecificaComponent;
  let fixture: ComponentFixture<PoesiaSpecificaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoesiaSpecificaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoesiaSpecificaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
