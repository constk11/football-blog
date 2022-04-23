import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { MatchesPageComponent } from './matches-page/matches-page.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { TeamsPageComponent } from './teams-page/teams-page.component';
import { TeamComponent } from './teams-page/team/team.component';
import { NewsComponent } from './news-page/news/news.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: '/teams', pathMatch: 'full' },
      {path: 'teams', component: TeamsPageComponent},
      {path: 'teams/:id', component: TeamComponent},
      {path: 'news', component: NewsPageComponent},
      {path: 'news/:id', component: NewsComponent},
      {path: 'matches', component: MatchesPageComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
