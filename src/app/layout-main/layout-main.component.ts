import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-main',
  templateUrl: './layout-main.component.html',
  styleUrls: ['./layout-main.component.styl'],
})
export class LayoutMainComponent implements OnInit {
  constructor(private router: Router) {}

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
}
