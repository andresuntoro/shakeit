import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { Shake } from '@ionic-native/shake';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  maxV:number;
  minV:number;
  n:number;
  status:boolean;
  cok:any;
  loginData:any;
  pullData: any;
  pushData: Array<number>;

  constructor(public navCtrl: NavController, public platform: Platform, public kocok: Shake, public storage:Storage) {
  	this.status = false;
    this.pushData = [];
    this.storage.get('loginData').then((val) => {
        if (val) {
          //this.loginData = val;
          this.loginData = val[0].username;
          console.log(this.loginData);
        }
        else {
          console.log("Not Exist")
        }
      }); // batas storage

      this.storage.get('hasil').then((valx:Array<number>) => {
        if (valx) {
          this.pullData = valx;
          console.log(this.pullData);

        }
        else {
          this.pullData = ["Belum ada data"];
          console.log("Not Exist")
        }
      }); // batas storage
  }

  ionViewWillEnter(){
    this.platform.ready().then(() => {
    //Membuat kondisi setelah disimpan tidak bisa Kocok
    if (this.status !== true) {
    this.cok = this.kocok.startWatch(30).subscribe(data => {
      //Ambil array didalam storage dan divalidasi agar tidak ada perulangan angka
	    for (var i = 0; i < this.pullData.length; i++) {
	      do {
	        var randMe = Math.floor(Math.random() * (this.maxV - this.minV) + this.minV)
	      } while (this.pullData.indexOf(randMe) !== -1);
	      this.n = randMe;
	      this.status = true;
	      console.log(this.pushData);
	    } // batas akhir looping
      }); //batas akhir shake
    } else {
    	console.log('Sudah pernah kocok!');
    }
  }); // batas akhir platform
}

  stopMe(){
   if (this.status == true) {
   	this.pushData.push(this.n)
     this.storage.set('hasil', this.pushData);
     this.cok.unsubscribe();
   }
   else {
     console.log("Ehh..")
   }
  }

}
