import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  contactUs:Array<any>;
  constructor(public navCtrl: NavController) {
  	this.contactUs = ['andresuntoro', 'rifky_darma', 'dalang_sato'];
  }

}
