import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeolocalisationPage } from './geolocalisation';
import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    GeolocalisationPage,
  ],
  imports: [
    IonicPageModule.forChild(GeolocalisationPage),
  ],
  providers: [
    Geolocation
  ]
})

export class GeolocalisationPageModule {}
