import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { BeerDetailComponent } from 'src/app/detail/beer-detail/beer-detail.component';

@NgModule({
  declarations: [BeerDetailComponent],
  imports: [CommonModule, MaterialModule],
  exports: [BeerDetailComponent],
})
export class DetailModule {}
