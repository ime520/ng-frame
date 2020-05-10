import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PubArticleComponent } from './pub-article.component';
import { EditorComponent } from '../editor/editor.component';

@NgModule({
  declarations: [PubArticleComponent, EditorComponent],
  imports: [CommonModule],
})
export class PubArticleModule {}
