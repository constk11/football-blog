import { Component, OnInit } from '@angular/core';
import { Match, MathcesService } from '../services/matches.service';

@Component({
  selector: 'app-matches-page',
  templateUrl: './matches-page.component.html',
  styleUrls: ['./matches-page.component.scss']
})
export class MatchesPageComponent implements OnInit {

  matches: Match[]

  constructor(private matchesService: MathcesService) { }

  ngOnInit(): void {
    this.matches = this.matchesService.getMatches()
  }

  getLogoSrc(teamName: string) {
    return '../../assets/teams-logos/' + this.matchesService.getLogoSrc(teamName) + '.png'
  }
}
