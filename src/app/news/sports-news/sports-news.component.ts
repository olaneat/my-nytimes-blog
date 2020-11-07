import { Component, OnInit } from '@angular/core';
import {News } from '../../models/news';
import {NewsService } from '../../shared/news.service';

@Component({
  selector: 'app-sports-news',
  templateUrl: './sports-news.component.html',
  styleUrls: ['./sports-news.component.css']
})


export class SportsNewsComponent implements OnInit {

   news: News[]
  constructor(private newsService : NewsService) { }

  ngOnInit(): void {
    this.getNews()
  }

  getNews(){
    this.newsService.getSportNew().subscribe(
      news => this.news = news
    )
  }
}
