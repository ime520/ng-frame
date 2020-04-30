import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutMainComponent } from './layout-main.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [LayoutMainComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot([]),
    MatToolbarModule,
    MatButtonModule,
  ],
})
export class LayoutMainModule {}
