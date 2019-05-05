import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { BeerProfileCardComponent } from '../overview/components/beer-profile-card/beer-profile-card.component';
import { BeerDetailComponent } from '../detail/beer-detail/beer-detail.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MaterialModule, HttpClientModule],
  exports: [HeaderComponent],
})
export class CoreModule {}
