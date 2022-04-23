import { Injectable } from '@angular/core';
import { Match } from '../shared/interfaces';
import { TeamsService } from './teams.service';

@Injectable({
  providedIn: 'root',
})
export class MatchesService {
  matches: Match[] = [
    {
      team1: {name: 'FC Bayern', logoId: 'bayern'},
      team2: {name: 'Real Madrid', logoId: 'real-madrid'},
      date: new Date(2022, 6, 19, 22),
      tournament: 'Лига чемпионов',
    },
    {
      team1: {name: 'FC Barcelona', logoId: 'barcelona'},
      team2: {name: 'Manchester City', logoId: 'mc'},
      date: new Date(2022, 3, 10, 23),
      score: '2 : 2',
      tournament: 'Суперкубок УЕФА',
    },
    {
      team1: {name: 'Borussia Dortmund', logoId: 'borussia'},
      team2: {name: 'Manchester United', logoId: 'mu'},
      date: new Date(2022, 7, 19, 20),
      tournament: 'Лига чемпионов',
    },
    {
      team1: {name: 'Manchester City', logoId: 'mc'},
      team2: {name: 'FC Bayern', logoId: 'bayern'},
      date: new Date(2022, 3, 16, 20),
      score: '3 : 1',
      tournament: 'Суперкубок УЕФА',
    },
  ];

  constructor(private teamsService: TeamsService) {
    this.matches = this.checkExpiresMatchDate(this.matches);
    this.matches = this.sortMatches(this.matches);
  }

  getMatches() {
    return this.matches;
  }

  getLogoSrc(teamName: string): string {
    const teams = this.teamsService.getTeamsPreview();

    return teams.find((team) => team.name == teamName)?.logoId as string;
  }

  checkExpiresMatchDate(matches: Match[]): Match[] {
    matches.map((match) => {
      if (match.date < new Date() && !match.score) {
        match.score = this.generateRandomScore();
      }
    });
    return matches;
  }

  generateRandomScore(): string {
    return (
      Math.floor(Math.random() * 7).toString() +
      ' : ' +
      Math.floor(Math.random() * 7).toString()
    );
  }

  sortMatches(matches: Match[]): Match[] {
    matches.sort(this.sortByScoreAvailability);
    matches.sort(this.sortByUpcoming);
    return matches;
  }

  sortByScoreAvailability(match1: Match, match2: Match) {
    if (match1.date > match2.date) {
      return -1;
    } else if (match1.date < match2.date) {
      return 1;
    } else {
      return 0;
    }
  }

  sortByUpcoming(match1: Match, match2: Match) {
    if (!match1.score && !match2.score && match1.date > match2.date) {
      return 1;
    } else if (!match1.score && !match2.score && match1.date < match2.date) {
      return -1;
    } else {
      return 0;
    }
  }
}
