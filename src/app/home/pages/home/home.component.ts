import { Component, OnInit } from '@angular/core';
import { Datum } from '../../interfaces/movieNowPlaying.interface';
import { MovieService } from '../../services/movie.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styles: [],
})
export class HomeComponent implements OnInit {
	constructor(private movieService: MovieService) {}

	listMostPopularMovies: Datum[] = [];

	page: number = 1;
	ngOnInit(): void {
		this.getMostPopularMovies();
	}

	getMostPopularMovies() {
		this.movieService.getMostPopularMovies(this.page).subscribe(
			(res) => {
				this.listMostPopularMovies = res;
			},
			(err) => {}
		);
	}

	loadMoreMovies() {
		this.movieService.getMostPopularMovies(this.page+1).subscribe(
			(res) => {
                this.page = this.page+1 
                res.forEach((movie:any) => {
                    this.listMostPopularMovies.push(movie);
                    
                });
			},
			(err) => {}
		);
	}
}
