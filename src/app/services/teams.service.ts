import { Injectable } from "@angular/core";
import { Team } from "../teams-page/teams-page.component";

@Injectable({
  providedIn: 'root'
})

export class TeamsService {
  teams: Team[] = [
    {name: 'FC Bayern', logoSrc: 'bayern', id: '11'},
    {name: 'FC Barcelona', logoSrc: 'barcelona', id: '12'},
    {name: 'Real Madrid', logoSrc: 'real-madrid', id: '13'},
    {name: 'Manchester City', logoSrc: 'mc', id: '14'},
    {name: 'Manchester United', logoSrc: 'mu', id: '15'},
    {name: 'Borrusia Dortmund', logoSrc: 'borussia', id: '16'}
  ]
  
  getTeams() {
    return this.teams
  }

  getTeamById(id: string) {
    return this.teams.find(t => t.id === id)
  }
}