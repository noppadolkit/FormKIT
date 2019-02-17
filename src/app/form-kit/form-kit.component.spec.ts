import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormKITComponent } from './form-kit.component';

describe('FormKITComponent', () => {
  let component: FormKITComponent;
  let fixture: ComponentFixture<FormKITComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormKITComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormKITComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
