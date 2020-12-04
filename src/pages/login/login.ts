import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  
})
export class LoginPage {

  email: string;
  senha: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  logar() {
    if(this.email == undefined || this.senha == undefined) {
      let alert = this.alertCtrl.create({
        title: 'Atenção',
        message: 'Por favor, preencha todos os campos.',
        buttons: ['OK']
      })
      alert.present()
    }
  }


}
