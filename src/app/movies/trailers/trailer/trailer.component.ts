import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.scss']
})
export class TrailerComponent implements OnInit {
  @Input() url: string;
  loading = true;

  constructor() {}

  ngOnInit() {}

  onLoad() {
    this.loading = false;
  }

  onClick() {
    console.log('clicked');
  }
}
