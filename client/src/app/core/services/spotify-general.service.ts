import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { spotify_credentials } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyGeneralService {
  public httpOptions: any;

  constructor(private _http: HttpClient) {
    // Http Header Options
    this.httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json; charset-utf-8',
          'BrowserToken': 'auth_Token'
        })
    }
  }


  getTopTracks(): Observable<any> {
    const t = of(10);
    return t;
  }

  test(): Observable<any> {
    // your application requests authorization
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      headers: {
        'Authorization': `Basic ${spotify_credentials.client_id}:${spotify_credentials.client_secret}`
      },
      form: {
        grant_type: 'client_credentials'
      },
      json: true
    };
    //this._http.post('https://accounts.spotify.com/api/token', )

    let x = this._http.get('https://api.spotify.com/v1/browse/new-releases');
    x = of(x);
    return x;
  }
}
