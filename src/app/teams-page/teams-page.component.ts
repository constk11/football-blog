import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../services/teams.service';
import { TeamBase } from '../shared/interfaces';

@Component({
  selector: 'app-teams-page',
  templateUrl: './teams-page.component.html',
  styleUrls: ['./teams-page.component.scss']
})
export class TeamsPageComponent implements OnInit {
  
  teamsPreview: TeamBase[]

  teamsLogosPath = '../../assets/teams-logos/'
  teamsLogosFormat = '.png'

  constructor(private teamsService: TeamsService) { }

  ngOnInit(): void {
    this.teamsPreview = this.teamsService.getTeamsPreview()
  }

  getLogoSrc(logoId: string): string {
    return this.teamsLogosPath + logoId + this.teamsLogosFormat
  }
}
