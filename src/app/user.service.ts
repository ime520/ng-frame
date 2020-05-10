import { Injectable } from '@angular/core';

interface UserInfo {
  username: String;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {
    this.userInfo = this.getStoreUserInfo();
    this.isLogin = !!(this.userInfo && this.userInfo.username);
  }
  isLogin: Boolean = false;
  userInfo: UserInfo = { username: '' };
  storeUserInfo(userInfo): void {
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  }
  getStoreUserInfo(): UserInfo {
    return JSON.parse(localStorage.getItem('userInfo'));
  }
  removerUserInfo(): void {
    localStorage.removeItem('userInfo');
  }
  clearUserInfo(): void {
    this.userInfo = { username: '' };
    this.isLogin = false;
  }
}
