import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import api from '../api/index';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

interface Form {
  invalid: boolean;
}
interface Response {
  status: Number;
  data: { userInfo: { username: String } };
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl'],
})
export class LoginComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private userService: UserService,
    private router: Router
  ) {}

  username = '';
  password = '';
  ngOnInit(): void {}
  submitForm(formName: Form) {
    const valid = !formName.invalid;
    if (valid) {
      this.http
        .post(api.login, { username: this.username, password: this.password })
        .subscribe((res: Response) => {
          if (res.status === 200) {
            this.userService.isLogin = true;
            this.userService.userInfo = res.data.userInfo;
            this.userService.storeUserInfo(res.data.userInfo);
            this.router.navigateByUrl('/home');
          }
        });
    }
  }
}
