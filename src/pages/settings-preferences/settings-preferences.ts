import { Component } from '@angular/core';


// Native Components
import { NativeStorage } from '@ionic-native/native-storage';

import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { UserDataServiceProvider }  from '../../providers/user-data-service/user-data-service';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private nativeStorage: NativeStorage, 
    private userdataService: UserDataServiceProvider,
    private alertCtrl: AlertController) {
    

    this.loadUserPreferences();

    
    }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPreferencesPage');
  }


  saveUserPreferences():void {

    //this.nativeStorage.setItem('MC-PrefUser', {prefUser: this.prefUser})
    /*this.doSaveAlertLog(this.prefUser.prefSpeedUnit);
    var result = this.userdataService.saveUserPreferences(this.prefUser);
    this.doSaveAlertLog(result);

    if (result === ""){
      this.doSaveAlertOk();
    } else {
      this.doSaveAlertError(result);
    } */
  this.nativeStorage.setItem('MC-PrefUser', {prefUser: this.prefUser})
 .then(
    () => console.log('User Preferences Stored!'),
    error => console.error('Error storing User Preferences', error)
  );
  }


  loadUserPreferences():void {
    //this.nativeStorage.getItem('MC-PrefUser')
    //this.userdataService.loadUserPreferences();
    //this.prefUser = this.userdataService.prefUser;
  this.nativeStorage.getItem('MC-PrefUser').then(
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


  doSaveAlertOk() {
    let alert = this.alertCtrl.create({
      title: 'Storing User Preferences',
      subTitle: 'Vos preferences ont bien ete stockees!',
      buttons: ['Ok']
    });

    alert.present();
  }

  doSaveAlertError(errorMsg) {
    let alert = this.alertCtrl.create({
      title: 'Storing User Preferences',
      subTitle: 'Il y a eu une erreur lors de la sauvegarde de vos preferences!'+errorMsg,
      buttons: ['Cancel']
    });

    alert.present();
  }

  doSaveAlertLog(errorMsg) {
    let alert = this.alertCtrl.create({
      title: 'Storing User Preferences',
      subTitle: errorMsg,
      buttons: ['Cancel']
    });

    alert.present();
  }
}
