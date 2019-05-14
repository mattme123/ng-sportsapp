import { Component, OnInit } from '@angular/core';
import { SportsService } from '../sports.service';

@Component({
  selector: 'app-games-selected',
  templateUrl: './games-selected.component.html',
  styleUrls: ['./games-selected.component.css']
})
export class GamesSelectedComponent implements OnInit {

  constructor(private myService: SportsService) { }

  ngOnInit() {
  }

}
