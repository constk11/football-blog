import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { News } from '../shared/interfaces';
import { ImageService } from '../shared/services/image.service';
import { imagesTypes } from '../shared/images-types';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss'],
})
export class NewsPageComponent implements OnInit {

  news: News[]

  constructor(private newsService: NewsService, private imageService: ImageService) {}

  ngOnInit(): void {
    this.news = this.newsService.getNews()
  }

  getPictureSrc(pictureId: string): string {
    return this.imageService.getImageSrc(pictureId, imagesTypes.newsPicture)
  }
}
