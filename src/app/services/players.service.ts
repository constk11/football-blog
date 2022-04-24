import { Injectable } from "@angular/core";
import { Player } from "../shared/interfaces";

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  playersPositions: Object[] = [
    {GK: 'Goalkeeper'},
    {LWB: 'Left WingBack'},
    {LB: 'Left Back'},
    {RWB: 'Right WingBack'}, 
    {RB: 'Right Back'}, 
    {CB: 'Centre Back'}, 
    {CDM: 'Centre Defensive Midfielders'}, 
    {CM: 'Centre Midfielders'}, 
    {LM: 'Left Midfielder'}, 
    {RM: 'Right Midfielder'}, 
    {CAM: 'Centre Attacking Midfielder'}, 
    {LW: 'Left Winger'}, 
    {RW: 'Right Winger'}, 
    {CF: 'Centre Forward'}, 
    {LF: 'Left Forward'}, 
    {RF: 'Right Forward'}, 
    {ST: 'Striker'}
  ]

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
    return this.sortPlayersByPosition(this.players.filter((p) => p.team == teamName))
  }

  sortPlayersByPosition(players: Player[]): Player[] {
    const positionsOrder = this.playersPositions.map(pos => Object.keys(pos)[0])

    return players.sort((player1, player2) => {
      if (positionsOrder.indexOf(player1.position) < positionsOrder.indexOf(player2.position)) {
        return -1
      } else if (positionsOrder.indexOf(player1.position) > positionsOrder.indexOf(player2.position)) {
        return 1
      } else {
        return 0
      }
    })
  }

  getFullPosition(position: string) {
    const fullPosition = this.playersPositions.find(pos => pos[position as keyof Object])
    if (fullPosition) {
      return fullPosition[position as keyof Object]
    }

    return position
  }
}