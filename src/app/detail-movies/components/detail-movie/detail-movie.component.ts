import { Component, Input, OnInit } from '@angular/core';
import { headerDetail } from 'src/app/home/interfaces/headerDetail.interface';
import { headerBody } from 'src/app/home/interfaces/bodyDetail.intetace';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styles: [
  ]
})
export class DetailMovieComponent implements OnInit {

  constructor() { }

  @Input('paramsHeaders') paramsHeaders!:headerDetail;
  @Input('paramsBody') paramsBody!: headerBody;

  ngOnInit(): void {
  }

}
