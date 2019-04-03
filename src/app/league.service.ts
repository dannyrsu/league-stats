import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Summoner } from './models/summoner';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {
  private leagueApiUrl = 'http://localhost:8080'; // TODO: Make this configurable

  constructor(private http: HttpClient) {
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getSummonerStats(summonerName: string, region: string): Observable<any> {
    return this.http.get<Summoner>(`${this.leagueApiUrl}/v1/summoner/${summonerName}/stats?region=${region}`)
      .pipe(
        tap(_ => console.log(`Call to League service to get ${summonerName} on ${region}`)),
        map(response => {
          for (const match of response.summonerProfile.matchHistory) {
            this.getChampionData(match.championId).subscribe(champion => {
              match.champion = champion;
            });
          }
          return response;
        }),
        catchError(this.handleError<Summoner>('getSummonerStats', null))
      );
  }

  getChampionData(championId: string): Observable<any> {
    return this.http.get(`${this.leagueApiUrl}/v1/champion/${championId}`)
    .pipe(
      catchError(this.handleError<any>('getChampionData', null))
    );
  }

  getGameVersions(): Observable<any> {
    return this.http.get('https://ddragon.leagueoflegends.com/realms/na.json')
      .pipe(
        catchError(this.handleError<any>('getGameVersions', null))
      );
  }

  getLeagueRegions(): any[] {
    return [
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
  }
}
