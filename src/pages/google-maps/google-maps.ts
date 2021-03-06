import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';

/**
 * Generated class for the GoogleMapsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-google-maps',
  templateUrl: 'google-maps.html'
})

export class GoogleMapsPage {

  public map: GoogleMap
  constructor(public navCtrl: NavController, private googleMaps: GoogleMaps) {}

  ionViewDidLoad() {
     this.loadMap();
    }

   loadMap() {

      const mapOptions: GoogleMapOptions = {
        camera: {
          target: {
            lat: 43.0741904,
            lng: -89.3809802
          },
          zoom: 18,
          tilt: 30
        }
      };

      this.map = this.googleMaps.create('map_canvas', mapOptions);

      // Wait the MAP_READY before using any methods.
      this.map.one(GoogleMapsEvent.MAP_READY)
        .then(() => {
          console.log('Map is ready!');

          // Now you can use all methods safely.
          this.map.addMarker({
              title: 'Ionic',
              icon: 'blue',
              animation: 'DROP',
              position: {
                lat: 43.0741904,
                lng: -89.3809802
              }
            })
            .then(marker => {
              marker.on(GoogleMapsEvent.MARKER_CLICK)
                .subscribe(() => {
                  alert('clicked');
                });
            });

        });
    }

}
