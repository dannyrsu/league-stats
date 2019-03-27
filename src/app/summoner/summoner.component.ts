import { Component, OnInit } from '@angular/core';
import { LeagueService } from '../league.service';
import { Summoner } from '../models/summoner';

@Component({
  selector: 'app-summoner',
  templateUrl: './summoner.component.html'
})
export class SummonerComponent implements OnInit {

  summoner: Summoner;
  region = 'na1';
  regions: object[] = [
    { id: 'na1', name: 'North America'},
    { id: 'euw1', name: 'Europe West'},
    { id: 'kr', name: 'Korea'},
    { id: 'eun1', name: 'Europe Nordic & East'},
    { id: 'ru', name: 'Russia'},
    { id: 'jp1', name: 'Japan'},
    { id: 'br1', name: 'Brazil'},
    { id: 'oc1', name: 'Oceania'},
    { id: 'tr1', name: 'Turkey'},
    { id: 'la1', name: 'Latin America North'},
    { id: 'la2', name: 'Latin America South'}
  ];
  constructor(private leagueService: LeagueService) { }

  ngOnInit() {
  }

  onSearchClick(summonerName: string) {
    this.leagueService.getSummonerStats(summonerName, this.region)
      .subscribe(response => {
        this.summoner = response;
      });
  }
}
