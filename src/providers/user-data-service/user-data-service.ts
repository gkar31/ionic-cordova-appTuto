import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';




// Native Components
import { NativeStorage } from '@ionic-native/native-storage';



/*
  Generated class for the UserDataServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class UserDataServiceProvider {
  public prefUser={
    prefSpeedUnit : String,
    prefTorqueUnit : String,
    prefPriceUnit : String   
  };

  public refCar={
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
    
    
  constructor(public http: Http,  private nativeStorage: NativeStorage) {
    

    this.loadUserPreferences();

    
    }

  

  

  saveUserPreferences(prefUserValues):any {
    this.prefUser = prefUserValues;
    this.nativeStorage.setItem('MC-PrefUser', {prefUser: prefUserValues})
  .then(
    () => {
      console.log('User Preferences Stored!');
      return "";
    }
      ,

    error => {
      console.error('Error storing User Preferences', error);
      return error;
    }
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


  saveReferenceCar(refCarValues):void {
    
    this.nativeStorage.setItem('MC-RefCar', {refCar: refCarValues})
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


getSpeedUnit():any {

  return this.prefUser.prefSpeedUnit.toString();
}

getTorqueUnit():any {
  
    return this.prefUser.prefTorqueUnit.toString();
  }


}

