import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CardComponent } from './components/card/card.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { MenuComponent } from './components/menu/menu.component';
import { DetailComponent } from './pages/detail/detail.component';
import { DetailMoviesModule } from '../detail-movies/detail-movies.module';


@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    CardComponent,
    MenuComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IvyCarouselModule,
    DetailMoviesModule
  ]
})
export class HomeModule { }
