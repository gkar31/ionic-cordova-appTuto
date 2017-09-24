import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { UserDataServiceProvider } from '../../providers/user-data-service/user-data-service';
import { CarServiceProvider } from '../../providers/car-service/car-service';


@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;
  prefsUser: any;
  doesDisplayKmh: boolean = true;
  doesDisplayNm: boolean = true;
  strStep: any;
  vitesseMax_Mph: Number;
  Couple_FtLb: Number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private userDataService: UserDataServiceProvider, private carService: CarServiceProvider) {
    // If we navigated to this page, we will have an item available as a nav param
    this.strStep="etape00";
    this.selectedItem = navParams.get('item');

      this.strStep="etape01";

      this.userDataService.loadUserPreferences();
      this.strStep="etape02";

      this.prefsUser = this.userDataService.prefUser;

      //Display Speed
      this.doesDisplayKmh= this.userDataService.getSpeedUnit() ==="kmh" ;
      this.strStep="etape03:"+this.doesDisplayKmh;
      this.vitesseMax_Mph = this.carService.convertKmhToMph(this.selectedItem.VitesseMax_Kmh);

      //Display Torque
      this.doesDisplayNm= this.userDataService.getTorqueUnit() ==="nm" ;
      this.strStep="etape04:"+this.doesDisplayNm;
      this.Couple_FtLb = this.carService.convertNmToFtLb(this.selectedItem.Couple_Nm);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemDetailsPage');
    
    

      this.strStep="ionViewDidLoad - etape01";

      this.userDataService.loadUserPreferences();
      this.strStep="ionViewDidLoad - etape02";

      this.prefsUser = this.userDataService.prefUser;
      this.doesDisplayKmh= this.userDataService.getSpeedUnit() === "kmh" ;
      this.strStep="ionViewDidLoad - etape03:"+this.doesDisplayKmh;
      this.vitesseMax_Mph = this.carService.convertKmhToMph(this.selectedItem.VitesseMax_Kmh);
      this.strStep=this.selectedItem.VitesseMax_Kmh + " - "+this.vitesseMax_Mph;
  }
}
