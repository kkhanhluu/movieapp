import { Component, OnInit } from '@angular/core';
import { Cast } from 'src/app/model/cast';
import { ActivatedRoute } from '@angular/router';
import { FilmServiceService } from 'src/app/service/film-service.service';
import { Actor } from 'src/app/model/actor';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {
  actor: Actor;
  profilePath: string;
  constructor(
    private route: ActivatedRoute,
    private service: FilmServiceService
  ) {
    this.route.params.subscribe(params => {
      if (params['id'] != null) {
        this.service.getActorById(params['id']).subscribe(actor => {
          this.actor = actor;
          this.profilePath = this.service.getImageUrl(actor.profile_path); 
        });
      }
    });
  }

  ngOnInit() {}
}
