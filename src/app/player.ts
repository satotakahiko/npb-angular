import { Team } from "./team"

export type Player = {
  id: string
  age: number
  annual_salary: number
  body_weight: number
  createdAt: string
  height: number
  name: string
  name_kana: string
  publishedAt: string
  revisedAt: string
  teams_id: Team
  updatedAt: string
}
