import { Component, OnInit } from '@angular/core';
import {News} from '../../models/news';
import {NewsService } from '../../shared/news.service'

@Component({
  selector: 'app-newss',
  templateUrl: './newss.component.html',
  styleUrls: ['./newss.component.css']
})
export class NewssComponent implements OnInit {
  news: News[];
  popularArticles: News[]

constructor( private newsService: NewsService) { }

  ngOnInit(): void {
    this.getAllNews()
 
  }

  getAllNews(){
    this.newsService.getNews().subscribe(
      news => this.news = news 
    )
  }

  

  

}
