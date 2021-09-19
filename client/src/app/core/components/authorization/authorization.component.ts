import { Component, OnInit } from '@angular/core';
import { spotify_credentials } from 'src/environments/environment';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // This should eventually be handled by the backed since it passes sensitive data in the browser
  requestAuthorization() {
    let url = "https://accounts.spotify.com/authorize";
    url += "?client_id=" + spotify_credentials.client_id;
    url += "&response_type=code";
    url += "&redirect_uri=" + encodeURI(spotify_credentials.redirect_uri)
    url += "&show_dialog=true"
    url += "&scope=user-read-private user-read-email"
    console.log(url);
    window.location.href = url;
  }

}
