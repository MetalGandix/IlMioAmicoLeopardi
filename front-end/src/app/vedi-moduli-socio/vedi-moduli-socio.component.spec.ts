import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VediModuliSocioComponent } from './vedi-moduli-socio.component';

describe('VediModuliSocioComponent', () => {
  let component: VediModuliSocioComponent;
  let fixture: ComponentFixture<VediModuliSocioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VediModuliSocioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VediModuliSocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
