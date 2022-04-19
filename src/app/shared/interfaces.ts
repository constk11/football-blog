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

export interface Team {
  id?: string,
  name: string,
  logoId: string
}