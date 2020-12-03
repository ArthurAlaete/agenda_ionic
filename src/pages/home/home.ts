import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServidorProvider } from '../../providers/servidor/servidor';
import { filter } from 'rxjs/operators'

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

  this.getRetornar();

  }

  getRetornar() {
    this.servidor.getPegar()
      .subscribe(
        data => {
          
          this.contatos = data;

          for(let i = 0; i < data.lenght; i++) {
            
            this.pessoa.push({
              codigo: data[i]['codigo'],
              nome: data[i]['nome'],
              telefone: data[i]['telefone'],
              email: data[i]['email'],
            });
          }

          this.pessoaTodos = this.pessoa;

        }
      )
      err => console.log(err);
  }

  getContatos(event: any) {
    const val = event.target.value;

    if (val && val.trim() != '') {
      this.pessoa = this.pessoaTodos.filter((contatos) => {
        return (contatos.nome.toLowerCase().indexOf(val.toLowerCase()) > -1)
      })
    }
  }



}
