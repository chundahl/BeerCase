import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatIconModule,
  MatGridListModule,
  MatCardModule,
  MatButtonModule,
  MatDialogModule,
  MatBottomSheetModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatSliderModule,
  MatSelectModule,
} from '@angular/material';

const materialModules = [
  MatToolbarModule,
  MatIconModule,
  MatGridListModule,
  MatCardModule,
  MatButtonModule,
  MatDialogModule,
  MatBottomSheetModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
];

@NgModule({
  declarations: [],
  imports: materialModules,
  exports: materialModules,
})
export class MaterialModule {}
