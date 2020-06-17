import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  loginService(email: string) {
        
  }

  private handleError(error:HttpErrorResponse) {
    console.log(error);
    console.log(error.message);
    return throwError("Server Error!");
  }

}
