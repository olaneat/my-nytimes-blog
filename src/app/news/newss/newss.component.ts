import { Component, OnInit } from '@angular/core';
import {News} from '../../models/news';
import {NewsService } from '../../shared/news.service'

@Component({
  selector: 'app-newss',
  templateUrl: './newss.component.html',
  styleUrls: ['./newss.component.css']
})
export class NewssComponent implements OnInit {
  news: News[]

constructor( private newsService: NewsService) { }

  ngOnInit(): void {
    this.getAllNews()
    this.popularNews()
  }

  getAllNews(){
    this.newsService.getNews().subscribe(
      news => this.news = news 
    )
  }

  popularNews(){
    this.newsService.getPupolarNew().subscribe(
      news => this.news = news
    )
  }

}
