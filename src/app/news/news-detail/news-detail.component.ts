import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import {NewsService } from '../..//shared/news.service';
import { News } from './../../models/news';


@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {
  news : News;
  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }
  getNewsDetail(){
    const url = this.route.snapshot.paramMap.get('url');
    this.newsService.newsDetail(url).subscribe(article => this.news = article) 
  }
}

