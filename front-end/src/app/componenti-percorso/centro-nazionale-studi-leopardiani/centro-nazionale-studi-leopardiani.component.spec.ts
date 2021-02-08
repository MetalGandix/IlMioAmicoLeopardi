import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroNazionaleStudiLeopardianiComponent } from './centro-nazionale-studi-leopardiani.component';

describe('CentroNazionaleStudiLeopardianiComponent', () => {
  let component: CentroNazionaleStudiLeopardianiComponent;
  let fixture: ComponentFixture<CentroNazionaleStudiLeopardianiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentroNazionaleStudiLeopardianiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentroNazionaleStudiLeopardianiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
