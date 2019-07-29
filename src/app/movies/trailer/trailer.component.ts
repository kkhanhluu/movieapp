import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/shared/model/video';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.scss']
})
export class TrailerComponent implements OnInit {
  videos: Video[] = [];
  private BASE_URL = 'https://www.youtube.com/embed/';
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {}

  private getUrlFromYoutube(key: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `${this.BASE_URL}${key}?rel=0;&autoplay-1&mute=0`
    );
  }
}
