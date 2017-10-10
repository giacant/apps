import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';

import { MLApp } from './app.component';
import { InitPage } from '../pages/init/init';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

import { AutenticazioneProvider } from '../providers/autenticazione/autenticazione';
import { DatiPubbliciProvider } from '../providers/dati-pubblici/dati-pubblici';

@NgModule({
  declarations: [
    MLApp,
    HomePage,
    LoginPage,
    InitPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MLApp),
    IonicStorageModule.forRoot(),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MLApp,
    HomePage,
    LoginPage,
    InitPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AutenticazioneProvider,
    DatiPubbliciProvider
  ]
})
export class AppModule {}
