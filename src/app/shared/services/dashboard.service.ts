import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { config } from 'src/app/config';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) {}

  loadData() {
    return this.http.get(`${config.apiUrl}/hello`, {responseType: "text"}).pipe(
      map(data => {return data}),
      catchError(this.handleError)
    );       
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    console.log(error.message);
    return throwError("Server Error!");
  }
}
