import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarRoutingModule } from './star-routing.module';
import { StarComponent } from './star/star.component';

@NgModule({
  declarations: [StarComponent],
  imports: [CommonModule, StarRoutingModule]
})
export class StarModule {}
