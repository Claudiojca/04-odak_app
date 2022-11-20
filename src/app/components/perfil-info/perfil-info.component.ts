import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-perfil-info',
  templateUrl: './perfil-info.component.html',
  styleUrls: ['./perfil-info.component.scss'],
})
export class PerfilInfoComponent implements OnInit {
  nombre: string = localStorage.getItem("nomb");

  constructor( private popoverCtrl : PopoverController,
               public navCtrl: NavController) { }

  ngOnInit() {}

  Tersesion(){
      this.navCtrl.navigateRoot('/login');
      localStorage.removeItem('nomb');
      this.popoverCtrl.dismiss();
    
  }

  
}
