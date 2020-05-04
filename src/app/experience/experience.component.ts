import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TimelineEvent } from '../models/timeline-event';
import { TimelineEventDetailsDialogComponent } from '../timeline-event-details-dialog/timeline-event-details-dialog.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements AfterViewInit {
  timelineEvents: TimelineEvent[] = [
    new TimelineEvent({
      logo: './assets/snagr.png',
      employer: 'SnagR',
      title: 'Front-end web developer',
      type: 'Full time',
      startDate: new Date(2017, 11),
      endDate: new Date(),
      website: 'https://www.snagr.co.uk/',
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
    }),
    new TimelineEvent({
      logo: 'assets/anase.jpg',
      employer: 'Anase',
      title: 'Front-end web developer',
      type: 'Freelance',
      startDate: new Date(2017, 9),
      endDate: new Date(2017, 11),
      teamSize: 3,
      works: [
        'CV analysis website using Angular 2, RxJS and Angular Material',
        'UX/UI design using UX Pin'
      ]
    }),
    new TimelineEvent({
      logo: './assets/ibm.svg',
      employer: 'IBM Hong Kong Computer Development Lab',
      title: 'Software developer / Quality assurance(QA)',
      type: 'Full time(Permanent)',
      startDate: new Date(2015, 5),
      endDate: new Date(2017, 9),
      website: 'https://www.ibm.com/',
      teamSize: 40,
      works: [
        'JustMail web administration page using Angular 1',
        'Wispr email service web page using Angular 2',
        'Wispr front-end end-to-end automation testing using CucumberJS',
        'UX design and customer feedback for Wispr',
        'Wispr back-end bug fix using Perl',
        'IBM Connections Cloud front-end Cisco integration using Java',
        'Selenium automation testing scripts for SmartCloud iNotes using Java',
        'Level-3 customer support for SmartCloud iNotes email service',
        'Coaching one-year internship placement for QA team',
        'Adapting Agile development process',
      ]
    }),
    new TimelineEvent({
      logo: './assets/ibm.svg',
      employer: 'IBM Hong Kong Computer Development Lab',
      title: 'Quality assurance(QA)',
      type: 'Internship',
      startDate: new Date(2013, 5),
      endDate: new Date(2014, 5),
      website: 'https://www.ibm.com/',
      teamSize: 40,
      works: [
        'Selenium automation testing scripts for SmartCloud iNotes using Java',
        'Manual testing including function and user experience suggestion',
        'Testing on Linux servers'
      ]
    }),
    new TimelineEvent({
      logo: './assets/hkust.png',
      employer: 'Hong Kong University of Science and Technology',
      title: 'Computer laboratory tutor helper',
      type: 'Part time',
      startDate: new Date(2012, 8),
      endDate: new Date(2012, 11),
      website: 'https://www.cse.ust.hk/',
      works: [
        'Verifying lab assignments of course COMP1022',
        'Assisting students who have difficulties on finishing lab assignments'
      ]
    }),
  ]

  constructor(public dialog: MatDialog) {
  }

  @ViewChildren("timelineContent") timelineContents: QueryList<ElementRef>;
  timelineContentHeights: Number[] = [];

  ngAfterViewInit() {
    this.update();
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.update();
  }

  update() {
    setTimeout(() => {
      this.timelineContentHeights = this.timelineContents.toArray().map(timelineContent => timelineContent.nativeElement.offsetHeight);
    }, 0);
  }
  openDialog(timelineEvent: TimelineEvent): void {
    this.dialog.open(TimelineEventDetailsDialogComponent, {
      width: timelineEvent.screenshots.length ? '80%' : '600px',
      data: timelineEvent,
    });
  }
}
