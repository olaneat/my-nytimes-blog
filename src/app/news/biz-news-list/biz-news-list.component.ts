import { News } from './../../models/news';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-biz-news-list',
  templateUrl: './biz-news-list.component.html',
  styleUrls: ['./biz-news-list.component.css']
})


export class BizNewsListComponent implements OnInit {
  @Input() article: News;
  
  constructor() { }

  ngOnInit(): void {
  }

}
