import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl'],
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient) {}

  name = '小李';

  ngOnInit(): void {}

  handleTest() {
    this.http.get('http://139.9.245.74:80').subscribe((data) => {
      console.log(data);
    });
  }
}
