import {Component, Input, OnInit} from '@angular/core';
import {Artist} from '../app.component';

@Component({
  selector: 'app-artist-items',
  templateUrl: './artist-items.component.html'
})
export class ArtistItemsComponent implements OnInit {
  @Input('artist') artist: Artist;
  constructor() { }

  ngOnInit() {
  }
}
