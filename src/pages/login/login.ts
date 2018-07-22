import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { TabsPage } from '../tabs/tabs';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username:string;
  password:string;
  loginData:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public http: Http, public storage: Storage) {
  }

  //lifecycle Ionic, baca disini : https://s.id/23me1
  ionViewWillEnter() {
  	//GetStoredLoginData
    this.storage.get('loginData').then((val) => {
      if(val)
      {
        this.navCtrl.setRoot(TabsPage)
        console.log("exists");
      }
      else
      {
        console.log("not exist");
      }
  });

  }

  toastAlert(title){
    let toast = this.toastCtrl.create({
      message: title,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

  loginin(){
    let data = {
      username: btoa(this.username),
      password: btoa(this.password)
    };
    //let url = 'http://localhost:8000/login';
    let url = 'http://pm.andrenotes.science/login';
    let dataJSON = JSON.stringify(data);

    this.http.post(url, dataJSON)
    .map(res => res.json())
    .subscribe(
      data =>{
        if (data.keterangan == 'Sukses') {
          this.loginData = data.data; //mengambil objek data diAPI
          this.storage.set('loginData', this.loginData);
          this.navCtrl.setRoot(TabsPage);
          console.log('Login Berhasil!');
        }
        else {
          this.toastAlert('Login Gagal!');
          console.log('login gagal')
        }
      });
  }

}
