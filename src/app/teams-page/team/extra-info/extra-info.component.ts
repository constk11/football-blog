import { Component, Input, OnInit } from '@angular/core';
import { TeamsService } from 'src/app/services/teams.service';
import { imagesTypes } from 'src/app/shared/images-types';
import { Player, Team } from 'src/app/shared/interfaces';
import { ImageService } from 'src/app/shared/services/image.service';

@Component({
  selector: 'app-extra-info',
  templateUrl: './extra-info.component.html',
  styleUrls: ['./extra-info.component.scss']
})
export class ExtraInfoComponent implements OnInit {

  imagesTypes = imagesTypes

  @Input() subject: Team | Player

  constructor(private teamsService: TeamsService, private imageService: ImageService) { }

  ngOnInit(): void {
  }

  isTeam(subject: any): subject is Team {
    return 'name' in subject
  }

  isPlayer(subject: any): subject is Player {
    return 'lastName' in subject
  }

  getImageSrc(logoId: string, imageType: string): string {
    return this.imageService.getImageSrc(logoId, imageType)
  }
}
