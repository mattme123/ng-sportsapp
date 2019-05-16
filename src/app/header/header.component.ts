import { Component, OnInit } from '@angular/core';
import { SportsService } from '../sports.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  date;

  constructor(
    private myService: SportsService
  ) { }

  ngOnInit() {
    this.date = this.myService.currentDate;
  }

  next() {
    this.myService.gamesLoading = true;
    this.myService.increaseDay();
    this.myService.resetVars();
    this.myService.homeP = null;
    this.myService.awayP = null;
    this.myService.getRequest(this.myService.url).subscribe(
      x => {
        this.myService.realData = x;
        this.myService.gamesLoading = false;
      }
    );
    this.date = this.myService.currentDate;
  }

  previous() {
    this.myService.gamesLoading = true;
    this.myService.decreaseDay();
    this.myService.resetVars();
    this.myService.homeP = null;
    this.myService.awayP = null;
    this.myService.getRequest(this.myService.url).subscribe(
      x => {
        this.myService.realData = x;
        this.myService.gamesLoading = false;
      }
    );
    this.date = this.myService.currentDate;
  }


}
