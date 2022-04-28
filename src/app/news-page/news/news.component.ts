import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';
import { imagesTypes } from 'src/app/shared/images-types';
import { News } from 'src/app/shared/interfaces';
import { ImageService } from 'src/app/shared/services/image.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public news: News

  constructor(private route: ActivatedRoute, private newsService: NewsService, private imgService: ImageService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.news = this.newsService.getNewsById(params['id']) as News
    })
  }

  public getImageSrc(pictureId: string): string {
    return this.imgService.getImageSrc(pictureId, imagesTypes.newsPicture);
  }
}
