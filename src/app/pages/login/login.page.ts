import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AnimationController, Animation, AlertController, NavController, LoadingController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { LoginService } from 'src/app/pages/login/servicio-login/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  nomb = "";
  loading: HTMLIonLoadingElement;

  //----- Datos ingresados -----
  correo: "";
  clave: "";

  @ViewChild('pie', { static: false }) pie: ElementRef;

  HttpClientModule: any;

  constructor(private animationCtrl: AnimationController,
    private LoginService: LoginService,
    private loadingCtrl: LoadingController,
    public servicio: DataService,
    public alertCtrl: AlertController,
    public navCtrl: NavController
  ) { }


  ngOnInit() { }

  //----- Boton Ingresar -----
  
  async Ingresar() {

    let data_cruda = {
      correo: this.correo,
      clave: this.clave,
    };

    this.LoginService.btlogin(data_cruda).subscribe(async respuesta => {
      console.log(respuesta);
      if (respuesta == '') {
       const alert = await this.alertCtrl.create({
        header: 'Error',
        subHeader: 'Datos incorrectos',
        message: 'Correo o Clave incorrectos',
        buttons: ['Aceptar'],
       });
       await alert.present();
      } else {
        
        this.nomb = respuesta[0].nombre;
        localStorage.setItem('nomb', this.nomb)
        this.navCtrl.navigateRoot('/inicio');
        const alert = await this.alertCtrl.create({
          header: 'Hola!',
          subHeader: 'Bienvenido a Odak',
          message: this.nomb,
          buttons: ['Aceptar'],
         });
         await alert.present();

      };
    });
  }
  handleRefresh(event){
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }
  async showLoading(message: string) {
    this.loading = await this.loadingCtrl.create({
      message,
    });

    this.loading.present();
  }

  //----- Animacion ----- 
  ngAfterViewInit() {
    const pieanimacion: Animation = this.animationCtrl.create()
      .addElement(this.pie.nativeElement)
      .duration(1000)
      .fromTo('transform', 'translateY(40px)', 'translateY(0px)')
      .fromTo('opacity', '0', '1');
    pieanimacion.play();
  }
}
