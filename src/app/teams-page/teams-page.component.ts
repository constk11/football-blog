import { Component, OnInit } from '@angular/core';
import { Team, TeamsService } from '../services/teams.service';

@Component({
  selector: 'app-teams-page',
  templateUrl: './teams-page.component.html',
  styleUrls: ['./teams-page.component.scss']
})
export class TeamsPageComponent implements OnInit {
  
  teams: Team[]

  teamsLogosPath = '../../assets/teams-logos/'
  teamsLogosFormat = '.png'

  constructor(private teamsService: TeamsService) { }

  ngOnInit(): void {
    this.teams = this.teamsService.getTeams()
  }

  getLogoSrc(logoId: string): string {
    return this.teamsLogosPath + logoId + this.teamsLogosFormat
  }
}
