import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News, NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  news: News

  constructor(private route: ActivatedRoute, private newsService: NewsService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.news = this.newsService.getNewsById(params['id']) as News
    })
  }

}
