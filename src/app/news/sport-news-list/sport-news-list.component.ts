import { Component, OnInit, Input } from '@angular/core';
import {News} from '../../models/news';

@Component({
  selector: 'app-sport-news-list',
  templateUrl: './sport-news-list.component.html',
  styleUrls: ['./sport-news-list.component.css']
})

export class SportNewsListComponent implements OnInit {
@Input() article:  News;

  constructor() { }

  ngOnInit(): void {
  }

}
