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


}
