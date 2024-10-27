import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SortingDataService {
  // _message = 'this is testing';
  //url = 'https://api.restful-api.dev/objects';
  constructor(private http: HttpClient) {}
  users(): Observable<any> {
    return this.http.get('https://api.restful-api.dev/objects');
    //.subscribe((data) => {
    //console.log(data);
    // return data;
    //});
  }
}
