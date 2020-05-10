import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PubArticleComponent } from './pub-article.component';
import { EditorComponent } from '../editor/editor.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PubArticleComponent, EditorComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
  ],
})
export class PubArticleModule {}
