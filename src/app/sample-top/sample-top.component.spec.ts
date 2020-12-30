import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleTopComponent } from './sample-top.component';

describe('SampleTopComponent', () => {
  let component: SampleTopComponent;
  let fixture: ComponentFixture<SampleTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
