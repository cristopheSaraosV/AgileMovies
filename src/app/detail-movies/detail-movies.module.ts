import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailMovieComponent } from './componets/detail-movie/detail-movie.component';



@NgModule({
  declarations: [
    DetailMovieComponent
  ],
  exports:[
      DetailMovieComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class DetailMoviesModule { }
