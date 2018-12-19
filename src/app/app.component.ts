import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { SettingsProvider } from '../providers/settings/settings';
import { AuthService } from '../services/auth';

import * as firebase from 'firebase/app';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;
  tabsPage = TabsPage;
  settingsPage = SettingsPage;
  loginPage = LoginPage;
  signupPage = SignupPage;
  theme: any;
  isAuthenticated: boolean = false;
  @ViewChild('nav') nav: NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCtrl: MenuController, private settingsProvider: SettingsProvider, private authService: AuthService) {
    const config = {
      apiKey: "AIzaSyCWBsKipslGrK2s3bghyuwRrbM3fuSi_Og",
      authDomain: "ionic-project-b6a2a.firebaseapp.com",
      databaseURL: "https://ionic-project-b6a2a.firebaseio.com",
      projectId: "ionic-project-b6a2a",
      storageBucket: "ionic-project-b6a2a.appspot.com",
      messagingSenderId: "1064738980138"
    };
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.isAuthenticated = true;
        this.rootPage = this.tabsPage;
      } else {
        this.isAuthenticated = false;
        this.rootPage = this.loginPage;
      }
    })

    this.settingsProvider.getActiveTheme().subscribe(val => this.theme = val);
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onLoad(page: any) {
    this.menuCtrl.close();
    this.nav.setRoot(page);
  }
  
  onLogout() {
    this.menuCtrl.close();
    this.authService.logout();
  }
}

