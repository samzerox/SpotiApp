import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log('spotify listo');
   }

   getQuery( query: string ) {
     const url = `https://api.spotify.com/v1/${ query }`;

     const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDzJf-PGoYL1my_2f3I8cgGG8VzvNeR1cRIMzKdkeY27x6D94M-5kdS8I-W4uvnOAvyUlFq5SqnkeOm_kE'
    });

    return this.http.get( url, { headers });
   }

   getNewReleases() {

    return this.getQuery('browse/new-releases?limit=20')
            .pipe( map( data =>  data['albums'].items ) );
   }

   getArtista( termino: string ) {

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
            .pipe( map( data => data['artists'].items ) );
   }
}
