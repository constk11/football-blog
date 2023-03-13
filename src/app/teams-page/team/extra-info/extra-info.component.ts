import { Component, Input, OnInit } from '@angular/core';
import { PlayersService } from 'src/app/services/players.service';
import { imagesTypes } from 'src/app/shared/images-types';
import { Player, Team } from 'src/app/shared/interfaces';
import { ImageService } from 'src/app/shared/services/image.service';

@Component({
  selector: 'app-extra-info',
  templateUrl: './extra-info.component.html',
  styleUrls: ['./extra-info.component.scss']
})
export class ExtraInfoComponent implements OnInit {

  public imagesTypes = imagesTypes

  @Input() subject: Team | Player

  constructor(private imageService: ImageService, private playersService: PlayersService) { }

  ngOnInit(): void {
  }

  public isTeam(subject: any): subject is Team {
    return 'name' in subject
  }

  public isPlayer(subject: any): subject is Player {
    return 'lastName' in subject
  }

  public getImageSrc(logoId: string, imageType: string): string {
    return this.imageService.getImageSrc(logoId, imageType)
  }

  public getFullPosition(position: string): string {
    return this.playersService.getFullPosition(position)
  }
}
