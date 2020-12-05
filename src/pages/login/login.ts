import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { ServidorProvider } from '../../providers/servidor/servidor';
import { HomePage } from '../home/home';



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  email: string;
  senha: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl: AlertController,
    public http: HttpClient,
    public servidor: ServidorProvider
  ) { }

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
    } else {
        this.http.get(this.servidor.urlGet()+'login.php?email='+this.email+'&senha='+this.senha).pipe(map(res => res))
        .subscribe(
          dados => {
            if(dados.msg.logado == 'sim') {

              if(dados.dados.status == 'Ativo') {
                let alert = this.alertCtrl.create({
                  title: 'Logado com Sucesso.',
                  message: `Seja Bem-Vindo(a) ${dados.dados.nome}!`
                })
                alert.present();
  
                this.navCtrl.setRoot(HomePage)
              } else {
                let alert = this.alertCtrl.create({
                  title: 'Permissão Negada!',
                  message: `O usuário não está ativo.`
                })
                alert.present();
              }
            } else {
              let alert = this.alertCtrl.create({
                title: 'Erro de login',
                message: 'Uusário Inválido.',
                buttons: ['OK']
              })
              alert.present();
            }
          }
        )
     }
  }
}
