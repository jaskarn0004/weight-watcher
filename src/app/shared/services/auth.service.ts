import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as moment from "moment";
import { tap } from 'rxjs/operators';
import { config } from 'src/app/config';

@Injectable({ providedIn: "root" })
export class AuthService {
  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post(`${config.apiUrl}/login/authenticate`, {
      email: email,
      password: password
    }).pipe(tap(res => this.setSession(res)));
  }

  private setSession(authResult) {
    console.log(JSON.stringify(authResult))
    const expiresAt = moment().add(3600, 'second');

    localStorage.setItem('id_token', authResult.token);

    // let jwtData = authResult.token.split('.')[1]
    // let decodedJwtJsonData = window.atob(jwtData)
    // let decodedJwtData = JSON.parse(decodedJwtJsonData)
    // let scopes = decodedJwtData.scopes
    // localStorage.setItem("roles", scopes);

    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    localStorage.removeItem("id_token");
    // localStorage.removeItem("roles");
    localStorage.removeItem("expires_at");
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

}
