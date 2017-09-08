import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RaceResultPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-race-result',
  templateUrl: 'race-result.html',
})
export class RaceResultPage {
  opponentCar: any;
  dragRaceResults: any;
  refCar:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.opponentCar = navParams.get('item');
    this.refCar =  navParams.get('refCar');
    this.prepareDragRace();
  
    if (this.refCar){
      console.log("RefCar OK :"+(this.refCar.Cylindres > 0));
    }else{
      console.log("!!!refCar not set !!!")
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RaceResultPage');
    
  }


  prepareDragRace():void {
    this.dragRaceResults={};
    if(this.refCar.Cylindres>0){
      this.dragRaceResults.Indice_Perf=this.opponentCar.Indice_Perf - this.refCar.Indice_Perf;
      this.dragRaceResults.Vmax=this.opponentCar.VitesseMax_Kmh - this.refCar.VitesseMax_Kmh;
      this.dragRaceResults.Couple_Nm=this.opponentCar.Couple_Nm - this.refCar.Couple_Nm;
      this.dragRaceResults.acc_0_100=this.opponentCar.acc_0_100 - this.refCar.acc_0_100;
      this.dragRaceResults.acc_400m_DA=this.opponentCar.acc_400m_DA - this.refCar.acc_400m_DA;
      this.dragRaceResults.acc_0_200=this.opponentCar.acc_0_200 - this.refCar.acc_0_200;
      this.dragRaceResults.acc_1000m_DA=this.opponentCar.acc_1000m_DA - this.refCar.acc_1000m_DA;
    }else {
      //Grand Scenic
      this.refCar.Cylindres = 4;
      this.refCar.Cylindree = 1.9;
      this.refCar.Puissance_ch = 130;
      this.refCar.Indice_Perf = 90;
      this.refCar.VitesseMax_Kmh = 192;
      this.refCar.Couple_Nm = 300;
      this.refCar.acc_0_100 = 11.2;
      this.refCar.acc_400m_DA = 18;
      this.refCar.acc_0_200 = 100;
      this.refCar.acc_1000m_DA= 33.4;
      this.refCar.Indice_Perf= 80;
      

      //Mercedes C350e
      this.refCar.Cylindres = 6;
      this.refCar.Cylindree = 3.5;
      this.refCar.Puissance_ch = 272;
      this.refCar.Indice_Perf = 151;
      this.refCar.VitesseMax_Kmh = 250;
      this.refCar.Couple_Nm = 350;
      this.refCar.acc_0_100 = 6.7;
      this.refCar.acc_400m_DA = 14.8;
      this.refCar.acc_0_200 = 24.5;
      this.refCar.acc_1000m_DA= 27.1;
      

      this.dragRaceResults.Indice_Perf=this.opponentCar.Indice_Perf - this.refCar.Indice_Perf;
      this.dragRaceResults.Vmax=this.opponentCar.VitesseMax_Kmh - this.refCar.VitesseMax_Kmh;
      this.dragRaceResults.Couple_Nm=this.opponentCar.Couple_Nm - this.refCar.Couple_Nm;
      this.dragRaceResults.acc_0_100=this.opponentCar.acc_0_100 - this.refCar.acc_0_100;
      this.dragRaceResults.acc_400m_DA=this.opponentCar.acc_400m_DA - this.refCar.acc_400m_DA;
      this.dragRaceResults.acc_0_200=this.opponentCar.acc_0_200 - this.refCar.acc_0_200;
      this.dragRaceResults.acc_1000m_DA=this.opponentCar.acc_1000m_DA - this.refCar.acc_1000m_DA;

/*
      this.dragRaceResults.Indice_Perf=this.opponentCar.Indice_Perf - 60;
      this.dragRaceResults.Vmax=this.opponentCar.VitesseMax_Kmh - 180;
      this.dragRaceResults.Couple_Nm=this.opponentCar.Couple_Nm - 200;
      this.dragRaceResults.acc_0_100=this.opponentCar.acc_0_100 - 12;
      this.dragRaceResults.acc_400m_DA=this.opponentCar.acc_400m_DA - 20;
      this.dragRaceResults.acc_0_200=this.opponentCar.acc_0_200 - 50;
      this.dragRaceResults.acc_1000m_DA=this.opponentCar.acc_1000m_DA - 60;
      */
    }
  }


getDragRaceAcc0100Class(value):string {
        var vclass="";
        console.info("acc0100Class in:"+value);
        if (! value){
            console.info("undefined");
            vclass="dark";
        }else{

            if (value < 0) {
                console.info("Positif");
                vclass="danger";
            }else{
                console.info("Negatif");
             vclass="secondary";
            }
        }
        console.info("acc0100Class :"+vclass);
        return vclass;
    };


getDragRaceAcc0200Class(value):string {
        var vclass="";
        console.info("acc0200Class in:"+value);
        if (! value){
            console.info("undefined");
            vclass="dark";
        }else{

            if (value < 0) {
                console.info("Positif");
                vclass="danger";
            }else{
                console.info("Negatif");
             vclass="secondary";
            }
        }
        console.info("acc0200Class :"+vclass);
        return vclass;
    };


    getDragRaceAcc400mDaClass(value):string {
        var vclass="";
        console.info("acc400mDaClass in:"+value);
        if (! value){
            console.info("undefined");
            vclass="dark";
        }else{

            if (value < 0) {
                console.info("Positif");
                vclass="danger";
            }else{
                console.info("Negatif");
             vclass="secondary";
            }
        }
        console.info("acc400mDaClass :"+vclass);
        return vclass;
    };

getDragRaceCoupleClass(value):string {
        var vclass="";
        console.info("CoupleClass in:"+value);
        if (! value){
            console.info("undefined");
            vclass="light";
        }else{

            if (value > 0) {
                console.info("Positif");
                vclass="danger";
            }else{
                console.info("Negatif");
             vclass="secondary";
            }
        }
        console.info("CoupleClass :"+vclass);
        return vclass;
    };

    getDragRaceVmaxClass(value):string {
        var vclass="";
        console.info("VmaxClass in:"+value);
        if (! value){
            console.info("undefined");
            vclass="light";
        }else{

            if (value > 0) {
                console.info("Positif");
                vclass="danger";
            }else{
                console.info("Negatif");
             vclass="secondary";
            }
        }
        console.info("VmaxClass :"+vclass);
        return vclass;
    };

}
