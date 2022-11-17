import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PerfilInfoComponent } from 'src/app/components/perfil-info/perfil-info.component';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
})
export class CalculadoraPage implements OnInit {
  nombre: string = localStorage.getItem("nomb");

  constructor(private popoverCtrl: PopoverController ) { }

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
   handleRefresh(event){
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }
  resultado=0;
  band=0;
  arreglo=[];

  Num(num){
    this.arreglo.push(num);
    if(this.band == 0){
      this.band=1;
      this.resultado=num;
    }else
    this.resultado+=num;
  }
  aritmetic(sim){
    this.arreglo.push(sim);
    this.band=0;
  }
  borrar(){
    this.arreglo=[];
    this.resultado=0;
  }
igual(){
  this.resultado=eval(this.arreglo.join(''));
  this.band=0;
}
}
