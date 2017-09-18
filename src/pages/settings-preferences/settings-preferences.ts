import { Component } from '@angular/core';


// Native Components
import { NativeStorage } from '@ionic-native/native-storage';

import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SettingsPreferencesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings-preferences',
  templateUrl: 'settings-preferences.html',
})
export class SettingsPreferencesPage {
  prefUser={
    prefSpeedUnit : String,
    prefCoupleUnit : String   
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private nativeStorage: NativeStorage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPreferencesPage');
  }


  saveUserPreferences():void {
    this.nativeStorage.setItem('MC-PrefUser', {prefUser: this.prefUser})
  .then(
    () => console.log('ReferenceCar Stored!'),
    error => console.error('Error storing ReferenceCar', error)
  );
  }


  loadUserPreferences():void {
    this.nativeStorage.getItem('MC-PrefUser')
  .then(
    data => {
      console.log(data);
      if(data){
      this.prefUser = data.prefUser;
      }
    },
    error => console.error(error)
  );
  }


}
