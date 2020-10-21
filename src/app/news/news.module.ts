import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewssComponent } from './newss/newss.component';
import { NewsListComponent } from './news-list/news-list.component';
import { MostReadComponent } from './most-read/most-read.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';

const Components = [
  NewssComponent,
  NewsListComponent,
  NewsDetailComponent, 
  MostReadComponent
]
@NgModule({
  declarations: [Components,  ],

  imports: [
    CommonModule,
    AppRoutingModule,
  ], 
  exports: [
    Components
  ]
  
})
export class NewsModule { }
