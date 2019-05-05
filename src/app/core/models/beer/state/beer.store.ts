import { EntityStore, EntityState, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { Beer } from 'src/app/core/models/beer/beer.model';

export interface State extends EntityState<Beer> {}

@Injectable({
  providedIn: 'root',
})
@StoreConfig({
  name: 'beers',
  cache: {
    ttl: 360000,
  },
})
export class BeerStore extends EntityStore<State, Beer> {
  constructor() {
    super();
  }
}
