import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { TeamInfoComponent } from './team-info/team-info.component';
import { PlayersComponent } from './players/players.component';
import { TeamsComponent } from './teams/teams.component';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    PageHeaderComponent,
    LeaguesComponent,
    TeamInfoComponent,
    PlayersComponent,
    TeamsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
