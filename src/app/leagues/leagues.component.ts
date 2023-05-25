import { Component } from '@angular/core';
import { TeamsService } from '../teams.service';
import { Team } from '../team';

type teams = {
  ce: Array<Team>
  pa: Array<Team>
}

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.scss']
})
export class LeaguesComponent {
  teams = {
    ce: [],
    pa: []
  } as teams

  constructor(
    private teamsService: TeamsService
  ) { }

  ngOnInit() {
    this.teamsService.get().then((res) => {
      res.contents.forEach((team: any) => {
        team.league[0] === "セ・リーグ" ? this.teams.ce.push(team) : this.teams.pa.push(team)
      })

      console.log("get response", this.teams)
    })
  }
}
