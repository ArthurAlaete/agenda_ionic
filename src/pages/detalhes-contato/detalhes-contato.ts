import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalhesContatoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhes-contato',
  templateUrl: 'detalhes-contato.html',
})
export class DetalhesContatoPage {

  contatos: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.contatos = this.navParams.get('detalhes')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesContatoPage');
  }

}
