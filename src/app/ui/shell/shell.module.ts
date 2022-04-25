import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './components/shell/shell.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IconModule } from '../shared/components/icon/icon.module';
import { PlaceCardModule } from '../shared/components/place-card/place-card.module';
import { TagsFilterModule } from '../shared/components/tags-filter/tags-filter.module';

@NgModule({
  declarations: [
    ShellComponent
  ],
  exports: [
    ShellComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IconModule,
    PlaceCardModule,
    TagsFilterModule
  ]
})
export class ShellModule {}
