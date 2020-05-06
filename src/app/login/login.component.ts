import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import api from '../api/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl'],
})
export class LoginComponent implements OnInit {
  constructor(private http: HttpClient) {}

  username: string = '';
  password: string = '';
  ngOnInit(): void {}
  submitForm(formName) {
    const valid = !formName.invalid;
    if (valid) {
      this.http
        .post(api.login, { username: this.username, password: this.password })
        .subscribe((res) => {
          console.log(res, '响应了');
        });
    }
  }
}
