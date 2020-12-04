import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhesContatoPage } from './detalhes-contato';

@NgModule({
  declarations: [
    DetalhesContatoPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhesContatoPage),
  ],
})
export class DetalhesContatoPageModule {}
