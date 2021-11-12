import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CardComponent } from './components/card/card.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';


@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IvyCarouselModule
  ]
})
export class HomeModule { }
