import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-signup',
  styleUrl: './signup.css',
  templateUrl: './signup.html',
})
export class Signup {

  fullDetails = new FormGroup({
    name: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    mobile: new FormControl("", [Validators.required, Validators.pattern(/^[0-9]{10}$/)]),
    password: new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
    gender: new FormControl("", [Validators.required])
  })

  get name() {
    return this.fullDetails.get("name")
  }

  get email() {
    return this.fullDetails.get("email")
  }

  get mobile() {
    return this.fullDetails.get("mobile")
  }

  get password() {
    return this.fullDetails.get("password")
  }

  get gender() {
    return this.fullDetails.get("gender")
  }

  handleSubmit() {
    console.log("submit triggered : ...");
    console.log("full detalis : ", this.fullDetails.value);
  }

  handleReset() {
    console.log("before reset : ", this.fullDetails.value);
    this.fullDetails.reset()
    console.log("after reset : ", this.fullDetails.value);
  }

}
