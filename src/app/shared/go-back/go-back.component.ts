import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-go-back',
  templateUrl: './go-back.component.html',
  styleUrls: ['./go-back.component.scss']
})
export class GoBackComponent implements OnInit {

  isBack: boolean = false

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.isBack = params['isBack']      
    })
  }

  goBack() {
    const currentLocation = '/' + this.router.url.split('/')[1]

    this.router.navigate([currentLocation])
  }
}
