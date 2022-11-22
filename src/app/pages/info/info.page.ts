import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PerfilInfoComponent } from 'src/app/components/perfil-info/perfil-info.component';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  nombre: string = localStorage.getItem("nomb");

  constructor(private popoverCtrl: PopoverController,) { }

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
