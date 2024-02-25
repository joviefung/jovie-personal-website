import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { Component, type OnInit } from '@angular/core'
import { type Work } from '../../models/work'

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrl: './works.component.scss'
})

export class WorksComponent implements OnInit {
  numberOfColumns: number = 2
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
      framework: 'Angular 17, Typescript'
    }
  ]

  constructor (private readonly breakpointObserver: BreakpointObserver) {}

  ngOnInit () {
    this.breakpointObserver.observe([Breakpoints.HandsetPortrait])
      .subscribe(result => {
        if (result.matches) {
          this.numberOfColumns = 1
        } else {
          this.numberOfColumns = 2
        }
      })
  }

}
