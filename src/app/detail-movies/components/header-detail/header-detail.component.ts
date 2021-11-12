import { Component, Input, OnInit } from '@angular/core';
import { headerDetail } from 'src/app/home/interfaces/headerDetail.interface';

@Component({
	selector: 'app-header-detail',
	templateUrl: './header-detail.component.html',
	styles: [
		`
			.border-radius-5 {
				border-radius: 5px;
			}
		`,
	],
})
export class HeaderDetailComponent implements OnInit {
	constructor() {}

    @Input('paramsHeaders') paramsHeaders!:headerDetail;

	ngOnInit(): void {}
}
