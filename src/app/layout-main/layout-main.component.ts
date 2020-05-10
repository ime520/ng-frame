import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

interface UserInfo {
  username: String;
}
@Component({
  selector: 'app-layout-main',
  templateUrl: './layout-main.component.html',
  styleUrls: ['./layout-main.component.styl'],
})
export class LayoutMainComponent implements OnInit {
  constructor(
    private router: Router,
    private userService: UserService,
    private snackBar: MatSnackBar
  ) {
    this.isLogin = this.userService.isLogin;
    this.userInfo = { ...this.userService.userInfo };
  }

  isLogin: Boolean = false;
  userInfo: UserInfo = { username: '' };

  ngOnInit(): void {}
  ngDoCheck(): void {
    this.isLogin = this.userService.isLogin;
  }

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

  goPubArticle(): void {
    this.router.navigateByUrl('/pubArticle');
  }

  handleLogout(): void {
    this.userService.removerUserInfo();
    this.userService.clearUserInfo();
    this.snackBar.open('退出登录成功！', '', {
      duration: 2000,
    });
  }
}
