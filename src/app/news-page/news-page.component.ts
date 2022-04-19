import { Component, OnInit } from '@angular/core';
import { News, NewsService } from '../services/news.service';

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
