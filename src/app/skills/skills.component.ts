import { Component, OnInit } from '@angular/core';
import { SkillBlock } from '../models/skill-block';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillBlocks: SkillBlock[] = [
    {
      heading: 'Javascript framework',
      skills: [
        {
          icon: './assets/vue.png',
          title: 'Vue.js'
        },
        {
          icon: './assets/angular.svg',
          title: 'Angular'
        },
        {
          icon: './assets/reactNative.svg',
          title: 'React Native'
        },
      ]
    },
    {
      heading: 'Cloud service',
      skills: [
        {
          icon: './assets/azureFunctions.svg',
          title: 'Microsoft Azure Functions'
        },
        {
          icon: './assets/azureLogicApps.svg',
          title: 'Microsoft Azure Logic Apps'
        },
        {
          icon: './assets/azureDevOps.png',
          title: 'Microsoft Azure DevOps'
        },
      ]
    },
    {
      heading: 'Testing',
      skills: [
        {
          icon: './assets/seleniumWebDriver.png',
          title: 'Selenium WebDriver'
        },
        {
          icon: './assets/cucumberJS.svg',
          title: 'Cucumber.js'
        },
      ]
    },
    {
      heading: 'UX/UI design',
      skills: [
        {
          icon: './assets/materialDesign.png',
          title: 'Material design'
        },
      ]
    },
    {
      heading: 'Email service',
      skills: [
        {
          icon: './assets/amazonSes.jpg',
          title: 'Amazon SES (Simple Email Service)'
        },
      ]
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
