import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Beer } from 'src/app/core/models/beer/beer.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PunkAPIService {
  constructor(private httpClient: HttpClient) {}

  // Get all beers from PunkAPI and convert response to a list of Beer-objects.
  getBeers(): Observable<Beer[]> {
    return this.httpClient.get<any[]>(`${environment.punkApiUrl}/beers`).pipe(
      map(entities => {
        return entities.map(
          entity =>
            new Beer(
              entity.id,
              entity.name,
              0,
              50,
              'PunkAPI',
              entity.image_url,
              entity.description,
              ''
            )
        );
      })
    );
  }
}
