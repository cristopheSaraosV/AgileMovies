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
	numberOfMovies: number = 20;
	page: number = 1;

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

    returnMovie(movieNumber:number){
        console.log(movieNumber);
        if(this.numberOfMovies>=0){
            this.numberOfMovies = this.numberOfMovies +1; 
        }
    }


    getMoreMovie(movieNumber:number=1){
        if(this.numberOfMovies <= 20){
            this.numberOfMovies = this.numberOfMovies -1;
            if(movieNumber == 0){
                this.movieService.getNow_playing(this.page+1).subscribe(
                    (res) => {
                        this.listMovieNowPlaying = res;
                        this.page= this.page+1
                        res.map(( item => {
                            this.listMovieNowPlaying.push(item);
                        }))
                        if(this.numberOfMovies <=0 ){
                            this.numberOfMovies = 20;
                        }
                    },
                    (err) => {
                        console.log(err.error.message);
                    }
                );
            }
        }
        
        
        
    }
}
