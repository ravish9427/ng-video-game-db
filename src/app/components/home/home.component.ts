import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public sort:string;
  public games: Array<Game>;

  constructor() { }

  ngOnInit(): void {
  }

}
