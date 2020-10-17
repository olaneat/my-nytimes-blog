import { News } from './../models/news';

import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import {HttpClient , HttpHeaders} from '@angular/common/http'
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  newsUrl = `${environment.baseUrl}/home.json?api-key=${environment.key}`;                                                            
  news: News[];
  popularNewUrl = `${environment.baseUrl}/mostpopular/v2/shared/1/facebook.json?api-key=${environment.key}`

  constructor(private httpCllient: HttpClient) { }

  getNews():Observable<News[]>{
    return this.httpCllient.get<News[]>(`${this.newsUrl}`)
  }

  getPupolarNew():Observable<News[]>{
    return this.httpCllient.get<News[]>(`${this.popularNewUrl}`)
  }
}
