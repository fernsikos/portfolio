import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IntroducionComponent } from './introducion/introducion.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './contact/contact.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FooterComponent } from './footer/footer.component';
import { StartComponent } from './start/start.component';
import { ImprintComponent } from './imprint/imprint.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroducionComponent,
    AboutMeComponent,
    SkillsComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent,
    StartComponent,
    ImprintComponent,
    LegalNoticeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule ,
    MatFormFieldModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
