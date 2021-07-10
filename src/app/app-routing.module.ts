import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { BlogHealthComponent } from './blog-health/blog-health.component';
import { BlogSuccessComponent } from './blog-success/blog-success.component';
import { BuycourseComponent } from './buycourse/buycourse.component';
import { FaqComponent } from './faq/faq.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { PricingboxComponent } from './pricingbox/pricingbox.component';
import { QuizEngComponent } from './quiz-eng/quiz-eng.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { ServicesComponent } from './services/services.component';
import { ShareqpaperComponent } from './shareqpaper/shareqpaper.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'team',component:TeamComponent
  },
  {
    path:'faq',component:FaqComponent
  },
  {
    path:'attendace',component:AttendanceComponent
  },
  {
    path:'blog-health',component:BlogHealthComponent
  },
  {
    path:'blog-success',component:BlogSuccessComponent
  },
  {
    path:'feedback',component:FeedbackComponent
  },
  {
    path:'myaccount',component:MyaccountComponent
  },
  {
    path:'pricingbox',component:PricingboxComponent
  },
  {
    path:'quiz-eng',component:QuizEngComponent
  },
  {
    path:'scoreboard',component:ScoreboardComponent
  },
  {
    path:'shareqpaper',component:ShareqpaperComponent
  },
  {
    path:'serices',component:ServicesComponent
  },
  {
    path:'buycourse',component:BuycourseComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
