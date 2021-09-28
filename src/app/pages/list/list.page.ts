import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista') lista: IonList;

  usuarios: Observable<any>;

  constructor( private dataService: DataService,
               public toastCtrl: ToastController) { }

  ngOnInit() {
    this.usuarios = this.dataService.getUsers();
  }


  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  favorite(user){
    // console.log('Favorite', user);
    this.presentToast('Guardo en Favoritos');
    this.lista.closeSlidingItems();
  }

  share(user){
    // console.log('Share', user);
    this.presentToast('Compartido');
    this.lista.closeSlidingItems();
  }

  borrar(user){
    // console.log('Borrar', user);
    this.presentToast('Borrado');
    this.lista.closeSlidingItems();
  }

}
