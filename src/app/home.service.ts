import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  //   make the call to the space x API and get the flights.
  //   TODO - interface for the response
  getMissionsData(): Observable<any> {
    return this.http.get('http://localhost:8000/get_missions_data');
  }
}
