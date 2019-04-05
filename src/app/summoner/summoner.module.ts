import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SummonerProfileComponent } from './summoner-profile/summoner-profile.component';
import { SummonerMatchComponent } from './summoner-match/summoner-match.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    SummonerProfileComponent,
    SummonerMatchComponent
  ],
  exports: [
    SummonerProfileComponent,
    SummonerMatchComponent
  ]
})

export class SummonerModule {}
