import { Component, OnInit } from '@angular/core';
import { BeerArchiveService } from 'src/app/core/services/beer-archive.service';
import { Beer } from 'src/app/core/models/beer/beer.model';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.scss'],
})
export class BeerDetailComponent implements OnInit {
  beer$: Observable<Beer | undefined> | undefined;

  constructor(
    private beerArchiveService: BeerArchiveService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  // Get beer info observable on init via service
  ngOnInit() {
    this.beer$ = this.route.queryParamMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        console.log(id);
        if (!id) {
          this.router.navigate(['']);
          return of(undefined);
        }
        return this.beerArchiveService.getBeer(id);
      })
    );
  }

  // Route back to overview
  toOverview() {
    this.router.navigate(['']);
  }
}
