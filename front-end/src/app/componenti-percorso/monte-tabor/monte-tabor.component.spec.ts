import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonteTaborComponent } from './monte-tabor.component';

describe('MonteTaborComponent', () => {
  let component: MonteTaborComponent;
  let fixture: ComponentFixture<MonteTaborComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonteTaborComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonteTaborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
