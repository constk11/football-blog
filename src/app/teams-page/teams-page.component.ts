import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../services/teams.service';

export interface Team {
  id?: string,
  name: string,
  logoSrc: string
}

@Component({
  selector: 'app-teams-page',
  templateUrl: './teams-page.component.html',
  styleUrls: ['./teams-page.component.scss']
})
export class TeamsPageComponent implements OnInit {
  teams: Team[]
  constructor(private teamsService: TeamsService) { }

  ngOnInit(): void {
    this.teams = this.teamsService.getTeams()
  }

}
