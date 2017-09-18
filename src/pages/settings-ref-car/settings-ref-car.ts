import { Component } from '@angular/core';

// Native Components
import { NativeStorage } from '@ionic-native/native-storage';

import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-settings-ref-car',
  templateUrl: 'settings-ref-car.html',
})
export class SettingsRefCarPage {
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
    };
    
    
    
    constructor(public navCtrl: NavController, public navParams: NavParams, private nativeStorage: NativeStorage) {
      
        
    }
  
    
  ionViewDidLoad() {
      console.log('ionViewDidLoad SettingsRefCarPage');
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