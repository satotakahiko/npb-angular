type Logo = {
  url: string
  height: number
  width: number
}

type League = Array<"セ・リーグ" | "パ・リーグ">

export type Team = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  name: string
  league: League
  founding: string
  logo: Logo
  color: string
  home: string
  win_league: number
  win_all: number
}
