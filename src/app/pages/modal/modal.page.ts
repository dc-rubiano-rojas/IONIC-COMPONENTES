import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async abrirModal(){
    const modal = await this.modalCtrl.create({
      component: ModalInfoPage,
      // Con esto mando la informacion al hijo que la recibe con el @Input
      componentProps: {
        nombre: 'Daniel',
        pais: 'Colombia'
      }
    });

    await modal.present();

    // Esto es una promesa que esta escuchando cuando el modal se cierra
    // Lo que sea que vengaa del onDidDismiss() lo va a guardar en la variable data
    // y eso crea el objeto
    const {data} = await modal.onDidDismiss();


    console.log('Retorno del modal');
    console.log(data);
    console.log(JSON.stringify(data));

  }

}
