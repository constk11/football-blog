import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  
  private imagesPaths = {
    teamLogo: {path: '../../assets/teams-logos/', format: '.png'},
    playerPhoto: {path: '../../assets/players/', format: '.jpg'},
    newsPicture: {path: '../../assets/news/', format: '.jpg'},
    countryIcon: {path: '../../assets/countries/', format: '.png'}
  }

  public getImageSrc(imageId: string, imageType: string): string {
    return (
      this.imagesPaths[imageType as keyof typeof this.imagesPaths].path +
      imageId +
      this.imagesPaths[imageType as keyof typeof this.imagesPaths].format
    );
  }
}