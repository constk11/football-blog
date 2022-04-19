import { Injectable } from '@angular/core';
import { Match } from '../shared/interfaces';
import { TeamsService } from './teams.service';

@Injectable({
  providedIn: 'root',
})
export class MatchesService {
  matches: Match[] = [
    {
      team1: 'FC Bayern',
      team2: 'Real Madrid',
      date: new Date(2022, 6, 19, 22),
      tournament: 'Лига чемпионов',
    },
    {
      team1: 'FC Barcelona',
      team2: 'Manchester City',
      date: new Date(2022, 3, 10, 23),
      score: '2 : 2',
      tournament: 'Суперкубок УЕФА',
    },
    {
      team1: 'Borussia Dortmund',
      team2: 'Manchester United',
      date: new Date(2022, 7, 19, 20),
      tournament: 'Лига чемпионов',
    },
    {
      team1: 'Manchester City',
      team2: 'FC Bayern',
      date: new Date(2022, 3, 16, 20),
      score: '3 : 1',
      tournament: 'Суперкубок УЕФА',
    },
  ];

  constructor(private teamsService: TeamsService) {
    this.matches = this.checkExpiresMatchDate(this.matches);
    this.matches = this.sortMatches(this.matches);
  }

  getLogoSrc(teamName: string): string {
    const teams = this.teamsService.getTeams();

    return teams.find((team) => team.name == teamName)?.logoId as string;
  }

  getMatches() {
    return this.matches;
  }

  sortMatches(matches: Match[]): Match[] {
    matches.sort((match1, match2) => {
      if (match1.date > match2.date) {
        return -1;
      } else if (match1.date < match2.date) {
        return 1;
      } else {
        return 0;
      }
    });
    matches.sort((match1, match2) => {
      if (!match1.score && !match2.score && match1.date > match2.date) {
        return 1;
      } else if (!match1.score && !match2.score && match1.date < match2.date) {
        return -1;
      } else {
        return 0;
      }
    });
    return matches;
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
}
