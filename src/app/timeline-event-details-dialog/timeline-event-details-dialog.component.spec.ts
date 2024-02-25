import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TimelineEventDetailsDialogComponent } from './timeline-event-details-dialog.component';
import { TimelineEvent } from '../../models/timeline-event';

describe('TimelineEventDetailsDialogComponent', () => {
  let component: TimelineEventDetailsDialogComponent;
  let fixture: ComponentFixture<TimelineEventDetailsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineEventDetailsDialogComponent ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: new TimelineEvent({
          logo: './assets/snagr.png',
          employer: 'SnagR',
          title: 'Front-end web developer',
          type: 'Full time',
          startDate: new Date(2017, 11),
          endDate: new Date(),
          website: 'https://rdrive.io/',
          teamSize: 6,
          works: [
            'SnagR version 5 web application using Vue.js, Vuex and Vuetify',
            'UX/UI design for Snagr version 5 web application',
            'Web application CD/CI using Azure DevOps',
            'Email notifications using Azure Function in C# and Amazon SES',
            'Periodic reports using Azure Logic App'
          ],
          screenshots: [
            './assets/snagrScreenshots1.png',
            './assets/snagrScreenshots2.png',
            './assets/snagrScreenshots3.png'
          ]
        }) }
      ]
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
