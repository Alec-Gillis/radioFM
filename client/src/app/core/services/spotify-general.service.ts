import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyGeneralService {

  constructor() { }

  getTopTracks(): Observable<any> {
    const t = of(10);
    return t;
  }
}
