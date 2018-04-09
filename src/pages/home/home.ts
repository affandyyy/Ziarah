import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // Makkah default place
  lat: number = 21.3891;
  lng: number = 39.8579;

  constructor(public navCtrl: NavController) {
 
  }

}
