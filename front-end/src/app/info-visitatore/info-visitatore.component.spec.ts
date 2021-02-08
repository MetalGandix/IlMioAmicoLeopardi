import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoVisitatoreComponent } from './info-visitatore.component';

describe('InfoVisitatoreComponent', () => {
  let component: InfoVisitatoreComponent;
  let fixture: ComponentFixture<InfoVisitatoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoVisitatoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoVisitatoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
