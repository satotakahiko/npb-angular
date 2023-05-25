import { Injectable } from '@angular/core';
import { createClient } from 'microcms-js-sdk';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  async get(teamId: string): Promise<any> {
    const client = createClient({
      serviceDomain: 'wz0cvnfala',
      apiKey: 'fqXNLYtZNdau5MLaHUIlpW6O7Gswj2HXNPnz'
    })

    const data = await client.get({
      endpoint: "players",
      queries: {
        limit: 100,
        filters: `teams_id[equals]${teamId}`
      }
    })

    return data
  }
}
