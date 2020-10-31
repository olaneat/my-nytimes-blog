import {map } from 'rxjs/operators';
import { News } from './../models/news';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import {HttpClient , HttpHeaders} from '@angular/common/http'
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  news: News[];

  constructor(private httpCllient: HttpClient) { }

  private extraInfo(res:any){
    return res.articles || [];
  }

  getNews():Observable<News[]>{
  const newsUrl = `${environment.baseUrl}&apiKey=${environment.key}`;                                                            
    return this.httpCllient.get<News[]>(newsUrl).pipe(map(this.extraInfo));
  }


  getPupolarNew():Observable<News[]>{
    const popularNewUrl = `${environment.baseUrl}/mostpopular/v2/viewed/1.json?api-key=${environment.key}`
    return this.httpCllient.get<News[]>(popularNewUrl).pipe(map(this.extraInfo))
  }

  newsDetail(url:string):Observable<News>{
    const newsUrl = url
    return this.httpCllient.get<News>(newsUrl)
  }

  getSportNew():Observable<News[]>{
    const url = `${environment.baseUrl}/country=gb&category=sports&apiKey=${environment.key}` 
    return this.httpCllient.get<News[]>(url).pipe(map(this.extraInfo))
  }
  
}
