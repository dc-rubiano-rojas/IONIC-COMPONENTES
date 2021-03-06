import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Componente } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient) { }

  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getMenuOpt(){
    return this.http.get<Componente[]>('/assets/data/menu.json');
  }

  getAlbums(){
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getHeroes(){
    // Este pipe que importamos permite que la peticion
    // se tome con un delay en este caso de 1.5 s
    return this.http.get('/assets/data/superheroes.json')
                    .pipe(
                      delay(1500)
                    );
  }
}
