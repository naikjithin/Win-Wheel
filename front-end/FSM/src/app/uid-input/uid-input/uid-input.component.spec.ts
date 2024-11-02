import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UidInputComponent } from './uid-input.component';

describe('UidInputComponent', () => {
  let component: UidInputComponent;
  let fixture: ComponentFixture<UidInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UidInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UidInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
