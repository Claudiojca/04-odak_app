import {  Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { Platform, PopoverController } from '@ionic/angular';
import { PerfilInfoComponent } from 'src/app/components/perfil-info/perfil-info.component';
import { SwiperOptions } from 'swiper';
import { SwiperComponent, SwiperModule } from 'swiper/angular';
import SwiperCore, { Pagination} from "swiper";
import { EmpresaServicioService } from './servicio-empresa/empresa-servicio.service';



SwiperCore.use([Pagination]);

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.page.html',
  styleUrls: ['./empresas.page.scss'],
  
  encapsulation: ViewEncapsulation.None
})
export class EmpresasPage implements OnInit {
  
  
  textoBuscar: string='';

  seleccion = undefined;
  id: any;
  rut: any;
  nombre_fantasia: any;
  categoria:any;
  telefono:any;
  correo:any;
  direccion:any;
  comuna:any;
  descripcion:any;
  imagen_logo:any;
  imagen_fondo:any;
  twitter:any;
  facebook:any;
  whatsapp:any;
  instagram:any;
  linkedin:any;
  titulo_descripcion: any;
  
 @ViewChild('swiper') swiper: SwiperComponent;

  nombre: string = localStorage.getItem("nomb");

  config: SwiperOptions={
    spaceBetween: 50,
    pagination: true,
  }
  
  constructor(private popoverCtrl: PopoverController,
              private empresaServicioService: EmpresaServicioService,
              private platform : Platform,
              private iab: InAppBrowser) { }
    listadoEmpresas:any=[];

    ngOnInit() {
      this.obtenerEmpre();
    }
    handleRefresh(event){
      setTimeout(() => {
        // Any calls to load data go here
        event.target.complete();
      }, 2000);
    }
    obtenerEmpre(){
  
      this.empresaServicioService.obtenerEmpre().subscribe((data)=> {
        console.log(data);
        this.listadoEmpresas = data;
      });
    }

  buscaremp(event){
   
    this.textoBuscar = event.detail.value;
  }

  async presentPopover (ev:any) {

    const popover = await this.popoverCtrl.create({
      component: PerfilInfoComponent,
      event: ev,
      translucent: false
    });
    return await popover.present();
   }

   bfacebook(){
   
    if(this.platform.is('ios') || this.platform.is('android')){

      this.facebook = this.facebook
  
    const browser = this.iab.create(this.facebook);
    browser.show();
    return;
    }
    window.open(this.facebook, '_blank');
   }
   binstagram(){

   }
   bwhatsapp(){

   }
   btwitter(){

   }
   blinkedin(){

   }
}
