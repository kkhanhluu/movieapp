import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Actor } from 'src/app/shared/model/actor';
import { DataServiceService } from 'src/app/shared/service/data-service.service';

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
    private dataService: DataServiceService
  ) {
    this.route.params.subscribe(params => {
      if (params.id != null) {
        this.dataService.getActorById(params.id).subscribe(actor => {
          this.actor = actor;
          this.profilePath = this.dataService.getImageUrl(actor.profile_path);
        });
      }
    });
  }

  ngOnInit() {}
}
