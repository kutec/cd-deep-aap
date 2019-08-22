import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_SETTINGS } from '../../_settings/config';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private http: HttpClient) { console.log(APP_SETTINGS) }

  // createAuthorizationHeader() {
  //   let headers = new Headers();
  //   headers.append('secret-key', APP_SETTINGS._token);
  // }

  _API() {
    // this.createAuthorizationHeader();
    return this.http.get(APP_SETTINGS._API, {
      headers: {
        'secret-key': APP_SETTINGS._token
      }
    })
      .map((res) => {
        console.log('service: ', res);
        res
      })
  }

}