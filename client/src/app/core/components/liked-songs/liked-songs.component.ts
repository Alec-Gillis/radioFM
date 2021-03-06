import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SpotifyGeneralService } from '../../services/spotify-general.service';

@Component({
  selector: 'app-liked-songs',
  templateUrl: './liked-songs.component.html',
  styleUrls: ['./liked-songs.component.scss']
})
export class LikedSongsComponent implements OnInit {

  constructor(private spotify: SpotifyGeneralService) { }

  topSongs: any;
  t: any;

  ngOnInit(): void {
    this.getTopSongs()
    this.test()
  }

  getTopSongs(): void {
    this.spotify.getTopTracks().subscribe(tracks => this.topSongs = tracks);
  }

  test(): void {
    this.spotify.test().subscribe(data => this.t = data);
  }

}
