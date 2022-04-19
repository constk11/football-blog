import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { News } from '../shared/interfaces';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss'],
})
export class NewsPageComponent implements OnInit {

  news: News[]

  newsPicturesPath = '../../assets/news/'
  newsPicturesFormat = '.jpg'

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.news = this.newsService.getNews()
  }

  getPictureSrc(pictureId: string): string {
    return this.newsPicturesPath + pictureId + this.newsPicturesFormat
  }
}
