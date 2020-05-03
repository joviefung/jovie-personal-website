import { Component, OnInit } from '@angular/core';
import { Work } from '../models/work';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  works: Work[] = [
    {
      title: 'Amazon SES email template management page',
      screenshot: './assets/amazonSesEmailTemplateManagementScreenshot.png',
      link: 'https://joviefung.github.io/amazon-ses-template-management-page/',
      sourceCodeLink: 'https://github.com/joviefung/amazon-ses-template-management',
      framework: 'Vue.js 2, Javascript'
    },
    {
      title: 'My personal website (this site)',
      screenshot: './assets/myPersonalWebsiteScreenshot.png',
      link: '',
      sourceCodeLink: 'https://github.com/joviefung/jovie-personal-website',
      framework: 'Angular 8, Typescript'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
