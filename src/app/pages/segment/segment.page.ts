import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  @ViewChild(IonSegment, {static: true}) segment: IonSegment;

  superHeroes: Observable<any>;
  publisher = '';
  todos = ['DC Comics', 'Marvel Comics'];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.segment.value = 'todos';
    this.superHeroes = this.dataService.getHeroes();
  }

  segmentChanged(event){
    const valorSegmento = event.detail.value;

    if (valorSegmento === 'todos'){
      // this.publisher es la variable que le estamos pasando al pipe
      // al dejarlo vacio el pipe me devuelve todo el arreglo
      this.publisher = '';
      // Ponemos el return para decir que no ejecute mas codigo
      return;
    }
    this.publisher = valorSegmento;

  }

}
