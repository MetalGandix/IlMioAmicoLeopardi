import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostraPoesiaComponent } from './mostra-poesia.component';

describe('MostraPoesiaComponent', () => {
  let component: MostraPoesiaComponent;
  let fixture: ComponentFixture<MostraPoesiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostraPoesiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostraPoesiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
