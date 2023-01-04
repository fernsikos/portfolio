import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendEmailSuccessComponent } from './send-email-success.component';

describe('SendEmailSuccessComponent', () => {
  let component: SendEmailSuccessComponent;
  let fixture: ComponentFixture<SendEmailSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendEmailSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendEmailSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
