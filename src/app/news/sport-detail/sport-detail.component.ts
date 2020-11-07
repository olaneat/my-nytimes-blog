import { NewsService } from './../../shared/news.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {News} from '../../models/news';

@Component({
  selector: 'app-sport-detail',
  templateUrl: './sport-detail.component.html',
  styleUrls: ['./sport-detail.component.css']
})

export class SportDetailComponent implements OnInit {
  news : News

  constructor( 
    private route: ActivatedRoute,
    private newsService: NewsService
  ) { }
  ngOnInit(): void {
  }

  getNewsDetail(){
    const url = this.route.snapshot.paramMap.get('url');
    this.newsService.newsDetail(url).subscribe(
      news => this.news = news
    )
  }
}
