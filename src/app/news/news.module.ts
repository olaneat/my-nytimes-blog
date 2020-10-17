import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListComponent } from './news-list/news-list.component';
import { NewssComponent } from './newss/newss.component';



@NgModule({
  declarations: [NewsListComponent, NewssComponent],
  imports: [
    CommonModule
  ]
})
export class NewsModule { }
