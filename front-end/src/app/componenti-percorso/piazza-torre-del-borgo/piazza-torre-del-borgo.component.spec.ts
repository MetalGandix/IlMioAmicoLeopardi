import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiazzaTorreDelBorgoComponent } from './piazza-torre-del-borgo.component';

describe('PiazzaTorreDelBorgoComponent', () => {
  let component: PiazzaTorreDelBorgoComponent;
  let fixture: ComponentFixture<PiazzaTorreDelBorgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiazzaTorreDelBorgoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiazzaTorreDelBorgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
