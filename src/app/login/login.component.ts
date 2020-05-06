import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import api from '../api/index';

interface Form {
  invalid: boolean;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl'],
})
export class LoginComponent implements OnInit {
  constructor(private http: HttpClient) {}

  username = '';
  password = '';
  ngOnInit(): void {}
  submitForm(formName: Form) {
    const valid = !formName.invalid;
    console.log(typeof formName);
    if (valid) {
      this.http
        .post(api.login, { username: this.username, password: this.password })
        .subscribe((res) => {
          console.log(res, '响应了');
        });
    }
  }
}
