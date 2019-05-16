import { Component, OnInit, OnDestroy } from '@angular/core';
import { SportsService } from '../sports.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-games-section',
  templateUrl: './games-section.component.html',
  styleUrls: ['./games-section.component.css']
})
export class GamesSectionComponent implements OnInit, OnDestroy {
  url: string;
  sub: Subscription;
  homeTeam = [];
  homeP = null;
  awayP = null;
  awayTeam = [];

  constructor(
    private myService: SportsService
  ) {
    this.url = this.myService.url;
  }

  /* async */ ngOnInit() {
    this.myService.gamesLoading = true;
    // tslint:disable-next-line: max-line-length
    this.sub = this.myService.getRequest(this.url).subscribe(
      x => {
        this.myService.realData = x;
        console.log(this.myService.realData);
        this.myService.gamesLoading = false;
      }
    );
  }

  gameClicked(e) {
    this.homeTeam = [];
    this.awayTeam = [];
    this.homeP = null;
    this.awayP = null;
    this.myService.homeP = null;
    this.myService.awayP = null;
    this.myService.resetVars();
    this.myService.setVars(e.target.value);
    this.myService.getRequest(`https://api.mysportsfeeds.com/v1.0/pull/nhl/2019-playoff/cumulative_player_stats.json`).subscribe(
      x => {
        console.log(this.myService.currentGame);
        for (const i of x.cumulativeplayerstats.playerstatsentry) {
          if (i.team.City === this.myService.currentGame.homeTeam.City && i.team.Name === this.myService.currentGame.homeTeam.Name) {
            this.homeTeam.push(i);
          } else if (i.team.City === this.myService.currentGame.awayTeam.City && i.team.Name === this.myService.currentGame.awayTeam.Name) {
            this.awayTeam.push(i);
          }
        }
        for (let i = 1; i < this.homeTeam.length; i++) {
          this.homeP = this.homeTeam[0];
          if (parseFloat(this.homeTeam[i].stats.stats.Points['#text']) >= parseFloat(this.homeP.stats.stats.Points['#text'])) {
            this.homeP = this.homeTeam[i];
          }
        }
        for (let i = 1; i < this.awayTeam.length; i++) {
          this.awayP = this.awayTeam[0];
          if (parseFloat(this.awayTeam[i].stats.stats.Points['#text']) >= parseFloat(this.awayP.stats.stats.Points['#text'])) {
            this.awayP = this.awayTeam[i];
          }
        }
        this.myService.awayP = this.awayP;
        this.myService.homeP = this.homeP;
        this.myService.gameLoading = false;
      }
    );
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
