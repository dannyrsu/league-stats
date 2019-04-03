import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SummonerComponent } from './summoner.component';
import { SecondsMinutesPipe } from '../shared/seconds-minutes.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    SecondsMinutesPipe,
    SummonerComponent
  ],
  exports: [
    SummonerComponent
  ]
})

export class SummonerModule {}
