import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { OnInit, OnDestroy } from '@angular/core';
/**
 * Generated class for the GeolocalisationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-geolocalisation',
  templateUrl: 'geolocalisation.html',
})

export class GeolocalisationPage {

  latitude: any;
  longitude: any;
  position: Array<string>;
//  geolocation : Geolocation


constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation) {}

    private ngOnInit() {
      this.geolocation.getCurrentPosition().then((resp) => {
          this.latitude = resp.coords.latitude;
          this.longitude = resp.coords.longitude;
             console.log(resp.coords.latitude+' '+resp.coords.longitude);
          }).catch((error) => {
              console.log('Error getting location', error);
          });

      this.position = new Array();
        this.geolocation.watchPosition().subscribe(pos => {
            this.position.push('Latitude : ' + pos.coords.latitude + ', Longitude : ' + pos.coords.longitude);
            console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
          });
      }
  }
