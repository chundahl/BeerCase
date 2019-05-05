import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridOverviewComponent } from 'src/app/overview/components/grid-overview/grid-overview.component';
import { BeerDetailComponent } from 'src/app/detail/beer-detail/beer-detail.component';

const routes: Routes = [
  { path: '', component: GridOverviewComponent },
  { path: 'detail', component: BeerDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
