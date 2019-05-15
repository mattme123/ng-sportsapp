import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SportsService {
  gameClicked = false;
  // recievedData = false;
  currentGame;
  month;
  gameLoading = false;
  gamesLoading = false;
  date = new Date();
  dd = this.date.getDate();
  mm = ((this.date.getMonth() + 1) / 100).toString().split('.');
  mml = matchMedia.length;
  yyyy = this.date.getFullYear();
  currentDate = `${this.mm[this.mml]}/${this.dd}/${this.yyyy}`;

  // tslint:disable-next-line: max-line-length
  url = `https://api.mysportsfeeds.com/v1.0/pull/nhl/2019-playoff/daily_game_schedule.json?fordate=${this.yyyy}${this.mm[this.mml]}${this.dd}`;
  auth = 'Basic OGY1Y2VmY2EtOWRiNi00MzM3LWJlMzctMDYzN2M1OnN0ZXViZW52aWxsZQ==';

  constructor(
    private http: HttpClient
  ) {
    console.log(this.mm);
    console.log(this.mm.length);
  }

  getRequest(url: string): Observable<any> {
    return this.http.get<any>(url, { headers: { authorization: this.auth } });
  }

  setVars(p: number) {
    this.gameLoading = true;
    const sub = this.getRequest(this.url).subscribe(
      x => {
        console.log(x);
        this.currentGame = x.dailygameschedule.gameentry[p];
        this.gameClicked = true;
        this.gameLoading = false;
      }
    );
  }

  resetVars() {
    this.gameClicked = false;
    this.currentGame = null;
  }


}
