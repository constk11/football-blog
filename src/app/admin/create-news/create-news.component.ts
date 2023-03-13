import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NewsService } from 'src/app/services/news.service';
import { News } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.scss']
})
export class CreateNewsComponent implements OnInit {

  public form: FormGroup

  constructor(private readonly newsService: NewsService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      text: new FormControl(null, Validators.required),
      publisher: new FormControl(null, Validators.required)
    })
  }

  public createNews() {

    if (this.form.invalid) { return; }

    const news: News = {
      title: this.form.get('title')?.value,
      text: this.form.get('text')?.value,
      publisher: this.form.get('publisher')?.value,
      date: new Date()
    }

    this.newsService.create(news).subscribe((res) => {
      console.log('res',res);
      this.form.reset()
    })
  }

}
