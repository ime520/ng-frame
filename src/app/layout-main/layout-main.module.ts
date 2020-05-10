import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutMainComponent } from './layout-main.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { BlogModule } from '../blog/blog.module';
import { PubArticleModule } from '../pub-article/pub-article.module';

@NgModule({
  declarations: [LayoutMainComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    BlogModule,
    MatMenuModule,
    MatSnackBarModule,
    PubArticleModule,
  ],
})
export class LayoutMainModule {}
