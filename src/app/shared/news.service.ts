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
  newsDetail(url:string):Observable<News>{
    const newsUrl = url
    return this.httpCllient.get<News>(newsUrl)
  }

  getNews():Observable<News[]>{
  const newsUrl = `${environment.baseUrl}language=en&apiKey=${environment.key}`;                                                            
    return this.httpCllient.get<News[]>(newsUrl).pipe(map(this.extraInfo));
  }

  getEntertainmentNew():Observable<News[]>{
    const popularNewUrl = `${environment.baseUrl}country=gb&category=entertainment&apiKey=${environment.key}`
    return this.httpCllient.get<News[]>(popularNewUrl).pipe(map(this.extraInfo))
  }

 


  getSportNew():Observable<News[]>{
    const url = `${environment.baseUrl}country=gb&category=sports&apiKey=${environment.key}` 
    return this.httpCllient.get<News[]>(url).pipe(map(this.extraInfo))
  }

  getBusinessNews():Observable<News[]>{
    const url = `${environment.baseUrl}country=gb&category=business&apiKey=${environment.key}`
    return this.httpCllient.get<News[]>(url).pipe(map(this.extraInfo))
  }

  getTechNews():Observable<News[]>{
    const url = `${environment.baseUrl}country=gb&category=business&apiKey=${environment.key}`
    return this.httpCllient.get<News[]>(url).pipe(map(this.extraInfo))
  }
  
  getScienceNew():Observable<News[]>{
    const url = `${environment.baseUrl}country=ng&category=science&apiKey=${environment.key}`;
    return this.httpCllient.get<News[]>(url).pipe(map(this.extraInfo))
  }
  
}
