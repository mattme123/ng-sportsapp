import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SportsService {
  gameClicked = false;
  // recievedData = false;
  realData;
  currentGame: any;
  gameLoading = false;
  gamesLoading = false;
  month: string;
  day: string;
  year: number;
  currentDate: string;
  awayP;
  homeP;

  url: string;
  auth = 'Basic OGY1Y2VmY2EtOWRiNi00MzM3LWJlMzctMDYzN2M1OnN0ZXViZW52aWxsZQ==';

  constructor(
    private http: HttpClient
  ) {
    this.getDate();
    this.currentDate = `${this.month}/${this.day}/${this.year}`;
    // tslint:disable-next-line: max-line-length
    this.url = `https://api.mysportsfeeds.com/v1.0/pull/nhl/2019-playoff/daily_game_schedule.json?fordate=${this.year}${this.month}${this.day}`;
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
        console.log(this.currentGame);
        this.gameClicked = true;
      }
    );
  }

  resetVars() {
    this.gameClicked = false;
    this.currentGame = null;
  }

  getDate() {
    const d = new Date();
    this.month = '' + (d.getMonth() + 1);
    this.day = '' + d.getDate();
    this.year = d.getFullYear();
    this.formatDayandMonth();
  }

  increaseDay() {
    this.day = String(parseFloat(this.day) + 1);
    this.formatDayandMonth();
    this.currentDate = `${this.month}/${this.day}/${this.year}`;
    console.log(this.currentDate);
    // tslint:disable-next-line: max-line-length
    this.url = `https://api.mysportsfeeds.com/v1.0/pull/nhl/2019-playoff/daily_game_schedule.json?fordate=${this.year}${this.month}${this.day}`;
  }

  decreaseDay() {
    this.day = String(parseFloat(this.day) - 1);
    this.formatDayandMonth();
    this.currentDate = `${this.month}/${this.day}/${this.year}`;
    // tslint:disable-next-line: max-line-length
    this.url = `https://api.mysportsfeeds.com/v1.0/pull/nhl/2019-playoff/daily_game_schedule.json?fordate=${this.year}${this.month}${this.day}`;
  }

  formatDayandMonth() {
    if (this.month.length < 2) {
      this.month = '0' + this.month;
    }
    if (this.day.length < 2) {
      this.day = '0' + this.day;
    }
  }


}
