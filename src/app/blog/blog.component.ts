import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.styl'],
})
export class BlogComponent implements OnInit {
  articles: object[];
  constructor() {
    this.articles = [
      {
        title: '文章1',
        abstract: '文章内容',
      },
      {
        title: '文章1',
        abstract: '文章内容',
      },
      {
        title: '文章1',
        abstract: '文章内容',
      },
      {
        title: '文章1',
        abstract: '文章内容',
      },
      {
        title: '文章1',
        abstract: '文章内容',
      },
    ];
  }
  ngOnInit(): void {}
}
