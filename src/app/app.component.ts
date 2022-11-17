import { Component } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componente } from './interfaces/interfaces';
import { DataService } from './services/data.service'


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  componentes: Observable<Componente[]>;
  nombre: string = localStorage.getItem("nomb");

  constructor( private DataService: DataService,
               private platform: Platform,
               public navCtrl: NavController

  ) {
    this.initializeApp();
   }
   //---- Inicialización del menu ----
  initializeApp() {
      this.platform.ready().then(() => {
      this.componentes = this.DataService.getMenuOpcion();
     
    })
  }
  //---- Cerrar Sesión ----
  Tersesion(){
    this.navCtrl.navigateRoot('/login');
    localStorage.removeItem('nomb');
  }
}
