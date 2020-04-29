import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  username: string = '';
  password: string = '';
  ngOnInit(): void {}
  submitForm(formName) {
    console.log(formName.invalid);
  }
}
