import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaMontiAzzurriComponent } from './vista-monti-azzurri.component';

describe('VistaMontiAzzurriComponent', () => {
  let component: VistaMontiAzzurriComponent;
  let fixture: ComponentFixture<VistaMontiAzzurriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaMontiAzzurriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaMontiAzzurriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
