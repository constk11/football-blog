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

  public news: News[]

  constructor(private newsService: NewsService, private imageService: ImageService) {}

  ngOnInit(): void {
    this.newsService.getNews().subscribe((res) => {
      console.log('news from db', res);
      this.news = res
    })
  }

  public getPictureSrc(pictureId: string | undefined): string {
    if (!pictureId) {
      return ''
    }
    return this.imageService.getImageSrc(pictureId, imagesTypes.newsPicture)
  }
}
