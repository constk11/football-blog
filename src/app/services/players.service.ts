import { Injectable } from "@angular/core";
import { Player } from "../shared/interfaces";

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  positionsOrder: string[] = ['GK','LWB','LB', 'RWB', 'RB', 'CB', 'CDM', 'CM', 'LM', 'RM', 'CAM', 'LW', 'RW', 'CF', 'LF', 'RF', 'ST']

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
      team: 'FC Bayern',
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
      team: 'FC Bayern',
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
      team: 'FC Bayern',
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
      team: 'Manchester United',
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
      team: 'Manchester United',
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
      team: 'Manchester United',
    },
  ];

  getTeamPlayers(teamName: string) {
    return this.players.filter((p) => p.team == teamName)
  }
}