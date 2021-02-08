import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaLeopardiComponent } from './casa-leopardi.component';

describe('CasaLeopardiComponent', () => {
  let component: CasaLeopardiComponent;
  let fixture: ComponentFixture<CasaLeopardiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasaLeopardiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasaLeopardiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
