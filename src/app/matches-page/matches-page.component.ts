import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../services/teams.service';

export interface Match {
  team1: string
  team2: string
  date?: Date
  score?: string
  tournament: string
}

@Component({
  selector: 'app-matches-page',
  templateUrl: './matches-page.component.html',
  styleUrls: ['./matches-page.component.scss']
})
export class MatchesPageComponent implements OnInit {

  matches: Match[] = [
    {
      team1: 'FC Bayern',
      team2: 'Real Madrid',
      date: new Date(0),
      tournament: 'Лига чемпионов'
    },
    {
      team1: 'Manchester United',
      team2: 'Borrusia Dortmund',
      score: '2 : 2',
      tournament: 'Суперкубок УЕФА'
    }
  ]

  constructor(private teamsService: TeamsService) { }

  ngOnInit(): void {
    
  }

  getLogoSrc(teamName: string): string {
    const teams = this.teamsService.getTeams()

    return teams.find(team => team.name == teamName)?.logoSrc as string
  }

}
