import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffaComponent } from './tariffa.component';

describe('TariffaComponent', () => {
  let component: TariffaComponent;
  let fixture: ComponentFixture<TariffaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TariffaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TariffaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
