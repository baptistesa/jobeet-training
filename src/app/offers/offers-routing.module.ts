import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './pages/details/details.component';

import { OffersComponent } from './pages/offersList/offers.component';

const routes: Routes = [
  { path: '', component: OffersComponent },
  { path: 'offer/:id', component: DetailsComponent, data: { title: 'Details' }},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffersRoutingModule { }
