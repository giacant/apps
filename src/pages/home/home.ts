import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AutenticazioneProvider } from '../../providers/autenticazione/autenticazione';
import { DatiPubbliciProvider } from '../../providers/dati-pubblici/dati-pubblici';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  utente;
  squadre;

  constructor(public autenticazione:AutenticazioneProvider, public datiPubblici:DatiPubbliciProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.utente=this.autenticazione.utente;
    this.squadre=this.autenticazione.squadre;
  }

  ionViewCanEnter(){
    return this.autenticazione.loggato;
  }
}
