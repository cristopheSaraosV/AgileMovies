import { Component, Input, OnInit } from '@angular/core';
import { Datum } from 'src/app/home/interfaces/movieCast.interface';
import { MovieService } from 'src/app/home/services/movie.service';

@Component({
	selector: 'app-footer-detail',
	templateUrl: './footer-detail.component.html',
	styles: [],
})
export class FooterDetailComponent implements OnInit {
	constructor(private movieService: MovieService) {}

	@Input('idMovie') idMovie!: string;

    listCast!: Datum[];
    baseURL! :string;

	ngOnInit(): void {
		this.movieService.getMovieCast(this.idMovie).subscribe((res) => {
            this.baseURL =res.imageBaseUrl;     
            this.listCast = res.data
        });
	}
}
