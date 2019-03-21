import { Component, OnInit } from '@angular/core';
import { LeagueService } from '../league.service';
import { SummonerProfile } from '../models/summoner-profile';

@Component({
  selector: 'app-summoner-profile',
  templateUrl: './summoner-profile.component.html',
  styleUrls: ['./summoner-profile.component.css']
})
export class SummonerProfileComponent implements OnInit {

  summonerProfile: SummonerProfile;
  region = 'na1';
  regions: object[] = [
    { id: 'na1', name: 'North America'},
    { id: 'euw1', name: 'Europe West'},
    { id: 'kr1', name: 'Korea'},
    { id: 'eun1', name: 'Europe Nordic & East'},
    { id: 'ru', name: 'Russia'},
    { id: 'br', name: 'Brazil'},
    { id: 'oc1', name: 'Oceania'},
    { id: 'tr1', name: 'Turkey'},
    { id: 'la1', name: 'Latin America North'},
    { id: 'la2', name: 'Latin America South'}
  ];
  constructor(private leagueService: LeagueService) { }

  ngOnInit() {
  }

  onSearchClick(summonerName: string) {
    this.leagueService.getSummonerProfile(summonerName, this.region)
      .subscribe(summonerProfile => this.summonerProfile = summonerProfile);
  }

}
