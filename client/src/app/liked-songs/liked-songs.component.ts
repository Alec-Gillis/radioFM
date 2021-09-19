import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SpotifyGeneralService } from '../spotify-general.service';

@Component({
  selector: 'app-liked-songs',
  templateUrl: './liked-songs.component.html',
  styleUrls: ['./liked-songs.component.scss']
})
export class LikedSongsComponent implements OnInit {

  constructor(private spotify: SpotifyGeneralService) { }

  topSongs: any;


  ngOnInit(): void {
    this.getTopSongs()
  }

  getTopSongs(): void {
    this.spotify.getTopTracks().subscribe(tracks => this.topSongs = tracks);
  }

}
