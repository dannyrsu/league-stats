import { Component, OnInit } from '@angular/core';
import { LeagueService } from '../league.service';
import { Summoner } from '../models/summoner';

@Component({
  selector: 'app-summoner',
  templateUrl: './summoner.component.html',
  styleUrls: ['./summoner.component.css']
})
export class SummonerComponent implements OnInit {

  summoner: Summoner;
  gameVersions: object;
  region = 'na1';
  regions: object[];
  constructor(private leagueService: LeagueService) { }

  ngOnInit() {
    this.regions = this.leagueService.getLeagueRegions();
    this.leagueService.getGameVersions().subscribe(data => {
      this.gameVersions = data;
    });
  }

  onSearchClick(summonerName: string) {
    this.leagueService.getSummonerStats(summonerName, this.region)
      .subscribe(response => {
        this.summoner = response;
      });
  }
}
