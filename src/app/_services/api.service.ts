import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { APP_SETTINGS } from '../../_settings/config';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  navigationData = 'assets/data/data.json';
  constructor(private http: HttpClient) {  }

  // createAuthorizationHeader() {
  //   let headers = new Headers();
  //   headers.append('secret-key', APP_SETTINGS._token);
  // }

  // _API() {
  //   // this.createAuthorizationHeader();
  //   return this.http.get(APP_SETTINGS._API, {
  //     headers: {
  //       'secret-key': APP_SETTINGS._token
  //     }
  //   })
  //     .map((res) => {
  //       console.log('service: ', res);
  //       res
  //     })
  // }

  getNavigation(): Observable<any>{
    return this.http.get(this.navigationData).map(res => {
      return res;
    })
  }

}