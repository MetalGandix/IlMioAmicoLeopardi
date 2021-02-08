import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IlColleDellInfinitoComponent } from './il-colle-dell-infinito.component';

describe('IlColleDellInfinitoComponent', () => {
  let component: IlColleDellInfinitoComponent;
  let fixture: ComponentFixture<IlColleDellInfinitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IlColleDellInfinitoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IlColleDellInfinitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
