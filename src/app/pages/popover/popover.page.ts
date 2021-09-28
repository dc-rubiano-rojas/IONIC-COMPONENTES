import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from '../../components/popinfo/popinfo.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor( private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  async mostrarPop(evento){
    const popover = await this.popoverCtrl.create({
      component: PopinfoComponent,
      event: evento,
      mode: 'ios',
      backdropDismiss: false
    });

    await popover.present();

    // onDidDismiss() Cuando se haya cerrado
    // const {data} = await popover.onDidDismiss();

    // onWillDismiss() Cuando este apunto de cerrarse
    const {data} = await popover.onWillDismiss();
    console.log('Padre: ', data);
    // Recojo la data que me llega del componente
  }

}
