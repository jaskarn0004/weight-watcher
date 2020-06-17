import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { User } from '../model/user.model';
import { config } from 'src/app/config';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  constructor(private http: HttpClient) { }

  registerService(user: User) {    
    return this.http.post<User>(`${config.apiUrl}/register`, user).pipe(
      catchError(this.handleError)
    );       
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    console.log(error.message);
    return throwError("Server Error!");
  }
}
