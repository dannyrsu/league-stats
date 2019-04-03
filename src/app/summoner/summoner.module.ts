import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SummonerComponent } from './summoner.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    SummonerComponent
  ],
  exports: [
    SummonerComponent
  ]
})

export class SummonerModule {}
