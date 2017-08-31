import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {SpeechRecognition} from '@ionic-native/speech-recognition';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public speech: SpeechRecognition, public navCtrl: NavController) {

  }


  listenForSpeech():void {
    this.speech.startListening().subscribe(data => console.log("Speech :"+data), error => console.error("Speech error :"+error));
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
}
