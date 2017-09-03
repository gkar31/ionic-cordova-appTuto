import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { SettingsPage } from '../pages/settings/settings';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CarServiceProvider } from '../providers/car-service/car-service';


@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    SettingsPage
  ],
    imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage, 
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SpeechRecognition,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CarServiceProvider
  ]
})
export class AppModule {}
