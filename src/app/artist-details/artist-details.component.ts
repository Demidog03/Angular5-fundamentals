import {Component, Input, OnInit} from '@angular/core';
import {Artist} from '../app.component';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html'
})
export class ArtistDetailsComponent implements OnInit {
  @Input('artist') artist: Artist;
  constructor() { }

  ngOnInit() {
  }

}
