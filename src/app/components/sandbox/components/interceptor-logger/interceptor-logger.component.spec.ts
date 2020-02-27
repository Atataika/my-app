import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterceptorLoggerComponent } from './interceptor-logger.component';

describe('InterceptorLoggerComponent', () => {
  let component: InterceptorLoggerComponent;
  let fixture: ComponentFixture<InterceptorLoggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterceptorLoggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterceptorLoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
