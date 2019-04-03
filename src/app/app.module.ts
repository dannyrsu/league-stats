import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummonerComponent } from './summoner/summoner.component';
import { SecondsMinutesPipe } from './seconds-minutes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SummonerComponent,
    SecondsMinutesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
