import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the QrCodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qr-code',
  templateUrl: 'qr-code.html',
})

export class QrCodePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private qrScanner: QRScanner, private camera: Camera) {

  this.qrScanner.prepare()
    .then((status: QRScannerStatus) => {
     if (status.authorized) {

       let scanSub = this.qrScanner.scan().subscribe((text: string) => {
         console.log('Scanned something', text);
         this.qrScanner.hide();
         scanSub.unsubscribe();
       });

       this.qrScanner.show();

   } else if (status.denied) {
   } else {
   }
})
.catch((e: any) => console.log('Error is', e));

};

takePic() {
  const options: CameraOptions = {
  quality: 100,
  destinationType: this.camera.DestinationType.DATA_URL,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE
  }
}

};
