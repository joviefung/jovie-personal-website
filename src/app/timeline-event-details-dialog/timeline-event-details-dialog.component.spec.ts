import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineEventDetailsDialogComponent } from './timeline-event-details-dialog.component';

describe('TimelineEventDetailsDialogComponent', () => {
  let component: TimelineEventDetailsDialogComponent;
  let fixture: ComponentFixture<TimelineEventDetailsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineEventDetailsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineEventDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
