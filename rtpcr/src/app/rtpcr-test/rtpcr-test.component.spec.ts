import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtpcrTestComponent } from './rtpcr-test.component';

describe('RtpcrTestComponent', () => {
  let component: RtpcrTestComponent;
  let fixture: ComponentFixture<RtpcrTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtpcrTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RtpcrTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
