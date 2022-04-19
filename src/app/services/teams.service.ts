import { Injectable } from '@angular/core';
import { Team } from '../shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  teams: Team[] = [
    { name: 'FC Bayern', logoId: 'bayern', id: '11' },
    { name: 'FC Barcelona', logoId: 'barcelona', id: '12' },
    { name: 'Real Madrid', logoId: 'real-madrid', id: '13' },
    { name: 'Manchester City', logoId: 'mc', id: '14' },
    { name: 'Manchester United', logoId: 'mu', id: '15' },
    { name: 'Borussia Dortmund', logoId: 'borussia', id: '16' },
  ];

  getTeams() {
    return this.teams;
  }

  getTeamById(id: string) {
    return this.teams.find((t) => t.id === id);
  }
}
