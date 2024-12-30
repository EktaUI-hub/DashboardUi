import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', 
})
export class DashboardService {
  private apiUrl = 'https://api.jsonbin.io/v3/b/673af531ad19ca34f8cbe3cb';

  constructor(private http: HttpClient) {}

  // Method to fetch data from the API
  fetchData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
