import { Component, Input, OnInit } from '@angular/core';
import { Match } from 'src/app/shared/interfaces';
import { ImageService } from 'src/app/shared/services/image.service';
import { imagesTypes } from 'src/app/shared/images-types';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {

  @Input() match: Match

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
  }

  getLogoSrc(logoId: string): string {
    return this.imageService.getImageSrc(logoId, imagesTypes.teamLogo)
  }
}
