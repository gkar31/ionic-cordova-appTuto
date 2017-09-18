import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingsPreferencesPage } from './settings-preferences';

@NgModule({
  declarations: [
    SettingsPreferencesPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingsPreferencesPage),
  ],
})
export class SettingsPreferencesPageModule {}
