import { Component, OnInit, ViewChild } from '@angular/core';
import { EditorComponent } from '../editor/editor.component';

@Component({
  selector: 'app-pub-article',
  templateUrl: './pub-article.component.html',
  styleUrls: ['./pub-article.component.styl'],
})
export class PubArticleComponent implements OnInit {
  @ViewChild(EditorComponent) editor: EditorComponent;

  constructor() {}

  ngOnInit(): void {}

  title: String = '我的文章';

  getEditorContent() {
    let content = this.editor.clickHandle();
    if (!content) {
      alert('请输入内容！');
      return;
    }
    alert(content);
  }

  handlePublish(): void {
    this.getEditorContent();
  }
}
