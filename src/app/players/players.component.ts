import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PlayersService } from '../players.service';
import { TeamsService } from '../teams.service';
import { Player } from '../player';
import { Team } from '../team';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent {
  id: string = ""
  team = {} as Team
  players = [] as Player[]

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private playersService: PlayersService,
    private teamsService: TeamsService
  ) { }

  ngOnInit(): void {
    const teamId = this.route.snapshot.paramMap.get("id")
    if (teamId) {
      this.getTeam(teamId)
      this.getPlayers(teamId)
    }
  }

  getTeam(teamId: string): void {
    this.teamsService.get(teamId).then((res) => {
      this.team = res.contents[0]

      console.log("team", this.team)
    })
  }

  getPlayers(teamId: string): void {
    this.playersService.get(teamId).then((res) => {
      this.players = res.contents

      console.log("players", this.players)
    })
  }

  goBack(): void {
    this.location.back();
  }
}
