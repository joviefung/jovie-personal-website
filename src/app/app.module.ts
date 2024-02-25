import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatRippleModule } from '@angular/material/core'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatDialogModule } from '@angular/material/dialog'
import { MatCardModule } from '@angular/material/card'

import { LayoutComponent } from './layout/layout.component'
import { JumbotronComponent } from './jumbotron/jumbotron.component'
import { ContactsComponent } from './contacts/contacts.component'
import { AboutMeComponent } from './about-me/about-me.component'
import { SkillsComponent } from './skills/skills.component'
import { ExperienceComponent } from './experience/experience.component'
import { SectionComponent } from './section/section.component'
import { WorksComponent } from './works/works.component'
import { TimelineEventDetailsDialogComponent } from './timeline-event-details-dialog/timeline-event-details-dialog.component'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    JumbotronComponent,
    ContactsComponent,
    AboutMeComponent,
    SkillsComponent,
    ExperienceComponent,
    SectionComponent,
    WorksComponent,
    TimelineEventDetailsDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    MatGridListModule,
    MatDialogModule,
    MatCardModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
