import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AJAXCallComponent } from './ajax-call.component';

describe('AJAXCallComponent', () => {
  let component: AJAXCallComponent;
  let fixture: ComponentFixture<AJAXCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AJAXCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AJAXCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
