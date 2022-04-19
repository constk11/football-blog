import { Component, Input, OnInit } from '@angular/core';
import { MatchesService } from 'src/app/services/matches.service';
import { Match } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {

  @Input() match: Match

  teamsLogosPath = '../../assets/teams-logos/'
  teamsLogosFormat = '.png'

  constructor(private matchesService: MatchesService) { }

  ngOnInit(): void {
  }

  getLogoSrc(teamName: string) {
    return this.teamsLogosPath + this.matchesService.getLogoSrc(teamName) + this.teamsLogosFormat
  }
}
