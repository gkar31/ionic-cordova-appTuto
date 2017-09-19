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
    prefTorqueUnit : String,
    prefPriceUnit : String   
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private nativeStorage: NativeStorage) {
    

    this.loadUserPreferences();

    
    }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPreferencesPage');
  }


  saveUserPreferences():void {
    this.nativeStorage.setItem('MC-PrefUser', {prefUser: this.prefUser})
  .then(
    () => console.log('User Preferences Stored!'),
    error => console.error('Error storing User Preferences', error)
  );
  }


  loadUserPreferences():void {
    this.nativeStorage.getItem('MC-PrefUser')
  .then(
    data => {
      console.log(data);
      if(data === null){
        console.log("No User preferences stored");
      }
      if(data){
      this.prefUser = data.prefUser;
      }
    },
    error => console.error(error)
  );
  }


}
