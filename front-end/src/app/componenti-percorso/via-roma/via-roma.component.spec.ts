import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViaRomaComponent } from './via-roma.component';

describe('ViaRomaComponent', () => {
  let component: ViaRomaComponent;
  let fixture: ComponentFixture<ViaRomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViaRomaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViaRomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
