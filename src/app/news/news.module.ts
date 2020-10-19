import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewssComponent } from './newss/newss.component';
import { NewsListComponent } from './news-list/news-list.component';


const Components = [
  NewssComponent,
  NewsListComponent
]
@NgModule({
  declarations: [Components ],

  imports: [
    CommonModule
  ], 
  exports: [
    Components
  ]
  
})
export class NewsModule { }
