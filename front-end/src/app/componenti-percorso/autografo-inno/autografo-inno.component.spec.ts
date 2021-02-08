import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutografoInnoComponent } from './autografo-inno.component';

describe('AutografoInnoComponent', () => {
  let component: AutografoInnoComponent;
  let fixture: ComponentFixture<AutografoInnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutografoInnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutografoInnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
