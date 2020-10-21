import { Component, OnInit, Input } from '@angular/core';
import {News } from '../../models/news'


@Component({
  selector: 'app-most-read',
  templateUrl: './most-read.component.html',
  styleUrls: ['./most-read.component.css']
})

export class MostReadComponent implements OnInit {
@Input()popularNews: News;

  constructor() { }

  ngOnInit(): void {
  }

}
