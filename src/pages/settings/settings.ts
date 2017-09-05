import { Component } from '@angular/core';

  // Native Components
  import { NativeStorage } from '@ionic-native/native-storage';

import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  Cylindres:0  ,
  Cylindree : 0,
  Puissance_ch : 0,
  Couple_Nm : 0,
  VitesseMax_Kmh : 0,
  acc_0_100 : 0,
  acc_400m_DA : 0,
  acc_0_200 : 0,
  acc_1000m_DA : 0,
  Indice_Perf : 0  
  }

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
