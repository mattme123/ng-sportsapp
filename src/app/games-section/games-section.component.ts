import { Component, OnInit, OnDestroy } from '@angular/core';
import { SportsService } from '../sports.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-games-section',
  templateUrl: './games-section.component.html',
  styleUrls: ['./games-section.component.css']
})
export class GamesSectionComponent implements OnInit, OnDestroy {

  realData;
  currentGame;
  url: string;
  sub: Subscription;

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
        this.realData = x;
        console.log(this.realData);
        this.myService.gamesLoading = false;
      }
    );
  }

  gameClicked(e) {
    this.myService.resetVars();
    this.myService.setVars(e.target.parentElement.parentElement.children[4].innerText);
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
