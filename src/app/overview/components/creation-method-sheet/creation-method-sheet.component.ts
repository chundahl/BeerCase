import { Component, OnDestroy } from '@angular/core';
import { MatDialog, MatBottomSheetRef, MatDialogRef } from '@angular/material';
import { BeerCreationComponent } from 'src/app/overview/components/beer-creation/beer-creation.component';
import { Subscription } from 'rxjs';
import { BeerSelectionComponent } from 'src/app/overview/components/beer-selection/beer-selection.component';

@Component({
  selector: 'app-creation-method-sheet',
  templateUrl: './creation-method-sheet.component.html',
  styleUrls: ['./creation-method-sheet.component.scss'],
})
export class CreationMethodSheetComponent implements OnDestroy {
  private subscriptions: Subscription = new Subscription();

  constructor(
    private dialog: MatDialog,
    private bottomSheetRef: MatBottomSheetRef<CreationMethodSheetComponent>
  ) {}

  // Show BeerCreationComponent as dialog
  presentBeerCreation() {
    const dialogRef = this.dialog.open(BeerCreationComponent);
    this.dismissSheetWhenDialogClosed(dialogRef);
  }

  // Show BeerSelectionComponent as dialog
  presentBeerSelection() {
    const dialogRef = this.dialog.open(BeerSelectionComponent);
    this.dismissSheetWhenDialogClosed(dialogRef);
  }

  // When opened dialog is closed, dismiss this bottom sheet
  dismissSheetWhenDialogClosed(
    dialogRef:
      | MatDialogRef<BeerSelectionComponent>
      | MatDialogRef<BeerCreationComponent>
  ) {
    this.subscriptions.add(
      dialogRef.afterClosed().subscribe(_ => {
        this.bottomSheetRef.dismiss();
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
