import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorrePasseroSolitarioComponent } from './torre-passero-solitario.component';

describe('TorrePasseroSolitarioComponent', () => {
  let component: TorrePasseroSolitarioComponent;
  let fixture: ComponentFixture<TorrePasseroSolitarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TorrePasseroSolitarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TorrePasseroSolitarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
