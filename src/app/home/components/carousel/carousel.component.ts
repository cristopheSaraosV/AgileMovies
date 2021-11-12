import { Component, OnInit } from '@angular/core';
import { Datum } from '../../interfaces/movieNowPlaying.interface';
import { MovieNowPlayingSmall } from '../../interfaces/movieNowPlayingSmall.interface';
import { MovieService } from '../../services/movie.service';

@Component({
	selector: 'app-carousel',
	templateUrl: './carousel.component.html',
	styles: [],
})
export class CarouselComponent implements OnInit {
	constructor(private movieService: MovieService) {}

	listMovieNowPlaying: any = [];

	ngOnInit(): void {
		this.getNow_playing();
	}

	getNow_playing() {
		this.movieService.getNow_playing(1).subscribe(
			(res) => {
				this.listMovieNowPlaying = res;
			},
			(err) => {
				console.log(err.error.message);
			}
		);
	}
}
