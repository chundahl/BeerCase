import { QueryEntity } from '@datorama/akita';
import { State, BeerStore } from 'src/app/core/models/beer/state/beer.store';
import { Beer } from 'src/app/core/models/beer/beer.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BeerQuery extends QueryEntity<State, Beer> {
  constructor(protected store: BeerStore) {
    super(store);
  }
}
