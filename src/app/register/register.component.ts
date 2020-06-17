import { Component, OnInit } from '@angular/core';
import { RegisterServiceService } from 'src/app/shared/services/register-service.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      private registerServiceService: RegisterServiceService,
      private router: Router,
      //private authenticationService: AuthenticationService,
      //private userService: RegisterServiceService,
      private alertService: AlertService
  ) {
    
      // redirect to home if already logged in
      //if (this.authenticationService.currentUserValue) {
          //this.router.navigate(['/']);
     // }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        gender: ['', Validators.required],
        age: ['', Validators.required],
        weight: ['', Validators.required],
        height: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        passWord: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
     //debugger;
      this.submitted = true;

      // reset alerts on submit
      //this.alertService.clear();

      // stop here if form is invalid
      //if (this.registerForm.invalid) {
         // return;
      //}

      this.loading = true;
      console.log(this.registerForm);
      //alert(JSON.stringify(this.registerForm.value));
       this.registerServiceService.registerService(this.registerForm.value)
           .pipe(first())
           .subscribe(
              data => {
                  this.alertService.success('Registration successful', true);
                   this.router.navigate(['/login']);
               },
               error => {
                   this.alertService.error(error);
                   this.loading = false;
     
               });
  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}