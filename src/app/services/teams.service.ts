import { Injectable } from '@angular/core';
import { Player, Team, TeamBase } from '../shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  teamsPreview: TeamBase[] = [
    { name: 'FC Bayern', logoId: 'bayern', id: '11' },
    { name: 'FC Barcelona', logoId: 'barcelona', id: '12' },
    { name: 'Real Madrid', logoId: 'real-madrid', id: '13' },
    { name: 'Manchester City', logoId: 'mc', id: '14' },
    { name: 'Manchester United', logoId: 'mu', id: '15' },
    { name: 'Borussia Dortmund', logoId: 'borussia', id: '16' },
  ];

  players: Player[] = [
    {
      firstName: 'Robert',
      lastName: 'Lewandowski',
      height: 185,
      age: 33,
      nationality: 'Poland',
      number: 9,
      position: 'ST',
      photoId: 'r-lewandowski',
      team: 'FC Bayern'
    },
    {
      firstName: 'Thomas',
      lastName: 'Müller',
      height: 185,
      age: 32,
      nationality: 'Germany',
      number: 25,
      position: 'CAM',
      photoId: 't-muller',
      team: 'FC Bayern'
    },
    {
      firstName: 'Manuel',
      lastName: 'Neuer',
      height: 193,
      age: 36,
      nationality: 'Germany',
      number: 1,
      position: 'GK',
      photoId: 'm-neuer',
      team: 'FC Bayern'
    },
    {
      firstName: 'Cristiano',
      lastName: 'Ronaldo',
      height: 187,
      age: 37,
      nationality: 'Portugal',
      number: 7,
      position: 'ST',
      photoId: 'c-ronaldo',
      team: 'Manchester United'
    },
    {
      firstName: 'Edinson',
      lastName: 'Cavani',
      height: 184,
      age: 35,
      nationality: 'Uruguay',
      number: 21,
      position: 'ST',
      photoId: 'e-cavani',
      team: 'Manchester United'
    },
    {
      firstName: 'Aaron',
      lastName: 'Wan-Bissaka',
      height: 183,
      age: 24,
      nationality: 'England',
      number: 29,
      position: 'RB',
      photoId: 'a-w-bissaka',
      team: 'Manchester United'
    },
  ]

  teams: Team[] = [
    {
      ...this.teamsPreview[0],
      stadium: 'Альянц Арена',
      description: 'Профессиональный немецкий футбольный клуб из города Мюнхена. Основан в 1900 году. Самый титулованный клуб Германии и один из самых титулованных клубов мира.',
      foundationDate: new Date(1900, 1, 27),
      players: this.getPlayers(this.teamsPreview[0].name)
    },
    {
      ...this.teamsPreview[4],
      stadium: 'Олд Траффорд',
      description: 'Английский профессиональный футбольный клуб из Траффорда, Большой Манчестер. Был основан в 1878 году под названием «Ньютон Хит», в 1902 году изменил название на «Манчестер Юнайтед». Один из самых популярных футбольных клубов в мире. Один из основателей английской Премьер-лиги в 1992 году.',
      foundationDate: new Date(1878, 2, 5),
      players: this.getPlayers(this.teamsPreview[4].name)
    }
  ]

  teamsLogosPath = '../../assets/teams-logos/'
  teamsLogosFormat = '.png'

  getPlayers(teamName: string): Player[] {
    return this.players.filter(p => p.team == teamName)
  }

  getTeamsPreview() {
    return this.teamsPreview;
  }

  getTeamById(id: string) {
    return this.teams.find(t => t.id === id);
  }

  getLogoSrc(logoId: string) {
    return this.teamsLogosPath + logoId + this.teamsLogosFormat
  }
}
