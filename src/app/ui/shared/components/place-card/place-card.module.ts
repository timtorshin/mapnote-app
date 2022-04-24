import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceCardComponent } from './place-card.component';
import { RatingModule } from '../rating/rating.module';
import { ReactiveFormsModule } from '@angular/forms';
import { IconModule } from '../icon/icon.module';

@NgModule({
  declarations: [
    PlaceCardComponent
  ],
  exports: [
    PlaceCardComponent
  ],
  imports: [
    CommonModule,
    RatingModule,
    ReactiveFormsModule,
    IconModule
  ]
})
export class PlaceCardModule {}
