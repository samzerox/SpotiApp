import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log('spotify listo');
   }

   getNewReleases() {
     const headers = new HttpHeaders({
       'Authorization': 'Bearer BQBMu7YOWbkxUo4sqfesjs_EasBFfiS9cb9dRfV4WkCdbQDWzmy3uKZEGAY71GMojfIvYX-2lAYBxHrKCv4'
     });

      return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });
   }
}
