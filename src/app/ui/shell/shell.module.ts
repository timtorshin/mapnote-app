import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './components/shell/shell.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IconModule } from '../shared/components/icon/icon.module';
import { PlaceCardModule } from '../shared/components/place-card/place-card.module';

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
    PlaceCardModule
  ]
})
export class ShellModule {}
