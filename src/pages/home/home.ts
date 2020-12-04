import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServidorProvider } from '../../providers/servidor/servidor';
import { DetalhesContatoPage } from '../detalhes-contato/detalhes-contato';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title :string = 'Lista de Contatos';
  contatos: any;

  pessoa: Array<{codigo: any, nome: string, telefone: string, email: string}>
  pessoaTodos: Array<{codigo: any, nome: string, telefone: string, email: string}>

  constructor(public navCtrl: NavController, public servidor: ServidorProvider) {
    this.pessoa = [];
    this.getRetornar();
  }

  getRetornar() {
    this.servidor.getPegar()
      .subscribe(
        data => {
          
          this.contatos = data;

          this.pessoa = this.contatos.map((pessoa) => ({codigo: pessoa.codigo, nome: pessoa.nome, telefone: pessoa.telefone, email: pessoa.email}))
          this.pessoaTodos = this.pessoa;
        }
      )
      err => console.log(err);
  }

  detalhe(contato: any) {
    this.navCtrl.push(DetalhesContatoPage, {detalhes: contato});
  }

  getContatos(event: any) {
    const val = event.target.value;

    if (val && val.trim() != '') {
      this.pessoa = this.pessoaTodos.filter((contatos) => {
        return (contatos.nome.toLowerCase().indexOf(val.toLowerCase()) > -1)
      })
    } else {
      this.pessoa = this.pessoaTodos;
    }
  }



}
