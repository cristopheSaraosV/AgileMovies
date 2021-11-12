import { Component, Input, OnInit } from '@angular/core';
import { Datum } from '../../interfaces/movieNowPlaying.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent implements OnInit {

  constructor() { }

  @Input('movie') movie!:Datum;

  ngOnInit(): void {
}

}
