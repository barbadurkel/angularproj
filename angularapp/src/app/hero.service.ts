import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';   // url to web api
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private messageService: MessageService) { }

private handleError<T> (operation = 'operation', result?: T){
    return(error:any): Observable<T> => {
        console.error(error);
        this.log(`${operation} failed : ${error.message}`);
        return of(result as T);
        
    };
}

  getHeroes(): Observable<Hero[]>{
      // GET heroes from the server
      return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetched hereos')),
        catchError(this.handleError<Hero[]>('getHeroes', [])));
  }

  getHero(id: number): Observable<Hero>{
      const url = `${this.heroesUrl}/${id}`;
    
      return this.http.get<Hero>(url).pipe(
          tap(_ => this.log(`fetched hero number = ${id}`)),
          catchError(this.handleError<Hero>(`getHero id=${id}`))
      );
    }
  updateHero(hero: Hero){
      return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
          tap(_ => this.log(`updated hero id = ${hero.id}`)),
          catchError(this.handleError<any>('updateHero')));
  }  
  private log(message: string){
      this.messageService.add(`HeroService: ${message}`);
  }



}
