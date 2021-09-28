import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  constructor(private dataService: DataService) { }

  albumes: any[] = [];
  textoBuscar = '';

  ngOnInit() {
    this.dataService.getAlbums()
                    .subscribe(albumes =>{
                      // console.log(albumes);
                      this.albumes = albumes;
    });
  }

  buscar(event){
    // console.log(event);
    this.textoBuscar = event.detail.value;
  }

}
