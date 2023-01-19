import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { ImprintComponent } from './imprint/imprint.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SendEmailSuccessComponent } from './send-email-success/send-email-success.component';
import { SkillsComponent } from './skills/skills.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  {path: '', component: StartComponent},
  {path: 'imprint', component: ImprintComponent},
  {path: 'legal-notice', component:LegalNoticeComponent},
  {path: 'success', component: SendEmailSuccessComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }


