import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() loginComplete = new EventEmitter();

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.maxLength(7), Validators.minLength(7)]),
    password: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.minLength(5)])
  })
  constructor() { }

  ngOnInit() {
    this.loginForm.controls.username.valueChanges.subscribe(val => {
      if (val !== val.toUpperCase()) {
        this.loginForm.controls.username.setValue(val.toUpperCase());
      }
    });
}

submitForm() {
  let formData = this.loginForm.value;
  console.log(`Login for ${formData.username}`);
  this.loginComplete.emit(formData.username)
}
}
