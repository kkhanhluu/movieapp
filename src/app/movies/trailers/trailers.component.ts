import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/shared/model/video';
import { BASE_YOUTUBE_URL } from 'src/app/shared/constants';

@Component({
  selector: 'app-trailers',
  templateUrl: './trailers.component.html',
  styleUrls: ['./trailers.component.scss']
})
export class TrailersComponent implements OnInit {
  videos: Video[] = [];
  BASE_URL = BASE_YOUTUBE_URL;
  constructor() {}

  ngOnInit() {}
}
