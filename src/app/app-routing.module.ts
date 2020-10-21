import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewssComponent } from './news/newss/newss.component';
import {NewsDetailComponent } from './news/news-detail/news-detail.component';

const routes: Routes = [
  {path: '', component: NewssComponent, pathMatch: 'full' },
  {path: ':url', component: NewsDetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
