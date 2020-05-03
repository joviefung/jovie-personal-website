import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TimelineEvent } from '../models/timeline-event';

@Component({
  selector: 'app-timeline-event-details-dialog',
  templateUrl: './timeline-event-details-dialog.component.html',
  styleUrls: ['./timeline-event-details-dialog.component.scss']
})
export class TimelineEventDetailsDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TimelineEventDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public timelineEvent: TimelineEvent
  ) {
  }

  ngOnInit() {
  }
}
