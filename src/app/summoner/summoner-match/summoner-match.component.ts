import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { LeagueService } from 'src/app/shared/league.service';

@Component({
  selector: 'app-summoner-match',
  templateUrl: './summoner-match.component.html',
  styleUrls: ['./summoner-match.component.css']
})
export class SummonerMatchComponent implements OnInit {
  match: any;
  constructor(
    private route: ActivatedRoute,
    private leagueService: LeagueService,
    private location: Location
  ) { }

  ngOnInit() {
    const matchId = +this.route.snapshot.paramMap.get('id');
    const region = this.route.snapshot.queryParamMap.get('region');
    this.leagueService.getMatch(matchId, region)
    .subscribe(response => {
      this.match = response.match;
    });
  }

  goBack() {
    this.location.back();
  }

}
