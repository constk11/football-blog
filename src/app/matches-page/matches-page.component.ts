import { Component, OnInit } from '@angular/core';
import { MatchesService } from '../services/matches.service';
import { Match } from '../shared/interfaces';

@Component({
  selector: 'app-matches-page',
  templateUrl: './matches-page.component.html',
  styleUrls: ['./matches-page.component.scss']
})
export class MatchesPageComponent implements OnInit {

  matches: Match[]

  teamsLogosPath = '../../assets/teams-logos/'
  teamsLogosFormat = '.png'

  constructor(private matchesService: MatchesService) { }

  ngOnInit(): void {
    this.matches = this.matchesService.getMatches()
  }

  getLogoSrc(teamName: string) {
    return this.teamsLogosPath + this.matchesService.getLogoSrc(teamName) + this.teamsLogosFormat
  }
}
