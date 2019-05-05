import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { PunkAPIService } from 'src/app/core/services/punk-api.service';
import { Beer } from 'src/app/core/models/beer/beer.model';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';
import { BeerCreationComponent } from 'src/app/overview/components/beer-creation/beer-creation.component';

@Component({
  selector: 'app-beer-selection',
  templateUrl: './beer-selection.component.html',
  styleUrls: ['./beer-selection.component.scss'],
})
export class BeerSelectionComponent implements OnDestroy {
  beers$: Observable<Beer[]>;
  beerFormControl: FormControl;
  subscriptions: Subscription = new Subscription();

  constructor(
    private punkApiService: PunkAPIService,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<BeerSelectionComponent>
  ) {
    this.beers$ = this.punkApiService.getBeers();
    this.beerFormControl = new FormControl('', [Validators.required]);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  // Show BeerCreationComponent as a dialog. When BeerCreationComponent dialog is closed, close this dialog.
  presentBeerCreation() {
    const createBeerDialogRef = this.dialog.open(BeerCreationComponent, {
      data: { beer: this.beerFormControl.value },
    });
    this.subscriptions.add(
      createBeerDialogRef.afterClosed().subscribe(_ => {
        this.dialogRef.close();
      })
    );
  }
}
