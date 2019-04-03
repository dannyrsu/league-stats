import { Component, OnInit } from '@angular/core';
import { LeagueService } from '../shared/league.service';
import { SummonerProfile } from './summoner.model';

@Component({
  selector: 'app-summoner',
  templateUrl: './summoner.component.html',
  styleUrls: ['./summoner.component.css']
})
export class SummonerComponent implements OnInit {

  summoner: SummonerProfile;
  gameVersions: any;
  region = 'na1';
  regions: any[];
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
        this.summoner = response.summonerProfile;
      });
  }
}
