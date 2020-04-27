import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import Home from '../views/home/home.component';
import About from '../views/about/about.component';
import Login from '../views/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  { path: 'about', component: About },
  { path: 'login', component: Login },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
