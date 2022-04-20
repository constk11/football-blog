export interface Match {
  team1: string,
  team2: string,
  date: Date,
  score?: string,
  tournament: string
}

export interface News {
  title: string,
  date: Date,
  publisher: string,
  text: string,
  pictureId: string,
  id: string
}

export interface TeamBase {
  id?: string,
  name: string,
  logoId: string
}

export interface Team extends TeamBase {
  stadium: string,
  description: string,
  foundationDate: Date,
  players: Player[]
}

export interface Player {
  firstName: string,
  lastName: string,
  position: string,
  age: number,
  height: number,
  number: number,
  nationality: string,
  team: string,
  photoId: string
}