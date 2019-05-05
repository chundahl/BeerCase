import { Injectable } from '@angular/core';
import { Beer } from 'src/app/core/models/beer/beer.model';
import { Adapter } from 'src/app/core/adapter';

@Injectable({
  providedIn: 'root',
})
export class BeerAdapter implements Adapter<Beer> {
  // Create Beer object
  adapt(item: any): Beer {
    return new Beer(
      item.id,
      item.name,
      item.amount,
      item.rating,
      item.breweryName,
      item.image,
      item.description,
      item.price
    );
  }
}
