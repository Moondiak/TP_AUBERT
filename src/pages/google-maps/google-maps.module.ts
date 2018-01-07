import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoogleMapsPage } from './google-maps';
import { GoogleMaps } from '@ionic-native/google-maps';

@NgModule({
  declarations: [
    GoogleMapsPage,
  ],
  imports: [
    IonicPageModule.forChild(GoogleMapsPage),
  ],
  providers: [
     GoogleMaps,
  ]
})

export class GoogleMapsPageModule {}
