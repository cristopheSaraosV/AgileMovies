import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailMovieComponent } from './components/detail-movie/detail-movie.component';

import { BodyDetailComponent } from './components/body-detail/body-detail.component';
import { HeaderDetailComponent } from './components/header-detail/header-detail.component';
import { FooterDetailComponent } from './components/footer-detail/footer-detail.component';

@NgModule({
	declarations: [
		DetailMovieComponent,
		BodyDetailComponent,
		DetailMovieComponent,
        HeaderDetailComponent,
        FooterDetailComponent
	],
	exports: [DetailMovieComponent],
	imports: [CommonModule],
})
export class DetailMoviesModule {}
