import { Component, Input, OnInit } from '@angular/core';
import { headerBody } from 'src/app/home/interfaces/bodyDetail.intetace';

@Component({
  selector: 'app-body-detail',
  templateUrl: './body-detail.component.html',
  styles: [
  ]
})
export class BodyDetailComponent implements OnInit {

  constructor() { }
  @Input('paramsBody') paramsBody!:headerBody;

  ngOnInit(): void {
  }

}
