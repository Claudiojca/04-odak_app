import { Component, Input, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { PerfilInfoComponent } from 'src/app/components/perfil-info/perfil-info.component';
import { InfCotizacionPage } from './inf-cotizacion/inf-cotizacion.page';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.page.html',
  styleUrls: ['./cotizacion.page.scss'],
})
export class CotizacionPage implements OnInit {

  


  nombre: string = localStorage.getItem("nomb");

  constructor(private popoverCtrl: PopoverController,
              private modalCtrl: ModalController ) { }

  ngOnInit() {
  }

  async Aproductos(){
    const modal = await this.modalCtrl.create({
      component: InfCotizacionPage
    });
    await modal.present();
    
    const {data} = await modal.onWillDismiss();
    console.log(data);
    }

  async presentPopover (ev:any) {

    const popover = await this.popoverCtrl.create({
      component: PerfilInfoComponent,
      event: ev,
      translucent: false
    });
    return await popover.present();
   }
   handleRefresh(event){
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }

}
