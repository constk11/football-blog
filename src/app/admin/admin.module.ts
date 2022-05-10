import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateNewsComponent } from './create-news/create-news.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill'

@NgModule({
  declarations: [
    CreateNewsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    QuillModule
  ]
})
export class AdminModule { }
