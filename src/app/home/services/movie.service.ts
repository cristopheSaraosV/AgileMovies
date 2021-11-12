import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/auth.service';
import { environment } from 'src/environments/environment';
import { MovieCastResAPI } from '../interfaces/movieCast.interface';
import { MovieNowPlayingResAPI } from '../interfaces/movieNowPlaying.interface';

@Injectable({
	providedIn: 'root',
})
export class MovieService {
	constructor(private http: HttpClient, private authService: AuthService) {}

	private _urlBase = environment.URLBASE;

	getNow_playing(page: number = 1) {
		const url: string = `${this._urlBase}/movies/now_playing?page=${page}`;
		const headers = new HttpHeaders().set(
			'authorization',
			'Bearer ' + localStorage.getItem('token') || ''
		);
		return this.http
			.get<MovieNowPlayingResAPI>(url, { headers })
			.pipe(
				map((resp) => {
					return resp.data.map((movie) => ( {path: resp.imageBaseUrl + movie.backdrop_path  }));
				}),catchError( (err) => {
                    if(err.status == 401){
                        this.authService.refresh_token().subscribe( res => {
                            console.log(res);
                            this.getNow_playing();
                        });
                    }
                   return of([{path:''}])
                })
			);
	}

	getMostPopularMovies(page: number = 1) {
		const url: string = `${this._urlBase}/movies/popular?page=${page}`;
		const headers = new HttpHeaders().set(
			'authorization',
			'Bearer ' + localStorage.getItem('token') || ''
		);
		return this.http
			.get<MovieNowPlayingResAPI>(url, { headers })
			.pipe(
				map((resp) => {
					return resp.data.map((movie) => {
						return {
                            baseUrl:resp.imageBaseUrl,
							img: resp.imageBaseUrl + movie.backdrop_path,
							adult:movie.adult,
                            backdrop_path:movie.backdrop_path,
                            genre_ids:movie.genre_ids,
                            id:movie.id,
                            original_language:movie.original_language,
                            original_title:movie.original_title,
                            overview:movie.overview,
                            popularity:movie.popularity,
                            poster_path:movie.poster_path,
                            release_date:movie.release_date,
                            title:movie.title,
                            video:movie.video,
                            vote_average:movie.vote_average,
                            vote_count:movie.vote_count,
						};
					});
				}),catchError( (err) => {
                    if(err.status == 401){
                        this.authService.refresh_token().subscribe( res => {
                            console.log(res);
                            this.getNow_playing();
                        });
                    }
                    return of(err.error.message);
                })
                
			);
	}

    getMovieCast(idMovie:string ){
        const url: string = `${this._urlBase}/movies/${idMovie}/actors`;
		const headers = new HttpHeaders().set(
			'authorization',
			'Bearer ' + localStorage.getItem('token') || ''
		);
		return this.http
			.get<MovieCastResAPI>(url, { headers })
    }
}
