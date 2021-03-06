import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  basesUrl = 'https://www.thecocktaildb.com/api/json/v1/1/';
  constructor(private http: HttpClient) { }
  getMethod(url: string) {
    return this.http.get(this.basesUrl + url);
  }
  post(url: string, param: any) {
    return this.http.post(url, param);
  }
}
