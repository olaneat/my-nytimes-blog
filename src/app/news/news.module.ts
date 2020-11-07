import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewssComponent } from './newss/newss.component';
import { NewsListComponent } from './news-list/news-list.component';
import { MostReadComponent } from './most-read/most-read.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { HeaderComponent } from './header/header.component';
import { SportsNewsComponent } from './sports-news/sports-news.component';
import { SportNewsListComponent } from './sport-news-list/sport-news-list.component';
import { SportDetailComponent } from './sport-detail/sport-detail.component';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { TechNewsListComponent } from './tech-news-list/tech-news-list.component';
import { BizNewsComponent } from './biz-news/biz-news.component';
import { BizNewsListComponent } from './biz-news-list/biz-news-list.component';
import { ScienceNewsComponent } from './science-news/science-news.component';
import { SciNewsListComponent } from './sci-news-list/sci-news-list.component';


const Components = [
  NewssComponent,
  NewsListComponent,
  NewsDetailComponent, 
  MostReadComponent,
  HeaderComponent,
  SportsNewsComponent,
  SportNewsListComponent,
  SportDetailComponent,
  TechNewsComponent, 
  TechNewsListComponent, 
  BizNewsComponent, 
  BizNewsListComponent, 
  ScienceNewsComponent, 
  SciNewsListComponent
]

@NgModule({
  declarations: [Components],

  imports: [
    CommonModule,
    AppRoutingModule,
  ], 
  exports: [
    Components
  ]
  
})
export class NewsModule { }
