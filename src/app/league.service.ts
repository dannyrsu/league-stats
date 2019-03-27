import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Summoner } from './models/summoner';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {
  private leagueApiUrl = 'http://localhost:8080'; // TODO: Make this configurable
  constructor(private http: HttpClient) { }

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
        catchError(this.handleError<Summoner>('getSummonerStats', null))
      );
  }
}
