import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiesaDeiCappucciniComponent } from './chiesa-dei-cappuccini.component';

describe('ChiesaDeiCappucciniComponent', () => {
  let component: ChiesaDeiCappucciniComponent;
  let fixture: ComponentFixture<ChiesaDeiCappucciniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChiesaDeiCappucciniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiesaDeiCappucciniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
