import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { GeolocalisationPage } from '../geolocalisation/geolocalisation';
import { VideoPage } from '../video/video';
import { MobileFeaturesPage } from '../mobile-features/mobile-features';
import { QrCodePage } from '../qr-code/qr-code';
import { SocialSharingPage } from '../social-sharing/social-sharing';
import { GoogleMapsPage } from '../google-maps/google-maps';
import { GyroscopePage } from '../gyroscope/gyroscope';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = GeolocalisationPage;
  tab5Root = VideoPage;
  tab6Root = MobileFeaturesPage;
  tab7Root = QrCodePage;
  tab8Root = SocialSharingPage;
  tab9Root = GoogleMapsPage;
  tab10Root = GyroscopePage;

  constructor() {

  }
}
