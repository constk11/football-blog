import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation/navigation-bar.component';
import { TeamsPageComponent } from './teams-page/teams-page.component';
import { TeamComponent } from './teams-page/team/team.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { MatchesPageComponent } from './matches-page/matches-page.component';
import { NewsComponent } from './news-page/news/news.component';
import { MatchDatePipe } from './pipes/match-date.pipe';
import { registerLocaleData } from '@angular/common';
import ruLocale from '@angular/common/locales/ru';
import { MatchComponent } from './matches-page/match/match.component';
import { GoBackComponent } from './shared/components/go-back/go-back.component';
import { ExtraInfoComponent } from './teams-page/team/extra-info/extra-info.component';
import { AuthComponent } from './auth/auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(ruLocale, 'ru')

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    TeamsPageComponent,
    TeamComponent,
    MainLayoutComponent,
    NewsPageComponent,
    MatchesPageComponent,
    NewsComponent,
    MatchDatePipe,
    MatchComponent,
    GoBackComponent,
    ExtraInfoComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
