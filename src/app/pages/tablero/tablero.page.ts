import { Component, OnInit } from '@angular/core';
import { PerfilInfoComponent } from 'src/app/components/perfil-info/perfil-info.component';
import { PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.page.html',
  styleUrls: ['./tablero.page.scss'],
})
export class TableroPage implements OnInit {
  nombre: string = localStorage.getItem("nomb");

  constructor(private popoverCtrl: PopoverController) { }

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
