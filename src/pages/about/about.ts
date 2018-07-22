import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  history:any;
  constructor(public navCtrl: NavController, public storage:Storage, public platform: Platform) {
  	
  }

  ionViewWillEnter(){
    //GetStoredHasil
    this.storage.get('hasil').then((valx:Array<number>) => {
        if (valx) {
          this.history = valx;
          console.log(this.history);
        }
        else {
          this.history = ["Belum ada data"];
          console.log("Not Exist")
        }
      });
  }

  clearHistory(){
    //this.storage.clear();
    this.storage.remove('hasil');
  }
}
