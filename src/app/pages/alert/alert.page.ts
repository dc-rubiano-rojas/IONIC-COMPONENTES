import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  titulo: string;

  constructor(public alertCtrl: AlertController) { }


  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [ {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Cancelar');
        }},
        {
          text: 'Ok',
          cssClass: 'primary',
          handler: (blah) => {
            console.log('Botón OK');
          }}]
    });

    await alert.present();
  }


  // INPUT
  async presentInput() {
    const alert = await this.alertCtrl.create({
      header: 'Ingrese titulo!',
      subHeader: 'Escriba aca',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Titulo'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (AlertOptions) => {
            console.log('Confirm Ok');
            this.titulo = AlertOptions.name1;
          }
        }
      ]
    });

    await alert.present();
  }

}
