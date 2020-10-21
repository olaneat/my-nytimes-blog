import { Component, OnInit, Input } from '@angular/core';
import { News } from './../../models/news';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  @Input() article:News;
  
  constructor() { }

  ngOnInit(): void {
  }



}
