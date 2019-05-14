import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SportsService {
  gameClicked = false;
  recievedData = false;
  currentGame;

  constructor(
    private http: HttpClient
  ) {
  }

  getRequest(url: string): Observable<any> {
    return this.http.get<any>(url, { headers: { authorization: 'Basic OGY1Y2VmY2EtOWRiNi00MzM3LWJlMzctMDYzN2M1OnN0ZXViZW52aWxsZQ==' } });
  }

  setVars() {
    this.getRequest('https://api.mysportsfeeds.com/v1.0/pull/nhl/2019-playoff/daily_game_schedule.json?fordate=20190417').subscribe(
      x => {
        this.currentGame = x;
      }
    );
    setTimeout(() => {

    }, 100);
  }


}
