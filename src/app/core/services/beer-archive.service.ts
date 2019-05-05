import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap, switchMap } from 'rxjs/operators';
import { Beer } from 'src/app/core/models/beer/beer.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { BeerAdapter } from 'src/app/core/models/beer/beer.adapter';
import { BeerStore } from 'src/app/core/models/beer/state/beer.store';
import { BeerQuery } from 'src/app/core/models/beer/state/beer.query';

@Injectable({
  providedIn: 'root',
})
export class BeerArchiveService {
  constructor(
    private httpClient: HttpClient,
    private beerAdapter: BeerAdapter,
    private beerStore: BeerStore,
    private beerQuery: BeerQuery
  ) {}

  // Get list of beers. If cached, return cached list
  getBeers(): Observable<Beer[]> {
    const request$ = this.httpClient
      .get<any[]>(`${environment.serverUrl}/beer`)
      .pipe(
        map(entities => entities.map(entity => this.beerAdapter.adapt(entity)))
      )
      .pipe(
        tap(beers => {
          this.beerStore.set(beers);
        })
      );

    return this.beerQuery.getHasCache()
      ? of(this.beerQuery.getAll())
      : request$;
  }

  // Get beer with id. If list is cached, return from cached list.
  getBeer(id: string): Observable<Beer> {
    const request$ = this.httpClient
      .get(`${environment.serverUrl}/beer/${id}`)
      .pipe(map(entity => this.beerAdapter.adapt(entity)));

    return this.beerQuery.getHasCache()
      ? of(this.beerQuery.getEntity(id))
      : request$;
  }

  // Make post call to server to add beer to list. If success, get new list and overwrite cached list.
  addBeer(beer: Partial<Beer>): Observable<Beer[]> {
    return this.httpClient
      .post(`${environment.serverUrl}/beer`, {
        name: beer.name,
        breweryName: beer.breweryName,
        image: beer.image,
        rating: beer.rating,
        amount: beer.amount,
        description: beer.description,
        price: beer.price,
      })
      .pipe(
        switchMap(_ => {
          return this.httpClient
            .get<any[]>(`${environment.serverUrl}/beer`)
            .pipe(
              map(entities => {
                const beers = entities.map(entity =>
                  this.beerAdapter.adapt(entity)
                );
                this.beerStore.set(beers);
                return beers;
              })
            );
        })
      );
  }

  // Make patch call to server to update beer from list. If success, get new list and overwrite cached list.
  updateBeer(id: number, beer: Partial<Beer>): Observable<Beer[]> {
    return this.httpClient
      .patch(`${environment.serverUrl}/beer/${id}`, {
        name: beer.name,
        breweryName: beer.breweryName,
        image: beer.image,
        rating: beer.rating,
        amount: beer.amount,
        description: beer.description,
        price: beer.price,
      })
      .pipe(
        switchMap(_ => {
          return this.httpClient
            .get<any[]>(`${environment.serverUrl}/beer`)
            .pipe(
              map(entities => {
                const beers = entities.map(entity =>
                  this.beerAdapter.adapt(entity)
                );
                this.beerStore.set(beers);
                return beers;
              })
            );
        })
      );
  }

  // Make delete call to server to delete beer from list. If success, get new list and overwrite cached list.
  removeBeer(id: number) {
    return this.httpClient.delete(`${environment.serverUrl}/beer/${id}`).pipe(
      map(_ => {
        const request$ = this.httpClient
          .get<any[]>(`${environment.serverUrl}/beer`)
          .pipe(
            map(entities => {
              const beers = entities.map(entity =>
                this.beerAdapter.adapt(entity)
              );
              this.beerStore.set(beers);
              return beers;
            })
          );
      })
    );
  }
}
