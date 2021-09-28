import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes = [ 'Aquaman', 'Superman', 'Batman', 'Flash', 'La mujer maravilla'];

  constructor() { }

  ngOnInit() {
  }

  reorder(event){
    console.log(event);
    // El splice() me recibe el valor que quiero modificar y el segundo parametro
    // cuantos queiro borrar y me retorna un nuevo arreglo
    const itemMover = this.personajes.splice(event.detail.from, 1)[0];
    this.personajes.splice(event.detail.to, 0, itemMover);
    // Esta funcion complete() viene del evento
    // y la usamos para que no se trabe cuando soltamos el
    // elemento
    event.detail.complete();
  }

  onClick(){
    console.log(this.personajes);
  }
}
