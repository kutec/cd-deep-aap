import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_SETTINGS } from '../../_settings/config';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private http: HttpClient) { console.log(APP_SETTINGS) }

  _API() {
    this.http.get(APP_SETTINGS._API)
      .map((response) => {
        console.log(response);
        response
      })
  }

}