import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

 

/*
  Generated class for the ServidorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServidorProvider {

  url : string = "http://localhost/php_BD/";

  constructor(public http: HttpClient) {
    console.log('Hello ServidorProvider Provider');

  }

  urlGet() {
    return this.url;
  }

  getPegar() {
    return this.http.get(`${this.url}dados.php`).pipe(map(resp => resp));
  }



}
