import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewComponent2Component } from './new-component2.component';

describe('NewComponent2Component', () => {
  let component: NewComponent2Component;
  let fixture: ComponentFixture<NewComponent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewComponent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
