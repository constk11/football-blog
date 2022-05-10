import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { NewsService } from 'src/app/services/news.service';
import { imagesTypes } from 'src/app/shared/images-types';
import { News } from 'src/app/shared/interfaces';
import { ImageService } from 'src/app/shared/services/image.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, OnDestroy {

  public news: News

  private subscription: Subscription

  constructor(private route: ActivatedRoute, private newsService: NewsService, private imgService: ImageService) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((params) => {
      this.news = this.newsService.getNewsById(params['id']) as News
    })
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }

  public getImageSrc(pictureId: string | undefined ): string {
    if (!pictureId) {
      return ''
    }
    return this.imgService.getImageSrc(pictureId, imagesTypes.newsPicture);
  }
}
