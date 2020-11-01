import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffersRoutingModule } from './offers-routing.module';
import { OffersComponent } from './pages/offersList/offers.component';
import { CardOffersComponent } from './components/card-offers/card-offers.component';
import { CustomMaterialModule } from '../core/material.module';
import { DetailsComponent } from './pages/details/details.component';


@NgModule({
  declarations: [OffersComponent, CardOffersComponent, DetailsComponent],
  imports: [
    CommonModule,
    OffersRoutingModule,
    CustomMaterialModule
  ]
})
export class OffersModule { }
