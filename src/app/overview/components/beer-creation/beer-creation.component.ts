import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BeerArchiveService } from 'src/app/core/services/beer-archive.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Subscription } from 'rxjs';
import { Beer } from 'src/app/core/models/beer/beer.model';

@Component({
  selector: 'app-beer-creation',
  templateUrl: './beer-creation.component.html',
  styleUrls: ['./beer-creation.component.scss'],
})
export class BeerCreationComponent implements OnDestroy {
  subscriptions: Subscription = new Subscription();
  beerForm: FormGroup;

  // Create FormGroup with FormControls on construction. If Beer data is present, fill in FormGroup values.
  constructor(
    private beerArchiveService: BeerArchiveService,
    private dialogRef: MatDialogRef<BeerCreationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    const beer: Beer | undefined = this.data ? this.data.beer : undefined;
    this.beerForm = new FormGroup({
      name: new FormControl(beer ? beer.name : '', [Validators.required]),
      breweryName: new FormControl(beer ? beer.breweryName : '', [
        Validators.required,
      ]),
      amount: new FormControl(undefined, [
        Validators.required,
        Validators.min(0),
      ]),
      rating: new FormControl(undefined, [
        Validators.required,
        Validators.min(0),
        Validators.max(100),
      ]),
      image: new FormControl(beer ? beer.image : '', [Validators.required]),
      description: new FormControl(beer ? beer.description : '', [
        Validators.required,
      ]),
      price: new FormControl(undefined, [Validators.required]),
    });
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  // Add beer and close dialog.
  submitBeer() {
    this.subscriptions.add(
      this.beerArchiveService.addBeer(this.beerForm.value).subscribe(res => {
        this.dialogRef.close();
      })
    );
  }
}
