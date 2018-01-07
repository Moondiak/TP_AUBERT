import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MobileFeaturesPage } from './mobile-features';

import { ToastController } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Shake } from '@ionic-native/shake';

@NgModule({
  declarations: [
    MobileFeaturesPage,
  ],
  imports: [
    IonicPageModule.forChild(MobileFeaturesPage),
  ],
  providers: [
    Vibration,
    TextToSpeech,
    Shake
  ]
})

export class MobileFeaturesPageModule {}
