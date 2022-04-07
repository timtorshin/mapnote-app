import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IconModule } from 'src/app/ui/shared/components/icon/icon.module';

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
    IconModule
  ]
})
export class ShellModule {}
