import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  getMethod(url: string) {
    return this.http.get(url);
  }
  post(url: string, param: any) {
    return this.http.post(url, param);
  }
}
