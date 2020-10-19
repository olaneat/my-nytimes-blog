import { News } from './../../models/news';
import { Component, OnInit, Input } from '@angular/core';

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
