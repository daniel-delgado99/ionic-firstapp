import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { SettingsProvider } from '../../providers/settings/settings';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  selectedTheme: String;  

  constructor (private settingsProvider: SettingsProvider) {
    this.settingsProvider.getActiveTheme().subscribe(val => this.selectedTheme = val);
  }

  toggleAppTheme() {
    if (this.selectedTheme == 'dark-theme') {
      this.settingsProvider.setActiveTheme('light-theme');
    } else {
      this.settingsProvider.setActiveTheme('dark-theme');
    }
  }

}
