import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface Image {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface Artist {
  name: string;
  shortname: string;
  reknown: string;
  bio: string;
  highlighted: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      .list-group-item:first-child {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-top: 0;
      }
    `
  ]
})
export class AppComponent implements OnInit {
  query: string;
  artists: Artist[];
  images: Image[];
  currentArtist: Artist | null;

  showArtist(event, artist: Artist): void {
    if (artist.highlighted) {
      this.query = '';
      artist.highlighted = false;
      this.currentArtist = null;
      return;
    }
    this.query = artist.name;
    this.artists = this.artists.map(el => ({...el, highlighted: el.bio === artist.bio}));
    this.currentArtist = artist;
  }

  constructor(private http: HttpClient) {
    this.query = 'John';
    this.artists = [];
  }

  ngOnInit(): void {
    this.http.get<Omit<Artist, 'highlighted'>[]>('../assets/data.json').subscribe(
      data => {
        this.artists = data.map(el => ({...el, highlighted: false}));
      }
    );
  }
}
