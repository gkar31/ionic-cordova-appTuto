import { Component, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavController , Platform, LoadingController} from 'ionic-angular';
import { CarServiceProvider } from '../../providers/car-service/car-service';

// Native Components
import { NativeStorage } from '@ionic-native/native-storage';
import { SpeechRecognition } from '@ionic-native/speech-recognition';

import { RaceResultPage } from '../race-result/race-result';


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html',
  providers: [CarServiceProvider]
})
export class HelloIonicPage {
  searchTerm: string = '';
  searchControl: FormControl;
  searching: any = false;

  isSpeechAvailable = false;
  isListening = false;
  textReco: Array<string> = [];
  dragRaceCarsList: Array<{Marque : String,
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
    Image: String}> =[]; 
    
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

  constructor(public navCtrl: NavController, private platform: Platform, public loadingController: LoadingController, private carsService: CarServiceProvider, private speech: SpeechRecognition, private changeDetector: ChangeDetectorRef,  private nativeStorage: NativeStorage) {
    /*  a commenter */

    this.loadReferenceCar();
    
    this.platform.ready().then(() => {
      this.speech.hasPermission()
        .then((hasPermission: boolean) => {
          console.log("As-ton la permission d utiliser le micro :"+hasPermission);
        
          if (!hasPermission){
            this.requestForSpeechRecognitionPermission();
          }})
    });

    this.speech.isRecognitionAvailable()
  .then((available: boolean) => this.isSpeechAvailable = available)
 /*a commenter*/


  this.searchControl = new FormControl();

  //Loading Spinner
  let loading = this.loadingController.create({
    spinner: 'bubbles',
    content: 'Loading...'
  });

  loading.present();

    carsService.getCarsList()
    .then(data =>{
      console.log("DragRace CarsService Then");
      console.log("DragRace :"+data);
      
      
      this.dragRaceCarsList = data;
      loading.dismiss();
    })

  }


  ionViewDidLoad() {
 
        //this.setFilteredItems();
 
        
            this.searching = false;
          //  this.setFilteredItems();

 
        
 
 
    }
 
    onSearchInput(){
        this.searching = true;
    }

  private requestForSpeechRecognitionPermission(): void {
    this.speech.requestPermission()
  .then(
    () => console.log('Granted'),
    () => console.log('Denied')
  )
  }


  listenForSpeech():void {
    this.speech.startListening().subscribe(data => {
      console.log("Speech :"+data);
      this.searchTerm = data[0];
      this.changeDetector.detectChanges(); 
      this.setFilteredItems();
    }, error => console.error("Speech error :"+error));
  }


public startListening(): void {
  let options = {
    language: 'fr-FR',
    matches: 1,
    prompt: 'Start to speak !',
    showPopup: true,
    showPartial: false
  }

  this.isListening = true;
  this.textReco = [];

  this.speech.startListening(options)
  .subscribe(
    (matches: Array<string>) => {
      this.isListening = false;
      console.log(matches)
      this.textReco = matches;
      this.searchTerm = matches[0];
      this.changeDetector.detectChanges();
      this.setFilteredItems();
      
    },
    (onerror) => {
      this.isListening = false;
      console.log('error:', onerror)
    }
  )
}

public stopListening(): void {
  this.speech.stopListening();
}

  async hasPermissions():Promise<boolean> {
    try {
        const hasPermission =  await this.speech.hasPermission();
      console.log("has Permissions :"+hasPermission);
      return hasPermission;
    } catch (error) {
      console.error("has Permissions error:"+error);  
    }
    
  }

  async getPermissions():Promise<void> {
    try {
        const permission =  await this.speech.requestPermission();
      console.log("Permissions :"+permission);
    } catch (error) {
      console.error("get Permissions error:"+error);  
    }
    
  }




   async isSpeechSupported():Promise<boolean> {
    const isSpeechAvailable =  await this.speech.isRecognitionAvailable();
    console.log("Speech available :"+isSpeechAvailable);
    return isSpeechAvailable;
  }


  setFilteredItems() {
    this.dragRaceCarsList = this.carsService.data;
        this.dragRaceCarsList = this.filterItems(this.searchTerm);
 
    }       

    filterItems(searchTerm){
      
      
        return this.dragRaceCarsList.filter((item) => {
          //console.log("Item :"+item.Marque);
            return item.Marque.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || item.Modele.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || item.Serie.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });     
 
    }



loadReferenceCar():void {
    this.nativeStorage.getItem('MC-RefCar')
  .then(
    data => {
      console.log("refCra :"+data);
      if(data){
      this.refCar = data.refCar;
      }
    },
    error => console.error(error)
  );
  }

itemTapped(event, item, refCar) {
    this.navCtrl.push(RaceResultPage, {
      item: item,
      refCar: refCar
    });
  }
}
