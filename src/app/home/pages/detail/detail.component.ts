import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { headerBody } from '../../interfaces/bodyDetail.intetace';
import { headerDetail } from '../../interfaces/headerDetail.interface';

@Component({
	selector: 'app-detail',
	templateUrl: './detail.component.html',
	styles: [],
})
export class DetailComponent implements OnInit {
	constructor(private ruteActive: ActivatedRoute) {}

    paramsHeaders:headerDetail = {
        nameMovie:'',
        url:''
    } 
    paramsBody:headerBody = {
        resumen:'',
        url:''
    } 
    // const paramsBody    =
    // const paramsFooter  =

	ngOnInit(): void {
        if(this.ruteActive.snapshot.params){
            const { original_title,img,overview,baseUrl,poster_path } = this.ruteActive.snapshot.params
            this.paramsHeaders = {
                nameMovie:original_title,
                url: img
            }
            this.paramsBody = {
                resumen:overview,
                url: baseUrl+poster_path
            }

        }

	}




}
