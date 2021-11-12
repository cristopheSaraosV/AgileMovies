import { Component, OnInit } from '@angular/core';
import { Datum } from '../../interfaces/movieNowPlaying.interface';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor(
    private movieService: MovieService

  ) { }

  listMostPopularMovies: Datum[] = [];

  ngOnInit(): void {
        this.getMostPopularMovies(); 
  }


  getMostPopularMovies(){
    this.movieService.getMostPopularMovies(1).subscribe( res => {
        this.listMostPopularMovies = res;
    },err => {
        if(err.error.message == "jwt expired"){
            console.log('aaaa');
        }
    });
  }
}
