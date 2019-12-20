import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsFormComponent } from './buttons-form.component';

describe('ButtonsFormComponent', () => {
  let component: ButtonsFormComponent;
  let fixture: ComponentFixture<ButtonsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
