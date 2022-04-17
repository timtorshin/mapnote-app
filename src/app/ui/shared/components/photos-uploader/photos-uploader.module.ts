import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosUploaderComponent } from './photos-uploader.component';
import { IconModule } from '../icon/icon.module';

@NgModule({
  declarations: [
    PhotosUploaderComponent
  ],
  exports: [
    PhotosUploaderComponent
  ],
  imports: [
    CommonModule,
    IconModule
  ]
})
export class PhotosUploaderModule {}
