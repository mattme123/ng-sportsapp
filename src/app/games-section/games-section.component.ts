import { Component, OnInit } from '@angular/core';
import { SportsService } from '../sports.service';

@Component({
  selector: 'app-games-section',
  templateUrl: './games-section.component.html',
  styleUrls: ['./games-section.component.css']
})
export class GamesSectionComponent implements OnInit {

  realData;
  t;

  constructor(
    private myService: SportsService
  ) { }

  async ngOnInit() {
    // tslint:disable-next-line: max-line-length
    await this.myService.getRequest('https://api.mysportsfeeds.com/v1.0/pull/nhl/2019-playoff/daily_game_schedule.json?fordate=20190417').subscribe(
      x => {
        this.realData = x;
        console.log(this.realData);
      }
    );
    /*     setTimeout(() => {
          if (this.realData !== null) {
            this.myService.recievedData = true;
          } else {
            alert('no data loaded');
          }
        }, 500); */
  }

  gameClicked(e) {
    console.log(e);
    this.myService.gameClicked = true;
    if (e.target.parentElement.innerText === 'Boston Bruins↵↵@↵↵Toronto Maple Leafs↵↵7:00PM') {
      this.myService.setVars(0);
    }
    if (e.target.parentElement.innerText === 'Nashville Predators↵↵@↵↵Dallas Stars↵↵8:00PM') {
      this.myService.setVars(1);
    }
    if (e.target.parentElement.innerText === 'Calgary Flames↵↵@↵↵Colorado Avalanche↵↵10:00PM') {
      this.myService.setVars(2);
    }
  }

}
