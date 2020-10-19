import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import {NewsService } from './news.service'

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[]
})
export class SharedModule { }
