import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../services/teams.service';
import { TeamBase } from '../shared/interfaces';
import { imagesTypes } from '../shared/images-types';
import { ImageService } from '../shared/services/image.service';

@Component({
  selector: 'app-teams-page',
  templateUrl: './teams-page.component.html',
  styleUrls: ['./teams-page.component.scss']
})
export class TeamsPageComponent implements OnInit {
  
  public teamsPreview: TeamBase[]

  constructor(private teamsService: TeamsService, private imageService: ImageService) { }

  ngOnInit(): void {
    this.teamsPreview = this.teamsService.getTeamsPreview()
  }

  public getLogoSrc(logoId: string): string {
    return this.imageService.getImageSrc(logoId, imagesTypes.teamLogo)
  }
}
