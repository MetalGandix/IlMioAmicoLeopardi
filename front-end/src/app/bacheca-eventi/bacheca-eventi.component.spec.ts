import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BachecaEventiComponent } from './bacheca-eventi.component';

describe('BachecaEventiComponent', () => {
  let component: BachecaEventiComponent;
  let fixture: ComponentFixture<BachecaEventiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BachecaEventiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BachecaEventiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
