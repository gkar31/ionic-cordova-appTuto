import { Component } from '@angular/core';

// Native Components
import { NativeStorage } from '@ionic-native/native-storage';

import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CarServiceProvider } from '../../providers/car-service/car-service';
import { RaceResultPage } from '../race-result/race-result';


/**
 * Generated class for the SettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  refCar={
  Cylindres:  Number,
  Cylindree : Number,
  Puissance_ch : Number,
  Couple_Nm : Number,
  VitesseMax_Kmh : Number,
  acc_0_100 : Number,
  acc_400m_DA : Number,
  acc_0_200 : Number,
  acc_1000m_DA : Number,
  Indice_Perf : Number  
  }
  
  prefSpeedUnit="";
  prefCoupleUnit="";

  constructor(public navCtrl: NavController, public navParams: NavParams, private nativeStorage: NativeStorage) {
      
  }

  
ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
    this.loadReferenceCar();
  }


  

  saveReferenceCar():void {
    this.nativeStorage.setItem('MC-RefCar', {refCar: this.refCar})
  .then(
    () => console.log('ReferenceCar Stored!'),
    error => console.error('Error storing ReferenceCar', error)
  );
  }


  loadReferenceCar():void {
    this.nativeStorage.getItem('MC-RefCar')
  .then(
    data => {
      console.log(data);
      if(data){
      this.refCar = data.refCar;
      }
    },
    error => console.error(error)
  );
  }


  
}
