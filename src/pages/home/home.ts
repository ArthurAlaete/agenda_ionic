import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServidorProvider } from '../../providers/servidor/servidor';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title :string = 'Lista de Contatos'
  contatos: any;

  constructor(public navCtrl: NavController, public servidor: ServidorProvider) {

    this.getRetornar();

  }

  getRetornar() {
    this.servidor.getPegar()
      .subscribe(
        data => this.contatos = data,
        err => console.log(err)
      );
  }

}
