import { Component, OnInit } from '@angular/core';
import {News } from '../../models/news'
import {NewsService } from '../../shared/news.service';
 

@Component({
  selector: 'app-biz-news',
  templateUrl: './biz-news.component.html',
  styleUrls: ['./biz-news.component.css']
})
export class BizNewsComponent implements OnInit {
  news: News[]
  constructor( private newsService: NewsService) { }

  ngOnInit(): void {
    this.displayNews()
  }
  displayNews(){
    this.newsService.getBusinessNews().subscribe(
      news => this.news = news
    )
  }

}
