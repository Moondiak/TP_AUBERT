import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

/**
 * Generated class for the SocialSharingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-social-sharing',
  templateUrl: 'social-sharing.html',
})
export class SocialSharingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private socialSharing: SocialSharing) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SocialSharingPage');
  }

  share(){
    this.socialSharing.share("demo message", "Demo subject", "", "https://juliette-verlaine.fr").
    then(() => {
    alert("Sharing success");
    }).catch(() => {
    alert("Share failed");
    });
  }

}
