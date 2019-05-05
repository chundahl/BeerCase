import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridOverviewComponent } from './components/grid-overview/grid-overview.component';
import { MaterialModule } from 'src/app/material/material.module';
import { CoreModule } from 'src/app/core/core.module';
import { AddBeerCardComponent } from './components/add-beer-card/add-beer-card.component';
import { CreationMethodSheetComponent } from './components/creation-method-sheet/creation-method-sheet.component';
import { BeerCreationComponent } from './components/beer-creation/beer-creation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BeerSelectionComponent } from './components/beer-selection/beer-selection.component';
import { BeerProfileCardComponent } from 'src/app/overview/components/beer-profile-card/beer-profile-card.component';

@NgModule({
  declarations: [
    GridOverviewComponent,
    AddBeerCardComponent,
    CreationMethodSheetComponent,
    BeerCreationComponent,
    BeerSelectionComponent,
    BeerProfileCardComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [GridOverviewComponent, BeerProfileCardComponent],
  entryComponents: [
    CreationMethodSheetComponent,
    BeerCreationComponent,
    BeerSelectionComponent,
  ],
})
export class OverviewModule {}
