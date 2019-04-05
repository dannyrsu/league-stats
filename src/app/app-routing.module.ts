import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SummonerProfileComponent } from './summoner/summoner-profile/summoner-profile.component';
import { SummonerMatchComponent } from './summoner/summoner-match/summoner-match.component';

const routes: Routes = [
  { path: 'profile', component: SummonerProfileComponent },
  { path: 'match/:id', component: SummonerMatchComponent },
  { path: '', redirectTo: '/profile', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
