import { Component, OnInit } from '@angular/core';
import {ModalController } from '@ionic/angular';
import { CotizacionPage } from '../cotizacion.page';
import { CotizacionServicioService } from '../servicio-cotizacion/cotizacion-servicio.service';

@Component({
  selector: 'app-inf-cotizacion',
  templateUrl: './inf-cotizacion.page.html',
  styleUrls: ['./inf-cotizacion.page.scss'],
})
export class InfCotizacionPage implements OnInit {

  datap:any;

  nproducto  : any;
  tproductos : any;
  pproducto  : any;
  

  listadoproductos = undefined;
  id_producto:any;
  nombre_producto:any;
  stock:any;
  precio_producto:any;
  selected: false;


 
  constructor(private modalCtrl: ModalController,
              private CotizacionServicioService:CotizacionServicioService) { }

  ngOnInit() {
    this.obtenerProduct();
  }
  obtenerProduct(){
    this.CotizacionServicioService.obtenerProduct().subscribe((data)=> {
      console.log(data);
      this.listadoproductos = data;
    });
  }
  Busproduct(evento){

  }

  addproduct(productos:any){
    this.datap = productos;
    console.log(this.datap);

  }
 async Agregarp(){
    this.modalCtrl.dismiss({
      


    });
  }

  Salir(){
    this.modalCtrl.dismiss();
  }
}

