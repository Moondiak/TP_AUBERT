import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
app: AppData;

  constructor(public navCtrl: NavController) {
this.app = new AppData("Nom",1);
  }
  functionplus(){this.app.version = this.app.version+1;}
  functionmoins(){this.app.version=this.app.version-1;}
}

class AppData{
  constructor(public nom: string, public version: number){}
}
