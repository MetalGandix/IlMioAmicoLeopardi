import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalazzoVenieriComponent } from './palazzo-venieri.component';

describe('PalazzoVenieriComponent', () => {
  let component: PalazzoVenieriComponent;
  let fixture: ComponentFixture<PalazzoVenieriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalazzoVenieriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalazzoVenieriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
