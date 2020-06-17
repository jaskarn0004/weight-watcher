import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginModel: any = {};
  loginError: string;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.loginError = "";
  }

  onLogin(dirtyForm: boolean) {
    const email: string = this.loginModel.email;
    const password: string = this.loginModel.password;
    console.log("dirtyForm: " + dirtyForm);
    if (!dirtyForm) {
      this.loginError = "Please Enter Credentials";

    } else {
      console.log("email: " + email);
      this.authService.login(email, password).subscribe(respData => {
        this.router.navigate(["/dashboard"]);
      },
        error => {
          this.loginError = "**Email Id or Password is Invalid";
          console.log(JSON.stringify(error));
        });

    }

  }

}
