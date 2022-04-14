import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceEditComponent } from './components/place-edit/place-edit.component';
import { RatingModule } from '../shared/components/rating/rating.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TagsModule } from '../shared/components/tags/tags.module';

@NgModule({
  declarations: [
    PlaceEditComponent
  ],
  exports: [
    PlaceEditComponent
  ],
  imports: [
    CommonModule,
    RatingModule,
    ReactiveFormsModule,
    TagsModule
  ]
})
export class PlaceEditDialogModule {}