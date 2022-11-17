import { Component, OnInit, Input } from '@angular/core';
import { MenuController, Platform, PopoverController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { PerfilInfoComponent } from 'src/app/components/perfil-info/perfil-info.component';
import { Componente } from 'src/app/interfaces/interfaces';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  @Input()
  nombre: string = localStorage.getItem("nomb");
  componentes: Observable<Componente[]>;
  url : string;
  getdata: any[] = [];
  constructor(private menuCtrl: MenuController,
              private DataService: DataService,
              private iab: InAppBrowser,
              private popoverCtrl: PopoverController,
              private platform : Platform,
              private router: Router)
              { }

  ngOnInit() {
    this.componentes = this.DataService.getMenuOpcion();
    console.log(this.nombre);
  };

  //----- Boton Menu -----

  mostrarMenu() {
    this.menuCtrl.open();

  }

 async presentPopover (ev:any) {

  const popover = await this.popoverCtrl.create({
    component: PerfilInfoComponent,
    event: ev,
    translucent: false
  });
  return await popover.present();
 }

MostrarInfo(){

  if(this.platform.is('ios') || this.platform.is('android')){

    this.url = 'https://www.sii.cl/destacados/boletas_honorarios/index.html#:~:text=La%20Boleta%20de%20Honorarios%20-%20Servicio%20de%20Impuestos%20Internos&text=La%20ley%2021.133%20establece%20que,llegando%20a%2017%25%20en%202028.'

    const browser = this.iab.create(this.url);
    browser.show();
    return;
  }
window.open(this.url, '_blank');
  

 }
 Vermas(){
  if(this.platform.is('ios') || this.platform.is('android')){

    this.url = 'https://www.sii.cl/destacados/subsidio_mipymes/subsidio_mypimes.html'

  const browser = this.iab.create(this.url);
  browser.show();
  return;
  }
  window.open(this.url, '_blank');
  
 }
 handleRefresh(event){
  setTimeout(() => {
    // Any calls to load data go here
    event.target.complete();
  }, 2000);
}
}