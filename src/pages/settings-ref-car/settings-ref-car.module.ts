import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingsRefCarPage } from './settings-ref-car';

@NgModule({
  declarations: [
    SettingsRefCarPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingsRefCarPage),
  ],
})
export class SettingsRefCarPageModule {}
