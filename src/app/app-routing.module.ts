import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutMainComponent } from './layout-main/layout-main.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BlogComponent } from './blog/blog.component';
import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutMainComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'demo', component: DemoComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
