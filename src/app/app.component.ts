import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { InitPage } from '../pages/init/init';

@Component({
  templateUrl: 'app.html'
})
export class MLApp {
  rootPage:any = InitPage;
 
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
  
    platform.ready().then(() => {
      // Okay, so the plffatform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

