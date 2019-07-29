import { Component, OnInit } from '@angular/core';
import { Cast } from 'src/app/shared/model/cast';

@Component({
  selector: 'app-cast-list',
  templateUrl: './cast-list.component.html',
  styleUrls: ['./cast-list.component.scss']
})
export class CastListComponent implements OnInit {
  castList: Cast[] = [] as Cast[];
  private IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

  constructor() {}
  ngOnInit() {}
}