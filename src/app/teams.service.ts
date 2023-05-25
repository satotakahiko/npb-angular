import { Injectable, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Team } from './team';
import { createClient } from 'microcms-js-sdk';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  async get(id = ""): Promise<any> {
    const client = createClient({
      serviceDomain: 'wz0cvnfala',
      apiKey: 'fqXNLYtZNdau5MLaHUIlpW6O7Gswj2HXNPnz'
    })

    const filters = id ? `id[equals]${id}` : ""

    const data = await client.get({
      endpoint: "team",
      queries: {
        limit: 12,
        filters
      }
    })

    return data
  }
}
