import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

interface UserInfo {
  username: String;
}
@Component({
  selector: 'app-layout-main',
  templateUrl: './layout-main.component.html',
  styleUrls: ['./layout-main.component.styl'],
})
export class LayoutMainComponent implements OnInit {
  constructor(private router: Router, private userService: UserService) {
    this.isLogin = this.userService.isLogin;
    this.userInfo = { ...this.userService.userInfo };
  }

  isLogin: Boolean = false;
  userInfo: UserInfo = { username: '' };

  ngOnInit(): void {}

  goLogin(): void {
    this.router.navigateByUrl('/login');
  }

  goBlog(): void {
    this.router.navigateByUrl('/blog');
  }

  goHome(): void {
    this.router.navigateByUrl('/home');
  }

  goDemo(): void {
    this.router.navigateByUrl('/demo');
  }

  handleLogout(): void {
    this.userService.removerUserInfo();
    this.userService.clearUserInfo();
  }
}
