import { Component, OnInit } from '@angular/core';
import { SportsService } from '../sports.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  realData;
  t;

  constructor(
    private myService: SportsService
  ) { }

  ngOnInit() {
  }

  /*   data() {
      // tslint:disable-next-line: max-line-length
      this.myService.getRequest('https://api.mysportsfeeds.com/v1.0/pull/nhl/2019-playoff/daily_game_schedule.json?fordate=20190417').subscribe(
        x => {
          this.realData = x;
        }
      );
      setTimeout(() => {
        if (this.realData !== null) {
          this.myService.recievedData = true;
        } else {
          alert('no data loaded');
        }
      }, 500);

    } */
}
