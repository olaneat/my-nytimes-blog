import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewssComponent } from './newss/newss.component';
import { NewsListComponent } from './news-list/news-list.component';
import { MostReadComponent } from './most-read/most-read.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { HeaderComponent } from './header/header.component';
import { SportsNewsComponent } from './sports-news/sports-news.component';


const Components = [
  NewssComponent,
  NewsListComponent,
  NewsDetailComponent, 
  MostReadComponent,
  HeaderComponent,
  SportsNewsComponent,
  SportsNewsCListomponent
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
