import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { MenuController, Platform, PopoverController } from '@ionic/angular';
import { PerfilInfoComponent } from 'src/app/components/perfil-info/perfil-info.component';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.page.html',
  styleUrls: ['./perfil-usuario.page.scss'],
})
export class PerfilUsuarioPage implements OnInit {
  nombre: string = localStorage.getItem("nomb");
  apellidos: string = localStorage.getItem("apell");
  correoempr: string = localStorage.getItem("ecorreo");
  nombrempre: string = localStorage.getItem("enomb");
  direccion: string = localStorage.getItem("edirec");
  telefono: string = localStorage.getItem("efono");
  tipousuario: string = localStorage.getItem("udescrip");
  imagenempr: any = localStorage.getItem("logoemp");

  constructor(private popoverCtrl: PopoverController,) { }

  npm: any;

  ngOnInit() {
 

  }

 
  async presentPopover (ev:any) {

    const popover = await this.popoverCtrl.create({
      component: PerfilInfoComponent,
      event: ev,
      translucent: false
    });
    return await popover.present();
   }

}
