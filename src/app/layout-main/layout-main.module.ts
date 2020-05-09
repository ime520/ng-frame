import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutMainComponent } from './layout-main.component';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { BlogComponent } from '../blog/blog.component';
import { DemoComponent } from '../demo/demo.component';
import { HomeComponent } from '../home/home.component';

import { BlogModule } from '../blog/blog.module';

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
];
@NgModule({
  declarations: [LayoutMainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatToolbarModule,
    MatButtonModule,
    BlogModule,
  ],
})
export class LayoutMainModule {}
