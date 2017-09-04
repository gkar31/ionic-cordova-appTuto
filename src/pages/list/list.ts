import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { CarServiceProvider } from '../../providers/car-service/car-service';
import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers: [CarServiceProvider]
})
export class ListPage {
  public carsList:Array<{Marque : String,
    Modele : String,
    Serie : String,
    Cylindres : Number,
    Cylindree : Number,
    Puissance_ch : Number,
    Couple_Nm : Number,
    VitesseMax_Kmh : Number,
    acc_0_100 : Number,
    acc_400m_DA : Number,
    acc_0_200 : Number,
    acc_1000m_DA : Number,
    Prix : String,
    Indice_Perf : Number,
    Image: String}>;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public carsService: CarServiceProvider) {
    carsService.getCarsList()
    .then(data =>{
      console.log("CarsService Then");
      console.log(data);
      console.log(this.carsList);
      
      this.carsList = data;
    })
    
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for(let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
