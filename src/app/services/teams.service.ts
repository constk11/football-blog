import { Injectable } from '@angular/core';
import { Team, TeamBase } from '../shared/interfaces';
import { PlayersService } from './players.service';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  private teamsPreview: TeamBase[] = [
    { name: 'FC Bayern', logoId: 'bayern', id: '11' },
    { name: 'FC Barcelona', logoId: 'barcelona', id: '12' },
    { name: 'Real Madrid', logoId: 'real-madrid', id: '13' },
    { name: 'Manchester City', logoId: 'mc', id: '14' },
    { name: 'Manchester United', logoId: 'mu', id: '15' },
    { name: 'Borussia Dortmund', logoId: 'borussia', id: '16' },
  ];

  private teams: Team[] = [
    {
      ...this.teamsPreview[0],
      stadium: 'Альянц Арена',
      description:
        'Профессиональный немецкий футбольный клуб из города Мюнхена. Основан в 1900 году. Самый титулованный клуб Германии и один из самых титулованных клубов мира.',
      foundationDate: new Date(1900, 1, 27),
      players: this.playersService.getTeamPlayers('FC Bayern')
    },
    {
      ...this.teamsPreview[4],
      stadium: 'Олд Траффорд',
      description:
        'Английский профессиональный футбольный клуб из Траффорда, Большой Манчестер. Был основан в 1878 году под названием «Ньютон Хит», в 1902 году изменил название на «Манчестер Юнайтед». Один из самых популярных футбольных клубов в мире. Один из основателей английской Премьер-лиги в 1992 году.',
      foundationDate: new Date(1878, 2, 5),
      players: this.playersService.getTeamPlayers('Manchester United')
    },
  ];

  constructor(private playersService: PlayersService) {}

  public getTeamsPreview(): TeamBase[] {
    return this.teamsPreview;
  }

  public getTeamById(id: string): Team | undefined {
    return this.teams.find((t) => t.id === id);
  }
}
