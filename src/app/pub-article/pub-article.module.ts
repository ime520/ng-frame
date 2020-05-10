import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PubArticleComponent } from './pub-article.component';
import { EditorComponent } from '../editor/editor.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [PubArticleComponent, EditorComponent],
  imports: [CommonModule, MatButtonModule],
})
export class PubArticleModule {}
