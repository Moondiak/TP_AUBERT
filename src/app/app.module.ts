import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { GeolocalisationPageModule } from '../pages/geolocalisation/geolocalisation.module';
import { VideoPageModule } from '../pages/video/video.module';
import { MobileFeaturesPageModule } from '../pages/mobile-features/mobile-features.module';
import { QrCodePageModule } from '../pages/qr-code/qr-code.module';
import { SocialSharingPageModule } from '../pages/social-sharing/social-sharing.module';
import { GoogleMapsPageModule } from '../pages/google-maps/google-maps.module';
import { GyroscopePageModule } from '../pages/gyroscope/gyroscope.module';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Vibration } from '@ionic-native/vibration';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Shake } from '@ionic-native/shake';
import { ToastController } from 'ionic-angular';
import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    GeolocalisationPageModule,
    VideoPageModule,
    MobileFeaturesPageModule,
    QrCodePageModule,
    SocialSharingPageModule,
    GoogleMapsPageModule,
    GyroscopePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    Camera,
    StatusBar,
    SplashScreen,
    Vibration,
    TextToSpeech,
    Shake,
    Gyroscope,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
