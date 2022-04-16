import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation/navigation-bar.component';
import { TeamsPageComponent } from './teams-page/teams-page.component';
import { TeamComponent } from './teams-page/team/team.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { MatchesPageComponent } from './matches-page/matches-page.component';
import { NewsComponent } from './news-page/news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    TeamsPageComponent,
    TeamComponent,
    MainLayoutComponent,
    NewsPageComponent,
    MatchesPageComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
