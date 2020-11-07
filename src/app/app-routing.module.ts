import { BizNewsComponent } from './news/biz-news/biz-news.component';
import { SportDetailComponent } from './news/sport-detail/sport-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewssComponent } from './news/newss/newss.component';
import {NewsDetailComponent } from './news/news-detail/news-detail.component';
import {SportsNewsComponent } from './news/sports-news/sports-news.component';

const routes: Routes = [
  {path: 'index', component: NewssComponent, pathMatch: 'full' },
  {path: 'url', component: NewsDetailComponent},
  {path: 'sport', component: SportsNewsComponent},
  {path: '', component: SportDetailComponent},
  {path: 'biz-news', component: BizNewsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
