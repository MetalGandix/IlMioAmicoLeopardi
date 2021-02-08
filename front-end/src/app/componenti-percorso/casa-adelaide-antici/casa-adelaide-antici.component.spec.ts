import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaAdelaideAnticiComponent } from './casa-adelaide-antici.component';

describe('CasaAdelaideAnticiComponent', () => {
  let component: CasaAdelaideAnticiComponent;
  let fixture: ComponentFixture<CasaAdelaideAnticiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasaAdelaideAnticiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasaAdelaideAnticiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
