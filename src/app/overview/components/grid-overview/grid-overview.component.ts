import { Component, OnInit, OnDestroy } from '@angular/core';
import { BeerArchiveService } from 'src/app/core/services/beer-archive.service';
import { Observable, Subscription } from 'rxjs';
import { Beer } from 'src/app/core/models/beer/beer.model';
import { MatBottomSheet } from '@angular/material';
import { CreationMethodSheetComponent } from 'src/app/overview/components/creation-method-sheet/creation-method-sheet.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid-overview',
  templateUrl: './grid-overview.component.html',
  styleUrls: ['./grid-overview.component.scss'],
})
export class GridOverviewComponent implements OnDestroy {
  beers$: Observable<Beer[]>;
  private subscriptions: Subscription = new Subscription();

  constructor(
    private beerArchiveService: BeerArchiveService,
    private bottomSheet: MatBottomSheet,
    private router: Router
  ) {
    this.beers$ = this.beerArchiveService.getBeers();
  }

  // Show bottom sheet when add beer card is clicked.
  addBeer() {
    console.log('add beer');
    const sheetRef = this.bottomSheet.open(CreationMethodSheetComponent);

    this.subscriptions.add(
      sheetRef.afterDismissed().subscribe(_ => {
        console.log('Refresh beers');
        this.beers$ = this.beerArchiveService.getBeers();
      })
    );
  }

  // Navigate to beer detail for specific id
  gotoBeer(id: number) {
    this.router.navigate(['detail'], { queryParams: { id } });
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
