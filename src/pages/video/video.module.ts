import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideoPage } from './video';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';

@NgModule({
  declarations: [
    VideoPage,
  ],
  imports: [
    IonicPageModule.forChild(VideoPage),
  ],
  providers: [
    MediaCapture
  ]
})
export class VideoPageModule {}
