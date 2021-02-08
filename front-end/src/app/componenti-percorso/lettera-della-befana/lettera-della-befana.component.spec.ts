import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetteraDellaBefanaComponent } from './lettera-della-befana.component';

describe('LetteraDellaBefanaComponent', () => {
  let component: LetteraDellaBefanaComponent;
  let fixture: ComponentFixture<LetteraDellaBefanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetteraDellaBefanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetteraDellaBefanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
