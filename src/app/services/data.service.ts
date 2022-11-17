import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  loading: any;

  constructor( private http: HttpClient,
               private loadingCtrl: LoadingController,
               private Router: Router ) { }

  getUsuarios(){

    return this.http.get('https://jsonplaceholder.typicode.com/users');

  }

  getMenuOpcion(){

    return this.http.get<Componente[]>('/assets/data/menu-opcion.json');

  }
}
