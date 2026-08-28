import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { email, FormField } from '@angular/forms/signals';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {

  loginDetails = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
  })

  get email() {
    return this.loginDetails.get("email")
  }

  get password() {
    return this.loginDetails.get("password")
  }

  handleSubmit() {
    console.log("submit triggered : ...");
    console.log("Login detalis : ", this.loginDetails.value);
  }

  handleReset() {
    console.log("before reset : ", this.loginDetails.value);
    this.loginDetails.reset()
    console.log("after reset : ", this.loginDetails.value);
  }
}
