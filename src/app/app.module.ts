import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { PricingboxComponent } from './pricingbox/pricingbox.component';
import { TeamComponent } from './team/team.component';
import { QuizEngComponent } from './quiz-eng/quiz-eng.component';
import { BlogHealthComponent } from './blog-health/blog-health.component';
import { BlogSuccessComponent } from './blog-success/blog-success.component';
import { BuycourseComponent } from './buycourse/buycourse.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { ShareqpaperComponent } from './shareqpaper/shareqpaper.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    FaqComponent,
    PricingboxComponent,
    TeamComponent,
    QuizEngComponent,
    BlogHealthComponent,
    BlogSuccessComponent,
    BuycourseComponent,
    MyaccountComponent,
    ShareqpaperComponent,
    AttendanceComponent,
    FeedbackComponent,
    ScoreboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
