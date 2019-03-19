import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summoner-search',
  templateUrl: './summoner-search.component.html',
  styleUrls: ['./summoner-search.component.css']
})
export class SummonerSearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSearchClick() {
    alert('clicked search');
  }

}
